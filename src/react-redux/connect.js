import React from 'react';
import { ReduxContext } from './Provider';
import shallowEqual from './shallowEqual';

const connect = (mapStateToProps, mapDispatchToProps) => {
    return (Component) =>
        class extends React.Component {
            static contextType = ReduxContext;
            getState(storeState) {
                return mapStateToProps
                    ? mapStateToProps(storeState, this.props)
                    : null;
            }

            getDispatchProps(dispatch) {
                return mapDispatchToProps
                    ? mapDispatchToProps(dispatch, this.props)
                    : { dispatch };
            }

            dispatchProps = this.getDispatchProps(this.context.dispatch);

            state = this.getState(this.context.getState());

            unsubscribe = null;

            componentDidMount() {
                if (!mapStateToProps) return;
                const { subscribe } = this.context || {};
                this.unsubscribe = subscribe?.((state) => {
                    const nextState = this.getState(state);
                    const isShallowEqual = shallowEqual(nextState, this.state);
                    if (!isShallowEqual) this.setState(nextState);
                });
            }

            componentWillUnmount() {
                this.unsubscribe && this.unsubscribe();
                this.unsubscribe = null;
            }

            render() {
                return (
                    <Component
                        {...this.props}
                        {...this.state}
                        {...this.dispatchProps}
                    />
                );
            }
        };
};

export default connect;
