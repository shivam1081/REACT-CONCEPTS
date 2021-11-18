import React from 'react';
import { useState } from 'react';
import Twoway from './Twoway';
function UseHook() {
    let [pTitle, changeTitle] = useState('Mouse');
    function handleChange(e) {
        changeTitle(e.target.value);
    }
    return (
        <div style={{ padding: '10%' }}>
            <p> Two Way Binding</p>
            <br />
            <input type="text" value={pTitle}
            onChange={(e)=> handleChange(e)}/>
        </div>
    )
}
export default UseHook;
