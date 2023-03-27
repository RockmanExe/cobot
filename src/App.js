import './App.css';
import NavBar from './navbar';
import About from './about';
import Gallery from './gallery';
import Team from './team';

const images = [
  'https://i.imgur.com/VwDe2Ta.png',
  'https://i.imgur.com/AJ1l32C.png',
  'https://i.imgur.com/HLbypJh.jpg',
  'https://i.imgur.com/qOGEePJ.jpg',
  'https://i.imgur.com/x5dIaB0.jpg',
];

function App() {
  return (
    <div className="App">
      <div>
        <NavBar/>
      </div>
      <h1 className= "home" id = "home"> Florida Tech Cobot Team </h1>
      <div>
        <About/>
      </div>
      <div>
        <Gallery images = {images}/>
      </div>
      <div>
        <Team/>
      </div>
    </div>
  );
}

export default App;
