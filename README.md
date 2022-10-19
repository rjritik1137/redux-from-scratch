1. You can look how you can make you own basic redux implementation.
2. I have created a connect function with takes two parameters like redux using that your component can subscribe to redux store.
3. You can also use useSelector and useDispatch hooks if you want for your functional component instead of connect, but connect will be needed for class components.
4. createStore take reducer, and it will create a store for you, that we can use for our application.
5. If you want to have multiple reducer, you can use combineReducer that takes all of your reducer as an object, and it will give you a single reducer with it's initial state, using these, you can pass this to create store.
6. Your component will only re-render if the subcribed data changes for your component changes in the store.
