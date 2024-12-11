import './stylesheets/App.scss';
import logo from './assets/images/logo.svg';
import dropdownlogo from './assets/images/icon-arrow-down.svg';
import { useState } from 'react';

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

  const [toggleState, setToggleState] = useState('collapsed');

  const handleDropDown = ()=>{
    setToggleState(toggleState === 'collapsed' ? 'expanded' : 'collapsed');
  }
  return(
    <div onClick={handleDropDown} className={`font-toggle ${toggleState}`}>
      <p className='font-fam clr-prime'>Sans Serif</p>
      <img src={dropdownlogo}/>
      <div className='options clr-prime-reverse bg-prime-reverse'>
          <ul>
            <li>Sans Serif</li>
            <li>Serif</li>
            <li>Mono</li>
          </ul>
      </div>
    </div>
  )
}

export {FontFamToggle}