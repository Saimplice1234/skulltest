import './App.css';
import Navbar from './components/Navbar';
import gem from './components/assets/gem.svg';
import money from './components/assets/money.png';
import poster from './components/assets/oster.png';
import './ResponsiveMobile.css';
import './ResponsiveTablet.css';
import Footer from './components/Footer';
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
      <div style={{height:"7px"}}></div>

      <div className="sec-1" style={{backgroundColor:"transparent"}}>

          <div>
              <img src={money} className="poster2"/>
          </div>
          
          <div className='sec-1-a'>
            <p className='sec-1-h'>Save your money and download the best books for free</p>
            <p className='sec-1-s'>Save your money and get quality service with books from top rogramming book publishers such as oreill and ackt</p>            
          </div>

      </div>
      
      <Footer/>
     
    </div>
  );
}

export default App;
