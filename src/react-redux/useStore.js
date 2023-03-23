import { useContext } from 'react';
import { ReduxContext } from './Provider';

function useStore() {
    const store = useContext(ReduxContext);

    return store;
}
export default useStore;
