// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from './components/Navbar/Navbar';
import Reminder from './components/Reminder/Reminder';
import Schedule from './components/Schedule/Schedule';
import Income from './components/Income/Income';
import './App.css'

function App() {
  return (
    <>
      <Navbar/>
      <div style={{ width: '100vw', height: '70vh', position: 'relative'}}>
        <Schedule/>
        <Income/>
      </div>
      <Reminder/>
      
      
    </>
  )
}

export default App
