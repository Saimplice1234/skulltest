import './App.css';
import Navbar from './components/Navbar';
import gem from './components/assets/gem.svg';
import poster from './components/assets/logo.png';
import './ResponsiveMobile.css';
import './ResponsiveTablet.css';
function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <div className="sec-1">

        <div className='sec-1-a'>
          <p className='sec-1-h'>Download the best Of programming languages book</p>
          <p className='sec-1-s'>Dowload your book as you want and economize your money lorem isum dolor citraem daea citraem di dolor suri detra di</p>
          <button className='zbook-start'>
            <img src={gem}/>
            <p>Start With Zbook</p>
          </button>
        </div>

        <div>
          <img src={poster} className="poster"/>
        </div>

      </div>
      <div style={{height:'90px'}}></div>
    </div>
  );
}

export default App;
