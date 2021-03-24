import React, { useContext, useState } from 'react';
import {Button, TextField } from '@material-ui/core';
import './StyleSteps.css'
import {multiStepContext} from '../StepContex'


export default function FirstStep(props) {

    const {setStep, userData, setUserData,errorMessage, setErrorMessage } = useContext(multiStepContext)

    // validation on first-name and last-name from the user
    const validInput = () => {
        let obj = errorMessage
        if(!userData['firstname']){
            obj.firstname = global.langData[global.lang].errorFirst
        }
        if(!userData['lastname']){
            obj.lastname = global.langData[global.lang].errorLast
        }
        if(userData['firstname'] && userData['lastname'] ){
            obj = {};
            setStep(2)
        }
        setErrorMessage({...obj})
    }

    return (
        <div className='wapper'>
            <div className='text-input'>
                <input style={{width: '250px'}} placeholder={global.langData[global.lang].firstName} value={userData['firstname']} onChange={(e)=>setUserData({...userData, "firstname" : e.target.value})} margin="normal" variant="standard" color="secondary" />
                {errorMessage.firstname && <p>{errorMessage.firstname}</p>}
            </div>
            <div className='text-input'>
                <input style={{width: '250px'}} placeholder={global.langData[global.lang].lastName} value={userData['lastname']} onChange={(e)=>setUserData({...userData, "lastname" : e.target.value})} margin="normal" variant="standard" color="secondary" />
                {errorMessage.lastname && <p>{errorMessage.lastname}</p>}
            </div>
            <div>
                <input style={{width: '250px'}} placeholder={global.langData[global.lang].titleForm} value={userData['title']} onChange={(e)=>setUserData({...userData, "title" : e.target.value})} margin="normal" variant="standard" color="secondary" />
            </div>
            <div className='btn-next-back'>
                <Button variant="contained" onClick={validInput} color="primary">{global.langData[global.lang].next}</Button>
            </div>
        </div>
    );
}

