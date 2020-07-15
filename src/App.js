import React, { useState, useEffect } from 'react';
import './App.scss';
import IOS13Instructions from './components/IOS13Instructions/IOS13Instructions';
import IOS10Instructions from './components/IOS10Instructions/IOS10Instructions';
import { getIOSVersion } from './utils.js';
import queryString from 'query-string';

const mainLogo = require('./assets/site-logo.gif');

export default function App() {
  const [IOSVersion, setIOSVersion] = useState(13);
  const [downloadComplete, setDownloadComplete] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const version = getIOSVersion();
    const token = queryString.parse(window.location.search).t;

    if (version) {
      setIOSVersion(version);
    }
    if (token) {
      setToken(token);
    }
  }, []);

  return (
    <div className='app'>
      <div className='header'>
        <div className='logo-container'>
          <img src={mainLogo} alt='MobilSense Logo' />
        </div>
        {!downloadComplete && (
          <>
            <p className='header-welcome-text'>Welcome to MobilSense!</p>
            <p className='header-bottom-text'>
              Please follow the instructions to onboard your device onto our network.
            </p>
          </>
        )}
      </div>

      {!downloadComplete ? (
        <>
          <span className='divtokener-line'></span>

          {(IOSVersion >= 13 || !IOSVersion) && <IOS13Instructions />}
          {(IOSVersion < 13 || !IOSVersion) && <IOS10Instructions />}

          <div className='install-button-container'>
            <p>Click the button below to begin install.</p>
            <a
              href={`https://rtsvc.mobilsense.com/api/mobile_config/${token}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <button onClick={() => setDownloadComplete(true)}>Install</button>
            </a>
          </div>
        </>
      ) : (
        <div className='profile-do'>
          Profile successfully downloaded. Please go to your phone Settings to finish the installation.
          <a href='App-prefs://prefs:root=Settings'>
            <button style={{ marginTop: '2rem' }}>Go To Settings</button>
          </a>
        </div>
      )}
    </div>
  );
}
