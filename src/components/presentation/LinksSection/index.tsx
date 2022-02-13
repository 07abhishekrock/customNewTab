import React from 'react'

import Youtube from 'assets/youtubeFilled.svg';
import Mail from 'assets/mailFilled.svg';
import BitBucket from 'assets/bitbucketFilled.svg';
import Github from 'assets/githubFilled.svg';

import './linksSection.css';

function LinksSection() {
  return (
    <div className="links-section">
      <a href="#" className="single-link">
        <Youtube/>
      </a>
      <a href="#" className="single-link">
        <Mail/>
      </a>
      <a href="#" className="single-link">
        <Github/>
      </a>
      <a href="#" className="single-link">
        <BitBucket/>
      </a>
    </div>
  )
}

export default LinksSection