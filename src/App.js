import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import StepsGuide from './components/StepsGuide/StepsGuide';
import Tokenomics from './components/Tokenomics/Tokenomics';
import VestingSchedule from './components/VestingSchedule/VestingSchedule';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Tokenomics/>
      <StepsGuide/>
      <VestingSchedule/>
      <Footer/>
    </div>
  );
}

export default App;
