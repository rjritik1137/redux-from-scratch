1. You can look how you can make you own basic redux implementation using context API.
### 
2. I have created a connect function with takes two parameters like redux using that your component can subscribe to redux store.
### 
3. You can also use useSelector and useDispatch hooks if you want for your functional component instead of connect, but connect will be required for class components.
### 
4. To initialise a store, use createStore. It takes your reducer and initial state. It will create a store for you, that you can use for your application.
### 
5. If you want to have multiple reducer, you can pass all of your reducers to combineReducer as an object, and it will give you a single reducer with it's initial state, following that, you can pass these to createStore to create your store.
### 
6. On top of everything, there is a provider at the root level, created from the useContext api given by react, that will provide the access of your store to all of its consumers using connect, and hooks.
###
7. Your component will only re-render if the subcribed data changes for your component changes in the store.
###
<br/><br/><br/><br/>
<h1>useSelector Hook</h1>
<ul>
<li>You can use it to extract the part of the store for your component.
</li>
<li>It expects a selector function(should be pure and same in each render, or should be wrapped with useCallback hook) from your component to extract the state from the redux store.
</li>

<li>It uses useState hook internally, there it has the initial state from the store, and in useEffect we have subscribed to the redux.
</li>
<li>Whenever something changes in the store, this subcriber will execute, and it compares the previous and current reference of your state. If there is a change in reference, it re-renders your component.
</li>
<li>
Unsubscriber returned from the subscribe function will unsubcribe from the redux, whenever your component unmounts/change in dependency array. i.e. (state, selector function, subscribe function)
</li>
</ul>

<h1>useDispatch Hook</h1>
<ul>
<li>It gives you a dispatch function, that you can call with an action, containing a type and a payload to update the redux store.
</li>
</ul>

<h1>connect function</h1>
<ul>
<li>
It expects two parameter (mapStateToProps, mapDispatchToProps), that you can use to have your state from the redux, and dispatch action as a props to your component. This will return an higher order function to which you need to pass your component.
</li>
<li>
For now, mapStateToProps is a required parameter, I haven't made it optional, it could be optional.
</li>
</ul>
