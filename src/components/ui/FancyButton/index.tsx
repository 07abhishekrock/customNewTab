import React, { PropsWithChildren } from 'react'
import { combineCN } from 'utils/dom/formatters'

import './fancybutton.css';

type FancyButtonProps = PropsWithChildren<{
     shouldHavePlaneShadow ?: boolean
     } 
     & React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLButtonElement> , HTMLButtonElement>
>

function FancyButton({shouldHavePlaneShadow , children ,  ...buttonProps} : FancyButtonProps) {
  return (
    <button 
    {...buttonProps}
    className={
          combineCN(
               buttonProps.className ?? '' ,
               'fancy-button' ,
               shouldHavePlaneShadow ? 'fancy-button--with-shadow' : ''
          )}
     >{children}</button>
  )
}

export default FancyButton