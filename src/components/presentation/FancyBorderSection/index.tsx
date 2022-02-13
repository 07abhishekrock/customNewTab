import React, { PropsWithChildren } from 'react'

type FancyBorderButton = {
     buttonIcon ?: string;
     positionY : number | string,
     buttonSize ?: [number , number]
}

type FancyBorderButtons = {
     left ?: FancyBorderButton[],
     right ?: FancyBorderButton[]
}

type FancyBorderSectionProps = PropsWithChildren<{
     buttons ?: FancyBorderButtons,
}>

function getButtonStyles(button : FancyBorderButton){
     return {
          transform : `translate(-50% , ${button.positionY})`,
          width : button.buttonSize ? button.buttonSize[0] + 'px' : '10px',
          height : button.buttonSize ? button.buttonSize[1] + 'px' : '30px'

     }
}

import './fancyBorderSection.css';

function FancyBorderSection({
     buttons , children
} : FancyBorderSectionProps) {
  return (
     <div className="fancy-border-section-wrapper">

          {buttons && buttons.left ? 

               <div className="fancy-border-section__buttons fancy-border-section__buttons--left">
                    {buttons.left.map((button , index)=>{
                         return <button 
                              className="fancy-border-section__button" 
                              key={index} 
                              style={getButtonStyles(button)}
                         >
                              {button.buttonIcon ? <img alt="border-cta" src={button.buttonIcon}/> : null}
                         </button>
                    })}
               </div> 

          : 
          null}

          {buttons && buttons.right ? 

               <div className="fancy-border-section__buttons fancy-border-section__buttons--right">
                    {buttons.right.map((button , index)=>{
                         return <button 
                              className="fancy-border-section__button" 
                              key={index}
                              style={getButtonStyles(button)}
                         >
                              {button.buttonIcon ? <img src={button.buttonIcon}/> : null}
                         </button>
                    })}
               </div> 

          : 
          null}

          <div className="fancy-border-section">
               {children}
          </div>
     </div>
  )
}

export default FancyBorderSection