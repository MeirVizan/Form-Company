import React, {useContext, useState} from 'react';
import {Button, TextField } from '@material-ui/core';
import './StyleSteps.css'
import {multiStepContext} from '../StepContex'
import validator from 'validator';

export default function ThirdStep(props) {

    // variable and function from Step context
    const {setStep, userData, setUserData , submitData, errorMessage, setErrorMessage, success, setSuccess} = useContext(multiStepContext)
   


    const submitBtn = () => {
        // regex string for validation of mail amd phone number
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const regexPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

        // Validation of email and phone number from user
        let obj = {}
        if(userData['email']){
            if(!regexEmail.test(userData['email'])){
                obj.email = global.langData[global.lang].invalideEmail
            }
        } else{obj.email = global.langData[global.lang].errorEmail}


        if(userData['phone']){
            if(!regexPhone.test(userData['phone'])){obj.phone = global.langData[global.lang].invalidPhone}
        } else{ obj.phone = global.langData[global.lang].errorPhone }


         if(obj.email === undefined && obj.phone === undefined) {
            obj = {}
            submitData()
            setSuccess(true)
        }
        setErrorMessage({...obj})
    }

         
   
    return (
        <div className='wapper'>
            <div className='text-input'>
                <input type='email' placeholder={global.langData[global.lang].email} value={userData['email']} onChange={(e)=>setUserData({...userData, "email" : e.target.value})} />
                {errorMessage.email && <p>{errorMessage.email}</p>}
            </div>
            <div className='text-input'>
                <input  type='tel' placeholder={global.langData[global.lang].phone} value={userData['phone']} onChange={(e)=>setUserData({...userData, "phone" : e.target.value})} />
                {errorMessage.phone && <p>{errorMessage.phone}</p>}
            </div>
            <div className='text-input row'>
                <input type='checkbox' id='accept' placeholder="Please Enter Option" value={userData['option']} onChange={(e)=>setUserData({...userData, "option" : e.target.value})}  />
                <label for='accept'>Accept email and newsletter</label>
            </div>
            <div className='btn-next-back'>
                <Button variant="contained" onClick={()=>setStep(2)} color="secondary">{global.langData[global.lang].back}</Button>
                <Button variant="contained" onClick={submitBtn} color="primary">{global.langData[global.lang].submit}</Button>
            </div>
        </div>
    );
}
