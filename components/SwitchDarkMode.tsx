import React from 'react';
import * as Switch from '@radix-ui/react-switch';



const SwitchDarkMode = () => (
  <form>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <label className="Label" htmlFor="airplane-mode" style={{ paddingRight: 15 }}>
        Dark Mode
      </label>
      <Switch.Root className="SwitchRoot" id="airplane-mode">
        <Switch.Thumb className="SwitchThumb" />
      </Switch.Root>
    </div>
  </form>
);

export default SwitchDarkMode;