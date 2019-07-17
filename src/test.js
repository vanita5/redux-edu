import { createStore } from './redux'

// Example reducer
const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

const store = createStore(counter)

console.log(`Initial state: ${store.getState()}`)
console.log('----------------\n')

console.log('Incrementing state...')
store.dispatch({ type: 'INCREMENT' })
console.log(`State: ${store.getState()}`)
console.log('----------------\n')

console.log('Decrementing state...')
store.dispatch({ type: 'DECREMENT' })
console.log(`State: ${store.getState()}`)
console.log('----------------\n')

console.log('Subscribing to the store...')
// Basic listener
const listener = () => console.log(`Listener got a new state: ${store.getState()}`)
const unsubscribe = store.subscribe(listener)
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })
console.log('----------------\n')

console.log('Unsubscribing...')
unsubscribe()
console.log('No output for the following actions!')
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })