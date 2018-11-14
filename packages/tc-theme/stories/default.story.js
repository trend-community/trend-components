import React from 'react';

function Story() {
  return <div className="tc-mal">
    <h1>Theme</h1>
    <div className="tc-flex tc-mam">
      <div className="tc-flex tc-pas">
        <span className="tc-theme-primary">Primary</span>
      </div>
      <div className="tc-flex tc-pas tc-mls">
        <span className="tc-theme-accent">Accent</span>
      </div>
      <div className="tc-flex tc-pas tc-mls tc-theme-primary-bg">
        <span className="tc-theme-over-primary">Over primary background</span>
      </div>
      <div className="tc-flex tc-pas tc-mls tc-theme-accent-bg">
        <span className="tc-theme-over-accent">Over accent background</span>
      </div>
    </div>

    <h3 className="tc-type-subtitle1">Text over background</h3>
    <div className="tc-flex tc-mam tc-theme-background">
      <div className="tc-flex tc-pas tc-mls">
        <span className="tc-theme-text-primary-over-background">
          Primary over background
        </span>
      </div>
      <div className="tc-flex tc-pas tc-mls">
        <span className="tc-theme-text-accent-over-background">
          Accent over background
        </span>
      </div>
      <div className="tc-flex tc-pas tc-mls">
        <span className="tc-theme-text-hint-over-background">
          Hint over background
        </span>
      </div>
      <div className="tc-flex tc-pas tc-mls">
        <span className="tc-theme-text-disabled-over-background">
          Disabled over background
        </span>
      </div>
    </div>

    <h3 className="tc-type-subtitle1">Text on light background</h3>
    <div className="tc-flex tc-mam tc-background-concrete-100">
      <div className="tc-flex tc-pas tc-mls">
        <span className="tc-theme-text-primary-over-light">
          Primary over light
        </span>
      </div>
      <div className="tc-flex tc-pas tc-mls">
        <span className="tc-theme-text-accent-over-light">
          Accent over light
        </span>
      </div>
      <div className="tc-flex tc-pas tc-mls">
        <span className="tc-theme-text-hint-over-light">
          Hint over light
        </span>
      </div>
      <div className="tc-flex tc-pas tc-mls">
        <span className="tc-theme-text-disabled-over-light">
          Disabled over light
        </span>
      </div>
    </div>

    <h3 className="tc-type-subtitle1">Text on dark background</h3>
    <div className="tc-flex tc-mam tc-background-grey-900">
      <div className="tc-flex tc-pas tc-mls">
        <span className="tc-theme-text-primary-over-dark">
          Primary over dark
        </span>
      </div>
      <div className="tc-flex tc-pas tc-mls">
        <span className="tc-theme-text-accent-over-dark">
          Accent over dark
        </span>
      </div>
      <div className="tc-flex tc-pas tc-mls">
        <span className="tc-theme-text-hint-over-dark">
          Hint over dark
        </span>
      </div>
      <div className="tc-flex tc-pas tc-mls">
        <span className="tc-theme-text-disabled-over-dark">
          Disabled over dark
        </span>
      </div>
    </div>
  </div>;
}

Story.displayName = 'Default';

export default Story;
