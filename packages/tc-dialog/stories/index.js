import React from 'react';
import { withReadme, doc } from 'storybook-readme';

import readme from '../README.md';
import scssReadme from '../scss/README.md';
import Dialog, {
  DialogActions,
  DialogActionButton,
  DialogBox,
  DialogBody,
  DialogButton,
  DialogTitle,
  useDialogState
} from '../src';

import '../styles.scss';

export default {
  title: 'Dialog',
  component: Dialog,
  decorators: [
    withReadme(readme)
  ]
};

export const scss = () => <div />;

scss.story = {
  decorators: [doc(scssReadme)]
};

export const Basic = () => {
  const state = useDialogState({
    titleId: 'Add-name.',
    bodyId: 'Name-form.'
  });

  return <div className="tc-mal">
    <h1>Dialog (Modal)</h1>
    <p>A <a href="https://www.w3.org/TR/wai-aria-1.1/#dialog" target="_blank">dialog</a> is a window overlaid on either the primary window or another dialog window.  See <a href="https://www.w3.org/TR/wai-aria-practices/#dialog_modal" target="_blank">reference</a>.
    </p>
    <p>The default Dialog will add the appropriate css class(es) for each individual component.  See the <code>classnameOptions</code> for each component.</p>
    <p>NOTE: The Dialog by default will occupy entire viewport, be sure to add the <code>DialogMask</code> so that clicking outside container will close dialog.</p>
    <div className="tc-pam tc-mtl tc-border tc-border-concrete-500">
      <DialogButton {...state} variant="ctab">Add name</DialogButton>
    </div>
    <Dialog {...state} hasMask={true} rootElement="#root">
      <DialogBox>
        <DialogTitle {...state}>Add Name</DialogTitle>
        <DialogBody {...state}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" />
          <div>
            <a href="#">help</a>
          </div>
        </DialogBody>
        <DialogActions as="footer">
          <DialogActionButton
            onClick={state.hide}
            accent>Cancel</DialogActionButton>
          <DialogActionButton
            onClick={state.hide}
            accent>SAVE</DialogActionButton>
        </DialogActions>
      </DialogBox>
    </Dialog>
  </div>;
};

export const InitialFocus = () => {
  const state = useDialogState();
  const dialogBox = React.useRef();
  const state2 = useDialogState({ titleId: 'Initial-focus-example.'});
  const btnRef = React.useRef()

  return <div className="tc-mal">
    <h2>Dialog - Fallback Focus</h2>
    <div className="tc-pam tc-border tc-border-concrete-500">
      <DialogButton {...state} variant="ctab">Fallback focus</DialogButton>
    </div>
    <Dialog {...state}
      fallbackFocus={() => dialogBox.current}
      aria-label="Dialog fallback focus">
      <DialogBox ref={dialogBox} tabIndex="0">
        <DialogTitle>Fallback Focus</DialogTitle>
        <DialogBody>
          Fallback focus is set to the bounding box since no focusable element is present: `DialogBox`
        </DialogBody>
      </DialogBox>
    </Dialog>
    <h2>Dialog - Initial Focus</h2>
    <div className="tc-pam tc-border tc-border-concrete-500">
      <DialogButton {...state2} variant="ctab" accent>
        Initial focus
      </DialogButton>
    </div>
    <Dialog {...state2}
      initialFocus={() => btnRef.current}
      aria-label="Dialog initial focus">
      <DialogBox>
        <DialogTitle>Initial Focus</DialogTitle>
        <DialogBody>
          <p>Initial focus is not set to this <a href="#">link</a>, but to the button in the actions component.</p>
        </DialogBody>
        <DialogActions>
          <DialogActionButton
            ref={btnRef}
            variant="ctab"
            onClick={state2.hide}>Initial Focus</DialogActionButton>
        </DialogActions>
      </DialogBox>
    </Dialog>
  </div>;
};

export const NonModalDialogs = () => {
  const state = useDialogState();
  const r = React.useRef();

  return <div className="tc-mal">
    <h2>Non-Modal Dialogs</h2>
    <p>Non-modal dialogs don't trap focus, will not lock the body scroll, and no Portal will be rendered.  Additionally, there is no need to include a DialogMMask.</p>
    <div className="tc-pam tc-border tc-border-concrete-500">
      <DialogButton {...state} variant="ctab">Open Dialog</DialogButton>
      <Dialog {...state}
        aria-label="Non-modal dialog"
        className="tc-mtm"
        modal={false}
        tabIndex={0}
      >
        No focus trap.
      </Dialog>
    </div>
    <p>
      Tabbing from dialog will focus to next tabbable element in the tree <a href="#" onClick={evt => evt.preventDefault()}>next tabbable element.</a> and hide dialog.
    </p>
  </div>;
}

