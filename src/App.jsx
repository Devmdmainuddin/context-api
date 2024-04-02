
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import { Hourglass } from 'react-loader-spinner'
import { useContext } from 'react'
import { AuthContext } from './Contaxt/AuthProvider'

function App() {
  const { loader } = useContext(AuthContext)

  if (loader) {
    return <div>
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#306cce', '#72a1ed']}
      />
      {/* <span className="loading loading-dots loading-xs"></span>
  <span className="loading loading-dots loading-sm"></span>
  <span className="loading loading-dots loading-md"></span>
  <span className="loading loading-dots loading-lg"></span> */}
    </div>
  }


  
  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div className=' '>

        <Outlet ></Outlet>

      </div>
      <div>

      </div>

    </>
  )
}

export default App
