const createStore = reducer => {
    let state
    let listeners = []

    const getState = () => state

    /**
     * Dispatching an action will call the reducer
     * to calculate a new state and notify
     * all subscribed listeners.
     *
     * @param action
     */
    const dispatch = action => {
        state = reducer(state, action)
        listeners.forEach(listener => listener())
    }

    /**
     * Push a new listener to our listener array.
     * Returns a new function which removes that listener from
     * the array - this way we can unsubscribe listeners if we need to.
     *
     * @param listener
     * @returns {function(): *[]}
     */
    const subscribe = listener => {
        listeners.push(listener)
        return () => listeners = listeners.filter(l => l !== listener)
    }

    /**
     * Dummy action to set the initial state inherited
     * from the given reducer.
     */
    dispatch({})

    return { getState, dispatch, subscribe }
}

export { createStore }