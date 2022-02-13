import React from 'react'

import PinnedIcon from 'assets/pinnedIcon.svg';
import PlusIcon from 'assets/plusIcon.svg';
import BinIcon from 'assets/bin.svg';
import PenIcon from 'assets/pen.svg';

import './pinnedSection.css';

function PinnedItem(){
     return <div className="pinned-section__list-item-frame">
          <div className="pinned-section__list-item-wrapper">
               <div className="pinned-section__list-item-option pinned-section__list-item-delete">
                    <BinIcon/>
               </div>
               <div className="pinned-section__list-item">
                    <div className="pinned-section__list-item--wrapper">
                         <div className="pin">
                              <h4 className="pin-title">UAT Code</h4>
                              <p className="pin-content pin-content--code">8080932</p>
                         </div>
                         <span className="pin-copy-option">Copy</span>
                    </div>
               </div>
               <div className="pinned-section__list-item-option pinned-section__list-item-edit">
                    <PenIcon/>
               </div>
          </div>
     </div>
}

function PinnedSection() {
  return (
    <div className="pinned-section">
         <h1 className="pinned-section__heading">
              <PinnedIcon/>
              <span className="pinned-section__heading-text">Pinned Items</span>
              <i className="add-pin-icon"><PlusIcon/></i>
         </h1>

          <div className="pinned-section__list">
               <PinnedItem/>
               <PinnedItem/>
               <PinnedItem/>
          </div>

    </div>
  )
}

export default PinnedSection