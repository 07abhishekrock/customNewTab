import React, { useState } from 'react'
import { combineCN } from 'utils/dom/formatters';

import './tapSwitchSelector.css';

export type TapSwitchOption<T> = {
     optionBody : JSX.Element,
     optionValue : T,
     optionID : string
}

export type TapSwitchSelectorProps<T> = {
     options : TapSwitchOption<T>[],
     value ?: T,
     onChange ?: (newValue : T)=>void,
     optionClassName ?: string,
     className ?: string
};

function TapSwitchSelector<T>({
     options , value , optionClassName , className , onChange
} : TapSwitchSelectorProps<T>) {

     const getNextIndexToSwitch = ()=>{
          let currentSelectedIndex = -1;

          switchState.every((option , index)=>{
               if(option.isSelected)
               {
                    currentSelectedIndex = index;
                    return false;
               }
               return true;
          })

          return ( currentSelectedIndex + 1 ) % options.length;
     }

     const [switchState , setSwitchState] = useState(options.map((option , index)=>{

          if(value && option.optionValue === value){
               return {...option , isSelected : true}
          }

          else if(!value && index === 0){
               return {...option , isSelected : true}
          }

          return {...option , isSelected : false};

     }));


     return <div className={combineCN("tap-switch-selector" , className ?? '')}>

          {switchState.map((switchOption)=>{
               return <span 
                    key={switchOption.optionID}
                    className={combineCN( "tap-switch-option" , optionClassName ?? '' )}
                    style={{display : switchOption.isSelected ? undefined : 'none'}}
                    onClick={()=>{

                         let nextIndexToSelect = getNextIndexToSwitch();
                    
                         const nextOption = options[nextIndexToSelect];
                    
                         nextOption && onChange && onChange(nextOption.optionValue);

                         setSwitchState(state=>{

                              return state.map((option , index)=>{
                                   if(index === nextIndexToSelect) {

                                        return {...option , isSelected : true};
                                   }
                                   return {...option , isSelected : false}
                              })
                         })

                    }}
                    aria-checked={switchOption.isSelected} 
                    aria-valuetext={switchOption.optionID}
               >
                    {switchOption.optionBody}
               </span>
          })}

     </div>

}

export default TapSwitchSelector