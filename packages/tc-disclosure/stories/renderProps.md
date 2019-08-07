```markup
  import React from 'react';
  import ReactDom from 'react-dom';

  import Disclosure, {
    DisclosureButton, useDisclosureState } from '@trend/disclosure';

  function Demo() {
    const disclosure = useDisclosureState();

    return (
      <>
        <DisclosureButton {...disclosure}>Toggle</DisclosureButton
        <Disclosure {...disclosure}>
          {props =>
            disclosure.visible && (
              <div {...props}>Disclosure component</div>
            )
          }
        </Disclosure>
      </>
    );
  }

  ReactDom.render(<Demo />, document.getElementById('root'));
```
