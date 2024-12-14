import { createContext, useContext, useState } from "react";

const SearchTermContext = createContext(null);

export const SearchProvider =({children})=>{

    const [searchKeyWord, setSearchKeyWord] = useState('');

    const updateSearchKeyword=(e)=>{
        setSearchKeyWord(e.target.value);
    }

    return(
        <SearchTermContext.Provider value={{searchKeyWord, updateSearchKeyword}}>
                {children}
        </SearchTermContext.Provider>
    )
}

export const useSearchObjects = ()=> useContext(SearchTermContext);