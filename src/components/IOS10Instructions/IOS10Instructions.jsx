import React from 'react';
import '../../App.scss';

const step2 = require('../../assets/ios10-step2.PNG');
const step3 = require('../../assets/ios13-step6.PNG');
const step4 = require('../../assets/ios13-step7.PNG');

export default function IOS10Instructions() {
  return (
    <div className='onboarding-instructions'>
      <div className='instruction-container' style={{ marginBottom: '1rem' }}>
        <div className='instruction-number-container'>
          <div className='number-circle'>1</div>
          <p>Click the "Install" button at the bottom of this page</p>
        </div>
      </div>
      <div className='instruction-container'>
        <div className='instruction-number-container'>
          <div className='number-circle'>2</div>
          <p>Click "Allow" when prompted</p>
        </div>
        <img src={step2} alt='step 2' />
      </div>
      <div className='instruction-container increased-margin'>
        <div className='instruction-number-container'>
          <div className='number-circle'>3</div>
          <p>
            In phone Settings, Click "Install". You will then be warned and asked for confirmation.
            Select "Install" for both prompts
          </p>
        </div>
        <img src={step3} alt='step 3' />
      </div>
      <div className='instruction-container increased-margin'>
        <div className='instruction-number-container'>
          <div className='number-circle'>4</div>
          <p>Click "Done"</p>
        </div>
        <img src={step4} alt='step 4' />
      </div>
    </div>
  );
}
