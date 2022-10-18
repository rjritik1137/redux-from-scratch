import React from 'react';
import { ReduxContext } from './Provider';

const connect = (mapStateToProps, mapDispatchToProps) => {
    return (Component) =>
        class extends React.Component {
            static contextType = ReduxContext;
            state = mapStateToProps(this.context.getState());
            unsubscribe = null;
            componentDidMount() {
                const { subscribe } = this.context || {};
                this.unsubscribe = subscribe?.((state) => {
                    if (state !== this.state)
                        this.setState(mapStateToProps(state));
                });
            }
            componentWillUnmount() {
                this.unsubscribe && this.unsubscribe();
                this.unsubscribe = null;
            }
            render() {
                const dispatchProps = mapDispatchToProps
                    ? mapDispatchToProps(this.context.dispatch)
                    : { dispatch: this.context.dispatch };
                return (
                    <Component
                        {...this.props}
                        {...this.state}
                        {...dispatchProps}
                    />
                );
            }
        };
};

export { connect };
