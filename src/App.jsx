import { useState, useEffect } from 'react'
import "./App.css";
import SyncLoader from "react-spinners/SyncLoader";
import Loader from './Loader/Loader'
import Header from './Header/Header'
import Timer from './Timer/Timer'
import Restrictions from './Restrictions/Restrictions'

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
        setLoading(false)
    }, 3000)
  }, [])
  
  return (
    <>
      {
        loading ?
          <Loader />
          :
          <>
            <Header />
            <Restrictions />
            <Timer />
          </>
      }
    </>
  )
}

export default App
