import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Sidebar from './Components/Sidebar'
import Invoices from './Pages/Invoices'
import Dashboard from './Pages/Dashboard'
import Navbar from './Components/Navbar'

function App() {

  return (
    <Router>
      <div className='d-flex' style={{height:'100vh', overflow: 'hidden'}}>
        <div style={{width:'250px', overflowY: 'auto'}}>
          <Sidebar></Sidebar>
        </div>
        <div className='flex-grow-1' style={{overflowY: 'auto', overflowX: 'hidden', padding: '0 1rem'}}>
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Dashboard></Dashboard>}></Route>
            <Route path='/invoice' element={<Invoices></Invoices>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
