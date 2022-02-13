import React from 'react'

import FancyClock from 'components/ui/FancyClock';
import PageSection from 'components/ui/PageSection';
import OneStopSearch from 'components/stateful/OneStopSearch';
import FancyBorderSection from '../FancyBorderSection';

import './newTabLandingScreen.css';
import { mainClockScreenButtonPos } from 'utils/constants/fancyButtonConstants';
import FancyButton from 'components/ui/FancyButton';

import PlusIcon from 'assets/plusIcon.svg';
import LinksSection from '../LinksSection';
import PinnedSection from '../PinnedSection';


function NewTabLandingScreen(){
  return (
    <div className="page-wrapper" style={{transform:`translateX(-25vw)`}}>

      <PageSection width="25vw">
        <LinksSection/>
      </PageSection>

      <PageSection width="50vw">
        <FancyBorderSection buttons={mainClockScreenButtonPos}>

          <div className="glance-section">
            <FancyClock/>
            <OneStopSearch/>
            <FancyButton shouldHavePlaneShadow className="add-task-button">
              <PlusIcon/>
              Add A Task
            </FancyButton>
          </div>

        </FancyBorderSection>
      </PageSection>

      <PageSection width="50vw">
        <PinnedSection/>
      </PageSection>

    </div>
  )
}

export default NewTabLandingScreen;