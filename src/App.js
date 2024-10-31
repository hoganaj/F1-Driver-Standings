import './App.css';
import CardRail from './components/cardRail';
import DriverStandings from './components/driverStandingsTable';
import Header from './components/header';
import ParallaxHero from './components/parallaxHero';

function App() {

  const cards = [
    {
        title: 'Oracle Virtual Lap In Monza',
        tag: 'Virtual Lap',
        time: '6 min read',
        icon: 'play',
        image: '/media1.png',
        link: 'https://www.redbullracing.com/int-en',
    },
    {
        title: 'Oracle Strategy Guide',
        tag: 'Oracle Strategy Guide',
        time: '4 min',
        icon: 'play',
        image: '/media2.png',
        link: 'https://www.redbullracing.com/int-en/races',
    },
    {
        title: 'Oracle Cloud Telemetry Data Checo',
        tag: 'Data',
        time: '3 min read',
        icon: 'pie',
        image: '/media3.png',
        link: 'https://www.redbullracing.com/int-en/team',
    },
  ];

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
      <CardRail cards={cards}/>
      <DriverStandings/>
    </div>
  );
}

export default App;
