Redux
-store: A Redux store holds the state tree. The only way to change the data in the store is to call dispatch()  on it.

    There should only be a single store in your app. To specify how different parts of the state tree respond to actions, you may combine several reducers into a single reducer function by using combineReducers.

-reducer: Reducers specify how the application's state changes in response to actions sent to the store. 
    Remember that actions only describe what happened, but don't describe how the application's state changes.
    It changes the state based on the action type and its payload (if an ADD_ARTICLE action has been sent, it updates the state)

-action: Payloads of information that send data from the app to the store. Basically a payload with a specific action type.
    