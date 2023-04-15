import {createContext, useContext,useState} from 'react';

const FormContext=createContext();

export const FormProvide=({children})=>{
    const [city,setCity]=useState('');
    const data={
        city,
        setCity
    }
   
    return <FormContext.Provider value={data}>{children}</FormContext.Provider>
}

const useForm=()=>useContext(FormContext);
export default useForm;