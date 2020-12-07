import Layout from './components/Layout'
import React, { useReducer, useContext, useEffect, useRef } from 'react'

function appReducer(state, action) {
  switch (action.type) {
    case 'reset': {
      return action.payload
    }
    case 'add': {
      return [
        ...state,
        {
          id: Date.now(),
          text: '',
          completed: false,
        },
      ]
    }
    case 'delete': {
      return state.filter(item => item.id !== action.payload)
    }
    case 'completed': {
      return state.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item
      })
    }
    default: {
      return state
    }
  }
}

const Context = React.createContext()

const AdvancedHooks = () => {
  const [state, dispatch] = useReducer(appReducer, [])

  const didRun = useRef(false)

  useEffect(() => {
    if (!didRun.current) {
      const raw = localStorage.getItem('todos')
      dispatch({ type: 'reset', payload: JSON.parse(raw) })
      didRun.current = true
    }
  })

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state))
  }, [state])

  return (
    <Context.Provider value={dispatch}>
      <Layout>
        <h1>Advanced Hooks - ToDo's</h1>
        <button onClick={() => dispatch({ type: 'add' })}>New ToDo</button>
        <TodosList items={state} />
      </Layout>
    </Context.Provider>
  )
}

function TodosList({ items }) {
  return items.map(item => <TodoItem key={item.id} {...item} />)
}

function TodoItem({ id, completed, text }) {
  const dispatch = useContext(Context)
  return (
    <div>
      <input type="checkbox" checked={completed} onChange={() => dispatch({ type: 'completed', payload: id })} />
      <input type="text" defaultValue={text} />
      <button onClick={() => dispatch({ type: 'delete', payload: id })}>Delete</button>
    </div>
  )
}

export default AdvancedHooks