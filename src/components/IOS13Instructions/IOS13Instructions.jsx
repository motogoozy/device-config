import React from 'react';
import '../../App.scss';

const step2 = require('../../assets/ios13-step2.PNG');
const step3 = require('../../assets/ios13-step3.PNG');
const step4 = require('../../assets/ios13-step4.PNG');
const step5 = require('../../assets/ios13-step5.PNG');
const step6 = require('../../assets/ios13-step6.PNG');
const step7 = require('../../assets/ios13-step7.PNG');

export default function IOS13Instructions() {
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
      <div className='instruction-container'>
        <div className='instruction-number-container'>
          <div className='number-circle'>3</div>
          <p>Click "Close" after download is finished</p>
        </div>
        <img src={step3} alt='step 3' />
      </div>
      <div className='instruction-container increased-margin'>
        <div className='instruction-number-container'>
          <div className='number-circle'>4</div>
          <p>Click "Go To Settings"</p>
        </div>
        <img src={step4} alt='step 4' />
      </div>
      <div className='instruction-container increased-margin'>
        <div className='instruction-number-container'>
          <div className='number-circle'>5</div>
          <p>In Settings, open the "Profile Downloaded" menu</p>
        </div>
        <img src={step5} alt='step 5' />
      </div>
      <div className='instruction-container increased-margin'>
        <div className='instruction-number-container'>
          <div className='number-circle'>6</div>
          <p>Click "Install". You will then be warned and asked for confirmation, select "Install" for both prompts</p>
        </div>
        <img src={step6} alt='step 6' />
      </div>
      <div className='instruction-container increased-margin'>
        <div className='instruction-number-container'>
          <div className='number-circle'>7</div>
          <p>Click "Done"</p>
        </div>
        <img src={step7} alt='step 7' />
      </div>
    </div>
  );
}
