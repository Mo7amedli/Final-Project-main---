import React, { useState } from 'react'
import Information from '../information/Information'
import '../CSS.css'
import ConfirmPass from '../confirmed password/ConfirmPass';
export default function Account() {

  const [selectedComponent, setSelectedComponent] = useState('information');

  return (
    <div className='setting'>
        <div className='but-setting'>
            <h2>Settings</h2>
            <button onClick={() => setSelectedComponent('information')}>My info</button>
            <button onClick={() => setSelectedComponent('password')}>Password & Security</button>
        </div>
        <div className='account-content'>
            {selectedComponent === 'information' && <Information />}
            {selectedComponent === 'password' && <ConfirmPass />}
        </div>
    </div>
  )
}
