import React, {useContext, useEffect, useState} from 'react';
import {Button, TextField } from '@material-ui/core';
import './StyleSteps.css'
import {multiStepContext} from '../StepContex'
import FormService from '../modules/form';


export default function SecondStep(props) {


    const {setStep, userData, setUserData} = useContext(multiStepContext)
    const [countries , setCountries] = useState([])

    // get list of countries from the server
    useEffect(()=> {
        FormService.getCountry().then((json) => {
            setCountries(json)
        })
    },[])

    return (
        <div className='wapper'> 
            <div className='text-input'>
                <select placeholder="select country" value={userData['country']} onChange={(e)=>setUserData({...userData, "country" : e.target.value})} >
                    {countries.map((value) =>
                      <option value={value}>{value}</option>  
                    )}
                </select>
                
            </div>
            <div className='text-input'>
                <input placeholder={global.langData[global.lang].city} value={userData['city']} onChange={(e)=>setUserData({...userData, "city" : e.target.value})} />
            </div>
            <div className='text-input'>
                <input placeholder={global.langData[global.lang].street} value={userData['street']} onChange={(e)=>setUserData({...userData, "street" : e.target.value})} />
            </div>
            <div className='btn-next-back'>
                <Button variant="contained" onClick={()=>setStep(1)} color="secondary">{global.langData[global.lang].back}</Button>
                <Button variant="contained" onClick={()=>setStep(3)} color="primary">{global.langData[global.lang].next}</Button>
            </div>
        </div>
    );
}