export const NestedDialogs = () => {
  const state1 = useDialogState();
  const state2 = useDialogState();
  const state3 = useDialogState();

  return (
    <div className="tc-mal">
      <h2>Nested Dialogs</h2>
      <div className="tc-pam tc-border tc-border-concrete-500">
        <DialogButton {...state1} variant="ctab">Open Dialog</DialogButton>
      </div>
      <Dialog {...state1} aria-label="First Dialog">
        <DialogBox>
          <DialogBody>
            <p>Press <kbd>ESC</kbd> to hide.</p>
          </DialogBody>
          <DialogActions>
            <DialogActionButton variant="ghost" onClick={state1.hide}>
              Close
            </DialogActionButton>
            <DialogActionButton as={DialogButton} {...state2} variant="ctab">
              Open nested
            </DialogActionButton>
          </DialogActions>
        </DialogBox>
        <Dialog {...state2} variants="stacked" aria-label="Nested Dialog.">
          <DialogBox>
            <DialogBody>
              <p>Press <kbd>ESC</kbd> to hide this dialog.</p>
            </DialogBody>
            <DialogActions>
              <DialogActionButton variant="ctab" accent onClick={state2.hide}>
                Close
              </DialogActionButton>
              <DialogActionButton as={DialogButton} {...state3} variant="ctab">
                Open a nested nested
              </DialogActionButton>
            </DialogActions>
          </DialogBox>

          <Dialog {...state3} aria-label="Nested-nested-dialog.">
            <DialogBox>
              <DialogBody>
                <input type="text" />
                <p>Press <kbd>ESC</kbd> to hide this dialog.</p>
              </DialogBody>
              <DialogActions>
                <DialogActionButton variant="ctab" onClick={state3.hide}>
                  Close nested nested.
                </DialogActionButton>
              </DialogActions>
            </DialogBox>
          </Dialog>
        </Dialog>
      </Dialog>
    </div>
  );
}

export const AlertDialog = () => {
  const state = useDialogState();

  return (
    <div className="tc-mal">
      <h2>Alert Dialog</h2>

      <div className="tc-pam tc-border tc-border-concrete-500">
        <DialogButton {...state} variant="ctab">Remove Item</DialogButton>
      </div>

      <Dialog {...state} role="alertDialog" aria-label="Alert dialog.">
        <DialogBox>
          <DialogBody>
            <p>Are you sure you would like to delete this?</p>
          </DialogBody>
          <DialogActions>
            <DialogActionButton variant="ghost" onClick={state.hide}>
              Cancel
            </DialogActionButton>
            <DialogActionButton variant="ctab"
              accent
              onClick={() =>{
                alert("Item has been removed.");
                state.hide();
              }}
            >
              Yes
            </DialogActionButton>
          </DialogActions>
        </DialogBox>
      </Dialog>
    </div>
  );
}

