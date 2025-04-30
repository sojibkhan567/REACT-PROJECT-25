import { Profiler, useState } from 'react'
import './App.css'
import Login from './components/Login'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile'
import UserContext from './context/UserContext'

function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      <h1>Context Api Project</h1>
      <UserContext.Provider value={{ user, setUser }}>
        <Login />
        <Profile />
      </UserContext.Provider>


    </>
  )
}

export default App
