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
      <Schedule/>
      <Reminder/>
      
      <Income/>
    </>
  )
}

export default App
