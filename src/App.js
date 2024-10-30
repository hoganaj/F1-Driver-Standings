import './App.css';
import DriverStandings from './components/driverStandingsTable';
import Header from './components/header';
import ParallaxHero from './components/parallaxHero';

function App() {
  return (
    <div className="App">
      <Header/>
      <ParallaxHero 
        backgroundImage="/backgroundBuildings.png"
        foregroundImage="/foregroundCar.png"
        title="Monaco Grand Prix" 
        date="24-27 NOV 2023"
        location="Monaco"
      />
      <DriverStandings/>
    </div>
  );
}

export default App;
