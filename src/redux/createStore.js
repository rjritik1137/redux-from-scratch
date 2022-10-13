

const createStore=(reducer, preLoadedState)=>{
    let currentState = preLoadedState
    let currentListeners = []

    return {
        getState(){
            return currentState
        },
        dispatch(action){
            currentState = reducer(currentState, action)
            currentListeners.forEach(fn=>fn(currentState))
            return action
        },
        subscribe(fn){
            let isSubscribed = true
            currentListeners.push(fn)
            return ()=>{
                if(!isSubscribed) return 
                const index = currentListeners.indexOf(fn)
                currentListeners.splice(index,1)
                isSubscribed = false
            }
        }
    }
}

export {createStore}