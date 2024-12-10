// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from './components/Navbar/Navbar';
import Reminder from './components/Reminder/reminder';
import Schedule from './components/Schedule/schedule';
import Income from './components/Income/Income';
import './App.css'

function App() {
  return (
    <>
      <Navbar/>
      <Reminder/>
      <Schedule/>
      <Income/>
    </>
  )
}

export default App
