import React, { useState } from "react";
import './App.scss';

function App() {

  const [isDeviceActive, setDeviceActive] = useState("false");
  const [isAutomationActive, setAutomationActive] = useState("false");
  const [isCollapse, setCollapse] = useState("false");
  const [isPined, setPined] = useState("false");

  const handleToggleDeviceActive = () => {
    setDeviceActive(!isDeviceActive);
  };

  const handleToggleAutomationActive = () => {
    setAutomationActive(!isAutomationActive);
  };

  const handleToggleCollapse = () => {
    setCollapse(!isCollapse);
  };

  const handleTogglePined = () => {
    setPined(!isPined);
  }

  return (
    <div className="App">
      <div className='header'>
        <div className='logo'></div>
        <div className='flexSpacer'></div>
        <div className='profile'></div>
      </div>
      <div className='contentPanel'>
        <div className={`leftNavi ${isCollapse ? "collapsed" : ""}`}
          onMouseEnter={() => isPined ? '' : setCollapse(false)}
          onMouseLeave={() => isPined ? '' : setCollapse(true)}>
          <div className='topBar'>
            <div onClick={handleToggleCollapse} className={`icon ${isCollapse ? 'rightArrow' : 'leftArrow'}`}></div>
            <div className='flexSpacer'></div>
            <div onClick={handleTogglePined} className={`pinButton icon ${isPined ? 'pined' : ''}`}></div>
          </div>
          <div className='navigationContainer'>
            <div className='group'>
              <h4>Workspace</h4>
              <div className={`level1 hasChild ${isDeviceActive ? "expanded" : ""}`}>
                <div className='level1Item'>
                  <div className='deviceIcon icon'></div>
                  <span>Devices</span>
                  <div onClick={handleToggleDeviceActive} className='chevronIcon icon'></div>
                </div>
                <ul className='level1Children'>
                  <li className='level2Item selected'>Workstations & Servers</li>
                  <li className='level2Item'>Device Groups</li>
                </ul>
              </div>
              <div className={`level1 hasChild ${isAutomationActive ? "expanded" : ""}`}>
                <div className='level1Item'>
                  <div className='automationIcon icon'></div>
                  <span>Automation</span>
                  <div onClick={handleToggleAutomationActive} className='chevronIcon icon'></div>
                </div>
                <ul className='level1Children'>
                  <li className='level2Item'>Tasks</li>
                  <li className='level2Item'>Scheduled Tasks</li>
                </ul>
              </div>

              <div className='level1' ><div className='level1Item'><div className='alertIcon icon'></div><span>Alert Management</span></div></div>
              <div className='level1' ><div className='level1Item'><div className='reportingIcon icon'></div><span>Reporting</span></div></div>
              <div className='level1' ><div className='level1Item'><div className='integrationsIcon icon'></div><span>Integration</span></div></div>


            </div>

            <div className='group'>
              <h4>Settings</h4>
              <div className='level1' ><div className='level1Item'><div className='elementsIcon icon'></div><span>Elements</span></div></div>
              <div className='level1' ><div className='level1Item'><div className='packagesIcon icon'></div><span>Packages</span></div></div>
              <div className='level1' ><div className='level1Item'><div className='policiesIcon icon'></div><span>Policies</span></div></div>
            </div>

            <div className='group'>
              <h4>Classic</h4>
              <div className='level1' ><div className='level1Item'><div className='dashboardIcon icon'></div><span>Dashboard</span></div></div>
              <div className='level1' ><div className='level1Item'><div className='quickAccessIcon icon'></div><span>Quick Access</span></div></div>
              <div className='level1' ><div className='level1Item'><div className='patchesIcon icon'></div><span>Patches</span></div></div>
              <div className='level1' ><div className='level1Item'><div className='scriptsIcon icon'></div><span>Scripts</span></div></div>
              <div className='level1' ><div className='level1Item'><div className='reportsIcon icon'></div><span>Reports</span></div></div>
              <div className='level1' ><div className='level1Item'><div className='adminIcon icon'></div><span>Admin</span></div></div>
              <div className='level1' ><div className='level1Item'><div className='rmmSetupIcon icon'></div><span>RMM Setup</span></div></div>
              <div className='level1' ><div className='level1Item'><div className='bdrIcon icon'></div><span>BDR</span></div></div>
              <div className='level1' ><div className='level1Item'><div className='securityIcon icon'></div><span>Security</span></div></div>
            </div>

          </div>
        </div>
        <div className={`table ${isPined ? 'pined' : ''} ${isCollapse ? 'collapsed' : ''}`}>
        </div>
        <div className='toolbar'>
          <div className='iconCircle'></div>
          <div className='iconCircle'></div>
          <div className='iconCircle'></div>
          <div className='flexSpacer'></div>

        </div>
      </div>
    </div>
  );
}

export default App;
