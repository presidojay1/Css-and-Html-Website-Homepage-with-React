import React, {useState} from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import FirstBody from './Components/FirstBody';
import SecondBody from './Components/SecondBody';
import RedComponent from './Components/RedComponent';
import Accordion from './Components/Accordion';
import accordionData from './Components/AccordionData'
import Footer from './Components/Footer';
function App() {
  // const [data, setData] = useState(accordionData);
  return (
    <div className="App">
      <NavBar />
      <FirstBody />
      <SecondBody />
      <RedComponent />
      <Accordion accordionData={accordionData} />
      <Footer />
      <p>@alfa mohammed enterprises</p>
    </div>
  );
}

export default App;
