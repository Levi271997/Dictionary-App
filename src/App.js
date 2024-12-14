import './stylesheets/App.scss';
import logo from './assets/images/logo.svg';
import dropdownlogo from './assets/images/icon-arrow-down.svg';
import iconSearch from './assets/images/icon-search.svg';
import iconPlay  from './assets/images/icon-play2.svg';
import iconPause  from './assets/images/icon-pause.svg';
import iconNewWindow  from './assets/images/icon-new-window.svg';
import iconSmily from './assets/images/smily.png';

import { useSearchObjects } from './contexts/searchcontext';

import { useContext, useEffect, useState } from 'react';

function App() {

  
  
  return (
    

    <div className="App">
        <AppHeader/>
        <section>
          <div className='container'>
              <div className='dictionary-body'>
                <SearchBar/>

               
                      <SearchResult/>
              

              </div>
          </div>
        </section>
    </div>
    

  );
}

export default App;

const SearchBar=()=>{

const {searchKeyWord, updateSearchKeyword, getFinalWord } = useSearchObjects();


  return(
    <div className='searchBar'>
      <input type='text' value={searchKeyWord} placeholder='Enter a word to find' onChange={updateSearchKeyword}/>
      <button className='searchBtn' onClick={getFinalWord}>
        <img src={iconSearch} alt=''/>
      </button>
    </div>
  )
}
export {SearchBar}
const SearchResult=()=>{
  const {finalWord} = useSearchObjects();


  
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  // useEffect(() => {
  //   // Define your API fetching function
  //   const fetchData = async () => {
  //     setLoading(true);
  //     setError(null); // Reset errors before fetching

  //     try {
  //       const response = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/keyboard');
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  //       const result = await response.json();
  //       setData(result); // Update the state with fetched data
  //       console.log(result);
  //     } catch (err) {
  //       setError(err.message); // Set the error state
  //     } finally {
  //       setLoading(false); // Ensure loading is stopped
  //     }
  //   };

  //   fetchData();
  // }, []); // Empty dependency array means this runs once on mount

  return (
    <>
      {finalWord ? (
        <div className='search-results_wrapper'>
          <div className='topbar'>
            <div className='word'>
              <p className='keyword'>{finalWord}</p>
              <p className='pronounciation'>/ˈkiːbɔːd/</p>
            </div>
            <button className='audio'>
              <audio>
                <source src="path/to/your/audio/file.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <img src={iconPlay} className='audioicons playicon' alt=''/>
              <img src={iconPause} className='audioicons pauseicon' alt=''/>

            </button>
          </div>

          <div className='meanings'>
              <div className='meanings__group'>
                  <div className='partsOfSpeech'>
                    <p>noun</p>
                    <div className='separator'></div>
                  </div>
                  <div className='definitionsGroup'>
                    <p className='title'>Meaning</p>
                    <ul>
                      <li>(etc.) A set of keys used to operate a typewriter, computer etc.
                        <span className='exampletext'>"This is a sample example"</span>
                      </li>
                      <li>(etc.) A set of keys used to operate a typewriter, computer etc.</li>
                      <li>(etc.) A set of keys used to operate a typewriter, computer etc.</li>
                    </ul>
                  </div>
                  <div className='synonyms'>
                    Synonyms <span>electronic keyboard</span>, <span>another keyboard</span>
                  </div>
                   <div className='anonyms'>
                    Anonyms <span>electronic keyboard</span>, <span>another keyboard</span>
                  </div>
              </div>
          </div>

          <div className='source'>
            <p>Source</p>
           <div className='sourceurl'>
            <a href='https://en.wiktionary.org/wiki/keyboard' target='_blank' rel='noreferrer'>https://en.wiktionary.org/wiki/keyboard</a>
              <img src={iconNewWindow} className='newWindowIcon' alt=''/>
            </div>
          </div>
        </div>
      ) : (
        <EmptySearch/>
      )}
    </>
  )
}
export {SearchResult}

const EmptySearch=()=>{
  return(
    <div className='empty-search'>
           
      <p className='emptyHeading'>Search Something</p>
      <p className='emptyText'>Type a word and click search and I will try to get the definition for you</p>
    
     </div>
  )
}
export {EmptySearch};


const EmptyResult=()=>{
  return(
    <div className='empty-search'>
      <img src={iconSmily} alt=''/>
      <p className='emptyHeading'>No Definitions Found</p>
      <p className='emptyText'>Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
    </div>
  )
}
export {EmptyResult};

const AppHeader = () => {
  return (
    <header>
        <div className='container'>
          <div className='header-wrapper'>
              <img src={logo} alt="Logo"/>
              <div className='right-toggles'>
                  <FontFamToggle/>
                  <ThemeSwitcher/>
              </div>
          </div>
        </div>
    </header>
  
  )
}
export {AppHeader};

const FontFamToggle=()=>{
  return(
    <div className={`font-toggle`}>
      <p className='font-fam clr-prime'>Sans Serif</p>
      <img src={dropdownlogo} alt=''/>
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


const ThemeSwitcher=()=>{
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
  };

  return(
   <div className='switcher-hold'>
      <div className='switcher'>
        <input type='checkbox' checked={isDark} onChange={toggleTheme}/>
        <div className='pointer'></div>
      </div>
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1 10.449C0.998458 12.8283 1.80169 15.1383 3.27914 17.0033C4.75659 18.8683 6.82139 20.1788 9.13799 20.7218C11.4545 21.2647 13.8866 21.0082 16.039 19.994C18.1912 18.9797 19.9373 17.2673 20.9931 15.1352C11.5442 15.1352 6.85799 10.4479 6.85799 1C5.09842 1.87311 3.61767 3.22033 2.58266 4.88981C1.54765 6.5593 0.999502 8.48469 1 10.449Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

    </div>
  )
}
export {ThemeSwitcher}

