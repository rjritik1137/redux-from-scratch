import { store } from "../redux/store"

function useSelector(){
    return store.getState()
}

function useDispatch(){
    return store.dispatch
}