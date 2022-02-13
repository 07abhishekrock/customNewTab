import React from 'react'

import SearchIcon from 'assets/searchIcon.svg';
import GoogleIcon from 'assets/googleIcon.svg';
import MailIcon from 'assets/mailIcon.svg';
import YoutubeIcon from 'assets/youtubeIcon.svg';

import './oneStopSearch.css';
import TapSwitchSelector, { TapSwitchOption } from 'components/ui/TapSwitchSelector';
import FormState from '../FormState';

enum SEARCH_TYPE_KEYWORDS{
     GOOGLE = 'google',
     MAIL = 'mail',
     YOUTUBE = 'youtube'
}

const SEARCH_OPTIONS : TapSwitchOption<SEARCH_TYPE_KEYWORDS>[] = [
     {
          optionBody : <GoogleIcon/>,
          optionValue : SEARCH_TYPE_KEYWORDS.GOOGLE,
          optionID : 'google'
     },
     {
          optionBody : <MailIcon/>,
          optionValue : SEARCH_TYPE_KEYWORDS.MAIL,
          optionID : 'mail'
     },
     {
          optionBody : <YoutubeIcon/>,
          optionValue : SEARCH_TYPE_KEYWORDS.YOUTUBE,
          optionID : 'youtube'
     }
];

const SEARCH_INITIAL_STATE : OneStopSearchFormStateType = {
     searchString : '',
     searchType : SEARCH_TYPE_KEYWORDS.GOOGLE
}

type OneStopSearchFormStateType = {
     searchString : string,
     searchType : SEARCH_TYPE_KEYWORDS
};


function OneStopSearch(){

     return (
     <FormState 
          initialFormState={SEARCH_INITIAL_STATE}
          render={(searchFormState , setSearchFormState)=>{

               return <form className="one-stop-search">
                    <label className="one-stop-search__search-icon" htmlFor="one-stop-searchInput">
                         <SearchIcon/>
                    </label>
                    <input 
                         type="text" 
                         placeholder={`Search Everywhere`} 
                         autoComplete='off' 
                         className="one-stop-search__input" 
                         id="one-stop-searchInput"

                         name="search"
                         value={searchFormState.searchString}
                         onChange={(e)=>setSearchFormState(state=>{
                              return {
                                   ...state,
                                   searchString : e.target.value
                              }
                         })}
                    />
                    <TapSwitchSelector
                         className="one-stop-search__search-type-icon-container"
                         optionClassName="one-stop-search__search-type-icon"
                         options={SEARCH_OPTIONS} 
                         value={searchFormState.searchType}

                         onChange={(value)=>{
                              setSearchFormState(state=>{
                                   return {
                                        ...state,
                                        searchType : value
                                   }
                              })
                         }}
                    />
               </form>

          }}/>
     )
}

export default OneStopSearch