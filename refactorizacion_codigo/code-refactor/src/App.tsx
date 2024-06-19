import { useState } from 'react'
import './App.css'
import { User } from './models/user'
import { UserProfile } from './components/UserProfile'

function App() {

  const [user] = useState<User>({
    name : 'Carlos',
    email : 'cperezsilos5@gmail.com',
    address : {
      city : 'Santa Cruz de Bezana',
      street : 'Avenida de la Libertad 19',
      zipcode : '39108'
    }
  })

  return (
    <UserProfile 
      user={user}
    />
  )
}

export default App
