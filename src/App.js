import './App.css';
import Navbar from './components/Navbar';
import gem    from './components/assets/gem.svg';
import Footer from './components/Footer';
import share  from './components/assets/share.png';
import money  from './components/assets/money.png';
import poster from './components/assets/oster.png';
import gift from './components/assets/gift.png';
import './ResponsiveMobile.css';
import './ResponsiveTablet.css';



function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <div className="sec-1">

        <div className='sec-1-a'>
          <p className='sec-1-h' data-aos="fade-down" data-aos-delay="500">Download the best book on programming languages</p>
          <p className='sec-1-s' data-aos="fade-in" data-aos-delay="550">Welcome to the library of the skull come in number to equip you with solid knowledge in programming through quality works</p>
          
          <button className='zbook-start' data-aos="zoom-in" data-aos-delay="600">
            <img src={gem}/>
            <p>Get Started !</p>
          </button>
        </div>

        <div data-aos="fade-down" data-aos-delay="700">
          <img src={poster} className="poster"/>
        </div>

      </div>
      <div style={{height:"7px"}}></div>

      <div className="sec-1" style={{backgroundColor:"transparent"}} >

          <div data-aos="fade-down" data-aos-delay="400">
              <img src={money} className="poster2"/>
          </div>
          
          <div className='sec-1-a'>
            <p className='sec-1-h' data-aos="fade-down" data-aos-delay="300">Save your money and download the best books for free</p>
            <p className='sec-1-s' data-aos="fade-in" data-aos-delay="310">Save your money and get quality service with books from top rogramming book publishers such as oreill and ackt</p>            
          </div>

      </div>

      <div style={{height:"47px"}}></div>

      {/*<div className="testimonials">

          <div className='testimonialsCard'>
            <img src={gift} className='testimonialsAvatar'/>
            <p>Lorem isum dolor citraem delare detras kira detro defari asadra kalem di u dum metra weri kaleum di nefat</p>
          </div>

          <div className='testimonialsCard'>
            <img src={gift} className='testimonialsAvatar'/>
            <p>Lorem isum dolor citraem delare detras kira detro defari asadra kalem di u dum metra weri kaleum di nefat</p>
          </div>

          <div className='testimonialsCard'>
            <img src={gift} className='testimonialsAvatar'/>
            <p>Lorem isum dolor citraem delare detras kira detro defari asadra kalem di u dum metra weri kaleum di nefat</p>
          </div>


  </div> */}

      <div style={{height:"47px"}}></div>
      <div className="sec-1" style={{backgroundColor:"transparent"}} >

        <div className='sec-1-a'>
          <p className='sec-1-h' data-aos="fade-down" data-aos-delay="300">Invite your friends and share the website to other rogrammers</p>
          <p className='sec-1-s' data-aos="fade-in" data-aos-delay="310">lus on sera nombreux lus il y aura de nouveaux contenus sur la lateforme  du skull librarry</p>            
        </div>
        
        <div data-aos="fade-down" data-aos-delay="400">
            <img src={share} className="poster2" style={{animation:"none"}}/>
        </div>
      </div>

      <div style={{height:"37px"}}></div>
      <Footer/>
      <div style={{height:"17px"}}></div>
     
    </div>
  );
}

export default App;
