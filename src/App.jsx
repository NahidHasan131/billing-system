import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Sidebar from './Components/Sidebar'
import Invoices from './Pages/Invoices'
import Navbar from './Components/Navbar'

function App() {

  return (
    <Router>
      <div className='d-flex' style={{height:'100vh'}}>
        <div style={{width:'250px', overflowY: 'auto'}}>
          <Sidebar></Sidebar>
        </div>
        <div className='flex-grow-1 ps-4' style={{overflowY: 'auto'}}>
          
          <Navbar></Navbar>
          <Routes>
            <Route path='/invoice' element={<Invoices></Invoices>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
