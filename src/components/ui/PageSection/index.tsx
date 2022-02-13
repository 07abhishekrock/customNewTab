import React, { PropsWithChildren } from 'react'

type PageSectionProps = PropsWithChildren<{
     width : string;
}>;

import './pageSection.css';

function PageSection( { width , children } : PageSectionProps ) {
  return (
    <div className="page-section" style={{width}}>
         {children}
    </div>
  )
}

export default PageSection;