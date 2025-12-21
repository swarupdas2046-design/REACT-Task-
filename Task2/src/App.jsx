import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Mid from "./components/Mid.jsx";
import Semi_mid from "./components/Semi_mid.jsx";
import Card from "./components/Card.jsx";


const App = () => {
  return (
    <div className="main">
      <Nav/>  
      <Hero/>
      <Mid/>
      <Semi_mid/>
      <Card/>
    </div>
  )
}

export default App
