```markup
  import React from 'react';
  import ReactDom from 'react-dom';

  import Disclosure, {
    DisclosureButton, useDisclosureState } from '@trend/disclosure';

  function Demo() {
    const disclosure = useDisclosureState();

    return (
      <>
        <DisclosureButton {...disclosure}>Disclosure Button</DisclosureButton>
        <Disclosure {...disclosure}>Disclosure content</Disclosure>
      </>
    );
  }

  ReactDom.render(<Demo />, document.getElementById('root'));
```