export const Scrollable = () => {
  const state = useDialogState();

  return (
    <div className="tc-mal">
      <h2>Scrollable Dialog</h2>

      <div className="tc-pam tc-border tc-border-concrete-500">
        <DialogButton {...state} variant="ctab">Scroll</DialogButton>
      </div>

      <Dialog {...state}
        aria-label="Scrollable-dialog."
        hasMask={true}
        variants="scroll">
        <DialogBox>
          <DialogTitle>Terms of Service</DialogTitle>
          <DialogBody>
            <a href="#">Read full terms</a>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit orci sapien, felis dictum montes sodales tellus inceptos cursus sociosqu. Ligula euismod commodo vehicula scelerisque dapibus primis aptent condimentum aliquet phasellus mus rhoncus ultricies, fringilla risus ornare turpis inceptos sodales eros augue mollis lectus pretium convallis, sed at vitae massa sapien senectus eleifend luctus in hac maecenas donec. Fames id orci lorem vestibulum hac himenaeos interdum, massa vivamus pulvinar sem ornare tempor auctor at, facilisi nascetur elementum urna duis ultrices. Lobortis ipsum laoreet cursus congue adipiscing erat varius phasellus luctus, gravida pulvinar malesuada ultrices nulla massa sagittis habitant ultricies pharetra, egestas consectetur metus mi justo et aenean netus. Felis enim rutrum habitasse velit mattis nascetur nunc, at luctus accumsan suscipit laoreet posuere risus a, vehicula nisi nisl fringilla netus facilisis.</p>

            <p>Cras nulla ornare vivamus duis praesent turpis felis sociosqu pellentesque mattis donec mauris, proin ullamcorper hac quisque massa magna integer tincidunt sagittis gravida. Ullamcorper rutrum himenaeos scelerisque aliquet fringilla sit natoque class, dictum nam auctor velit ipsum mattis nullam facilisi, luctus magna per tellus non nisl tincidunt. Turpis imperdiet sociis et phasellus semper eros ridiculus rutrum, luctus pretium netus vehicula cras curabitur tempus lacus, leo a molestie ultricies potenti conubia est. Libero pulvinar lorem nisl aliquam ligula netus class rutrum fusce, felis arcu eleifend imperdiet venenatis cras habitasse dignissim, nam primis curae dapibus porttitor senectus accumsan tincidunt. Odio vivamus egestas netus natoque mauris dolor eleifend suscipit consectetur, nam nisi libero faucibus hac dui auctor tempor gravida dignissim, quisque proin diam hendrerit sociosqu aliquet nisl nulla.</p>

            <p>Id netus lacus tincidunt cursus nisl sem convallis molestie auctor nibh dolor orci nisi in leo, euismod nam bibendum quisque fames iaculis lobortis imperdiet torquent dapibus ipsum lorem curae. Tempus gravida leo aliquet nibh eget suscipit commodo ut viverra maecenas iaculis, dui accumsan hac quam sodales nisl magnis purus proin ultrices penatibus sociosqu, aptent lacus augue curabitur odio feugiat conubia netus vulputate eleifend. Auctor non ornare quam phasellus fringilla id, velit fames sed suspendisse ut, pellentesque accumsan urna gravida platea. Aliquam porttitor augue condimentum nec mollis ante felis vel purus malesuada, sociosqu dui class potenti vitae hendrerit habitant facilisis ipsum, sociis mi convallis cursus primis proin et quis faucibus. Magna turpis integer mollis blandit suspendisse consectetur vulputate congue diam, parturient eleifend taciti cras at porttitor est amet platea adipiscing, quisque scelerisque vivamus neque facilisi bibendum suscipit eros.</p>

            <p>Tortor mauris bibendum congue potenti magnis praesent eleifend donec justo, convallis sodales tempus blandit inceptos hac tincidunt auctor sollicitudin vivamus, nibh dui conubia nullam nisi venenatis penatibus molestie. Sed pharetra consectetur elit aenean himenaeos cursus nisi, mus enim fringilla eget potenti aliquam sociosqu lacus, habitant felis pretium facilisis eu feugiat. Suspendisse vivamus nostra penatibus curabitur magna at, torquent hendrerit vel vulputate bibendum ligula leo, lobortis ut himenaeos aptent convallis. Tincidunt vitae bibendum tellus facilisis massa aliquam, torquent integer duis convallis pellentesque viverra, dignissim mattis ante mus sed. Fusce in auctor fermentum maecenas aliquam aliquet nunc massa, donec convallis mattis semper dictum nec magna tristique, senectus risus enim orci mauris ad justo.</p>

            <p>Cras interdum hac ultrices vehicula elementum faucibus nec rhoncus viverra, eu luctus aptent justo varius congue nunc feugiat dignissim curae, convallis augue platea magnis nibh tristique felis eros. Venenatis habitasse arcu purus amet aenean magna taciti ligula, ad fusce fermentum sem non montes massa class sit, dignissim quis vel velit lacus enim scelerisque. Sem fames primis eu feugiat nisi gravida convallis venenatis, a senectus nam faucibus nisl facilisi vestibulum fusce, taciti netus est mus facilisis tempus consequat. Vel neque mauris lobortis mollis eget augue aliquet litora nascetur, curabitur varius curae odio lacus tristique quisque eleifend, justo molestie sem vitae facilisis malesuada gravida sociis. Elementum ultrices consequat facilisis nostra montes magna ipsum nibh urna torquent ridiculus, ut himenaeos odio varius pulvinar donec dolor amet maecenas potenti, egestas class sollicitudin eleifend parturient justo sodales faucibus commodo vehicula.</p>

            <p>Montes sed lacinia magna mi senectus libero donec mattis habitasse aenean vulputate, malesuada fringilla lobortis sit massa in nunc netus euismod posuere eu, amet ultrices auctor risus gravida pellentesque ipsum turpis tempor nibh. Mattis litora curabitur quis tempus molestie risus odio, neque elit nunc pretium ornare tortor enim, non ac nisl natoque consectetur pulvinar. Per mauris fames natoque nullam nascetur elementum taciti lorem quis sagittis dignissim primis amet, tortor litora dolor vel in tempor facilisi lacinia erat class nam dictum. Penatibus integer habitant iaculis nisl commodo dictum, malesuada feugiat dolor lacinia conubia, praesent est a tempus fermentum. Fusce maecenas aliquet justo taciti faucibus condimentum, sit primis dui et penatibus lorem, potenti sodales molestie ante pulvinar.</p>
          </DialogBody>
          <DialogActions>
            <DialogActionButton accent onClick={state.hide}>
              DECLINE
            </DialogActionButton>
            <DialogActionButton
              accent
              onClick={state.hide}>
              ACCEPT
            </DialogActionButton>
          </DialogActions>
        </DialogBox>
      </Dialog>
    </div>
  );
}
