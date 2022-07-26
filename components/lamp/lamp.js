import React, { useState } from 'react';

export default function Lamp({initStatus=false, initNum=0}){
    const lampOff = (
        <div>
        🌑 
        </div>
    )
    const lampOn = (
        <div>
        🌕 
        </div>
    )

    const [status, setStatus] = useState(initStatus)
    const [lamp, setLamp] = useState(lampOff)
    const [binary, setBinary] = useState(initNum)


    function handleChange(event) {
        if(status===false){
            setStatus(true)
            setLamp(lampOn)
            setBinary(1)
        }else{
            setStatus(false)
            setLamp(lampOff)
            setBinary(0)
        }
    }
    return(
            <div>
                <button onClick={handleChange}>
                    {lamp}
                    <label>{binary}</label>    
                </button>
                
            </div>
        )
}