import Layout from '../components/Layout'
import { login } from '../utils/utils'
import { useState, useReducer } from 'react'

function loginReducer(state, action) {
  switch (action.type) {
    case 'field': {
      return {
        ...state,
        [action.field]: action.value,
      }
    }
    case 'login': {
      return {
        ...state,
        isLoading: true,
        error: '',
      }
    }
    case 'success': {
      return {
        ...state,
        isLoggedIn: true,
      }
    }
    case 'error': {
      return {
        ...state,
        error: 'Wrong username or password, try again!',
        isLoading: false,
        username: '',
        password: '',
      }
    }
    case 'logout': {
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        username: '',
        password: '',
        error: '',
      }
    }

      break;

    default:
      break;
  }
  return state
}

const initialState = {
  username: '',
  password: '',
  isLoading: false,
  error: '',
  isLoggedIn: false,
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(loginReducer, initialState)

  const { username, password, isLoading, error, isLoggedIn } = state;

  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')
  // const [isLoading, setIsLoading] = useState(false)
  // const [error, setError] = useState('')
  // const [isLoggedIn, setIsLoggedIn] = useState(false)

  const onSubmit = async e => {
    e.preventDefault()

    dispatch({ type: 'login' })
    // setIsLoading(true)
    // setError('')

    try {
      await login({ username, password })
      // setIsLoggedIn(true)
      dispatch({ type: 'success' })
    } catch (error) {
      dispatch({ type: 'error' })
      // setError('Incorrect username or password, please check your details & try again')
    }
  }

  // function logOut() {
  //   setIsLoggedIn(false)
  //   setUsername('')
  //   setPassword('')
  //   setError('')
  // }

  return (
    <Layout>
      <div>
        <h1>Use Reducer - Login Example</h1>
        <div className="App">
          <div className="login-container">
            {isLoggedIn ?
              <>
                <h1>Hello {username}</h1>
                <button
                  className="logout"
                  onClick={() => dispatch({ type: 'logout' })}>
                  Log Out
                </button>
              </> :
              <form action="" className="form" onSubmit={onSubmit}>
                {error && <p className="error">{error}</p>}
                <p>Please Login</p>
                <input
                  type="text"
                  placeholder="Username"
                  // onChange={e => setUsername(e.target.value)} 
                  onChange={e =>
                    dispatch({
                      type: 'field',
                      field: 'username',
                      value: e.target.value,
                    })
                  } />
                <input
                  type="text"
                  placeholder="password"
                  autoComplete="new-passowrd"
                  // onChange={e => setPassword(e.target.value)} 
                  onChange={e => dispatch({
                    type: 'field',
                    field: 'password',
                    value: e.target.value
                  })}
                />
                <button type="submit" className="submit" disabled={isLoading}>
                  {isLoading ? 'Logging In..' : 'Log In'}
                </button>
              </form>
            }
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default UseReducer