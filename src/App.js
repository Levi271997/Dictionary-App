import './stylesheets/App.scss';
import logo from './assets/images/logo.svg';
import dropdownlogo from './assets/images/icon-arrow-down.svg';

function App() {
  return (
    <div className="App">
        <AppHeader/>
    </div>
  );
}

export default App;

const AppHeader = () => {
  return (
    <header>
        <div className='container'>
          <div className='header-wrapper'>
              <img src={logo} alt="Logo"/>
              <div className='right-toggles'>
                  <FontFamToggle/>
              </div>
          </div>
        </div>
    </header>
  )
}
export {AppHeader};

const FontFamToggle=()=>{
  return(
    <div className='font-toggle'>
      <p className='font-fam clr-prime'>Sans Serif</p>
      <img src={dropdownlogo}/>
    </div>
  )
}

export {FontFamToggle}