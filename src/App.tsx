// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from './components/Navbar/Navbar';
import Reminder from './components/Reminder/Reminder';
import History from './components/History/History';
import Schedule from './components/Schedule/Schedule';
import Income from './components/Income/Income';
import IncomeOverview from './components/IncomeOverview/IncomeOverview';
import {Feedback}  from './components/Feedback/Feedback';
import { DateProvider } from './components/Schedule/DateContext';
import './App.css'

function App() {

  return (
    <>
      <Navbar/>
      <div style={{ width: '100vw', height: '90vh', position: 'relative'}}>
        <DateProvider>
          <Schedule/>
        </DateProvider>
        <Income/>
        <Feedback/>
        <IncomeOverview/>
        <History/>
        <Reminder/>
      </div>
    </>
  )
}

export default App
