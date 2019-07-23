```markup
  @import React from 'react';

  @import App from '@trend/icon/App';
  @import Button from '@trend/button';
  @import VisuallyHidden from '@trend/VisuallyHidden';

  function Demo() {
    return <Button variant="ctab">
      <App />
      <VisuallyHidden>Screen reader access</VisuallyHidden>
    </Button>;
  }
```
