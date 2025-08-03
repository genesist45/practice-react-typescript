import { useContext } from 'react'
import { UserContext } from './UserContext'

function User() {
  // 👉 Gamiton nato ang context gamit ang useContext hook.
  // Nakuha nato ang value nga gi-provide gikan sa UserContextProvider.
  const userContext = useContext(UserContext)

  // 👉 Function para mo-login og mock user (sample lang)
  const handleLogin = () => {
    if (userContext) {
      userContext.setUser({
        name: "Hunter",
        email: "Hunter@example.com"
      })
    }
  }

  // 👉 Function para mo-logout (ibalik ang user state sa null)
  const handleLogout = () => {
    if (userContext) {
      userContext.setUser(null)
    }
  }

  return (
    <>
      {/* 
        Pag click sa login button — mo set og user data
        Pag click sa logout — mo clear sa user data (set null)
      */}
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>

      {/* 
        I-display lang kung naa’y user data.
        Gamit og optional chaining (?.) para likay sa error kung null ang user
      */}
      <h3>Welcome Back, {userContext?.user?.name}</h3>
      <p>Email: {userContext?.user?.email}</p>
    </>
  )
}

export default User
