import { useState, createContext } from 'react'

// 👉 Type structure para sa user nga authenticated.
// Ang user kay naay `name` ug `email` nga puro string.
interface AuthUser {
  name: string,
  email: string
}

// 👉 Type structure sa context:
// - `user` nga AuthUser or null (kung walay naka-login)
// - `setUser` nga function para usbon ang user state
interface UserContextType {
  user: AuthUser | null,
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

// 👉 Props nga gamiton para sa context provider, mo-receive ug mga child components.
interface UserContextProviderProps {
  children: React.ReactNode
}

// 👉 Create context nga mo-handle sa user state ug setUser function.
// Ang initial value niya kay `null` (kay wala pa naka-login by default)
export const UserContext = createContext<UserContextType>({} as UserContextType)

export function UserContextProvider({ children }: UserContextProviderProps) {
  // 👉 State nga mo-handle kung kinsa ang current nga user (or null kung wala)
  const [user, setUser] = useState<AuthUser | null>(null)

  return (
    <>
      {/* 
        Ang UserContext.Provider mohatag og value nga object:
        { user, setUser } — available ni sa tanang children components 
      */}
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    </>
  )
}
