import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import PropTypes from "prop-types";
import pict from './components/myImage.jpg'




function App() {
  const name='Boussaffara Omar'
  const aboutme ='I am a freelance photographer and adventurer based out of a beautiful island in tunisia, called Djerba. '
  const work='street photography'
  const deatails='Contact Me'
  const propsFunction = () => {
    alert('Welcome ${name} ')
  }
  const getNumber=(number) => {
    console.log(number)
  }
  const getData = (info) => {
    console.log(info)
  }
  return (
    <div className="App">
     <Header getData={getData} fullName={name} Bio={aboutme} profession={work} alertFct={propsFunction}></Header>
   
     <img src={pict} alt ='myImage' />
   


   
    
     
     <Footer  contact={deatails} getNumber={getNumber}/>


    </div>
  );
}

export default App;
