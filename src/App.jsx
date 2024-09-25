import Header from './components/header/Header'

import { Outlet } from 'react-router-dom'

//import Header from './components/header/Header'

function App() {


  return (
    <div className='min-h-screen flex flex-wrap content-between'>
      <div className='w-full block'>
        <Header />
        <Outlet />
      </div>
    </div>


  )
}

export default App
