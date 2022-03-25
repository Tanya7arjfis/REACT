import logo from './logo.svg';
// import companyName from './img/image1.png'
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Service from './Service';
import ToolsComp from './ToolsComp';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        {/* <div className='container'>
          <div className='header__block'>
            <p className='company-name'>aperture</p>
            <div >
              <ul className='header__nav'>
                <li className='nav_list'><a>Business areas</a></li>
                <li className='nav_list'><a>Featured images</a></li>
                <li className='nav_list'><a>Gear cage</a></li>
                <li className='nav_list'><a>Contact</a></li>
                <li className='nav_list'><a>Get template</a></li>
              </ul>
            </div>
          </div>
        </div> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <section className='aperture'>
        {/* <img src={companyName} alt="aperture" /> */}
        <div className='container aperture_img'>
          <div className='aperture__block'> 
            <p className='aperture__item second-color'>Photographer & Filmmaker</p>
            <h1 className='aperture__title'>Aperture Studios</h1>
            <p className='aperture__text second-color'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>

        </div>
      </section>
      <section>
        <div className='container main-contant'> 
        <Sidebar />
        <Service />
        </div>
      </section>
      <section className=''>
        <ToolsComp />
      </section>
    </div>
  );
}

export default App;
