import React, {useState} from 'react';
import App from './App';
import FormService from './modules/form';
export const multiStepContext = React.createContext();
const StepContex = () => {

    const [currentStep, setStep] = useState(1);
    const [userData, setUserData] = useState([]);
    const [finalData, setFinalData] = useState([])
    const [errorMessage, setErrorMessage] = useState({})
    const [success, setSuccess] = useState(false)


    const submitData =  async()=> {
        console.log("submit");

        // setFinalData(finalData=>[...finalData, userData])
            console.log(userData);
        let json = await FormService.create(userData);
        console.log(json);
        if (json.status === 200 ) {
            //move to succefull page
        } else {
            setUserData('')
            setStep(1)
        }

        console.log(userData);
        // setUserData('')
        // setStep(1)

        
    }
    return (
        <div>
            <multiStepContext.Provider value={{currentStep, setStep, userData, setUserData, finalData,
                 setFinalData,errorMessage, setErrorMessage, submitData, success, setSuccess}} >
                <App />
            </multiStepContext.Provider>
        </div>
    );
}

export default StepContex;