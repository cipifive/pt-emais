import { useState } from 'react'

import './App.css'
import { ExpensiveComponent } from './components/ExpensiveComponent'
import { Item } from './models/expensive-component'

function App() {
  const [data] = useState<Item[]>([
    {
      id : 1,
      name : "Item 1"
    },
    {
      id : 2,
      name : "Item 2"
    }
    ,
    {
      id : 3,
      name : "Item 3"
    }
    ,
    {
      id : 4,
      name : "Item 4"
    }
  ])

  return (
    <ExpensiveComponent 
      data={data}
    />
  )
}

export default App
