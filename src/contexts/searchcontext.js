import { createContext, useContext, useState } from "react";

const SearchTermContext = createContext(null);

export const SearchProvider =({children})=>{

    const [searchKeyWord, setSearchKeyWord] = useState('');

    const [finalWord, setFinalWord] = useState('');

    const updateSearchKeyword=(e)=>{
        setSearchKeyWord(e.target.value);
    }

    const getFinalWord = ()=>{
        setFinalWord(searchKeyWord);
    }

    return(
        <SearchTermContext.Provider value={{searchKeyWord, updateSearchKeyword,finalWord, getFinalWord}}>
                {children}
        </SearchTermContext.Provider>
    )
}

export const useSearchObjects = ()=> useContext(SearchTermContext);