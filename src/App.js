import React from 'react';
import './App.scss';

export default function App() {
  return (
    <div className='App'>
      <div className='header'>
        <div className='logo-container'>
          <img src={require('./assets/site-logo.gif')} alt='MobilSense Logo' />
        </div>
        <p className='header-welcome-text'>Welcome to MobilSense!</p>
        <p className='header-bottom-text'>
          Please follow the instructions to onboard your device onto our network.
        </p>
      </div>

      <div className='onboarding-instructions'>
        <div className='instruction-container'>
          <div className='instruction-number-container'>
            <div className='number-circle'>1</div>
            Click the "Install" button below
          </div>
          <div className='instruction-img'>Scrreenshot</div>
        </div>
        <div className='instruction-container'>
          <div className='instruction-number-container'>
            <div className='number-circle'>2</div>
            Step 2
          </div>
          <div className='instruction-img'>Scrreenshot</div>
        </div>
        <div className='instruction-container'>
          <div className='instruction-number-container'>
            <div className='number-circle'>3</div>
            Step 3
          </div>
          <div className='instruction-img'>Scrreenshot</div>
        </div>
        <div className='instruction-container'>
          <div className='instruction-number-container'>
            <div className='number-circle' style={{ paddingRight: '1px' }}>
              4
            </div>
            Step 4
          </div>
          <div className='instruction-img'>Scrreenshot</div>
        </div>
        <div className='instruction-container'>
          <div className='instruction-number-container'>
            <div className='number-circle' style={{ paddingRight: '1px' }}>
              5
            </div>
            Step 5
          </div>
          <div className='instruction-img'>Scrreenshot</div>
        </div>

        <div className='install-button-container'>
          <button>Install</button>
        </div>
      </div>
    </div>
  );
}
