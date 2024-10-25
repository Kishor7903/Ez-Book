import Header from './components/header/Header'

import { Outlet } from 'react-router-dom'

//import Header from './components/header/Header'

function App() {

console.log(import.meta.env.VITE_APPWRITE_URL);
  return (
    <div className='min-h-screen flex flex-wrap content-between'>
      <div className='w-screen'>
        <Header />
        <main>
          <Outlet />
        </main>
        
      </div>
    </div>


  )
}

export default App
