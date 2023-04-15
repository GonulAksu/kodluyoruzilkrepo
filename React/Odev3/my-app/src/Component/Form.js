import React from 'react';
import { useFormik } from 'formik';
import useForm from '../Context/FormContext';


const Form = () => {
    const { city, setCity } = useForm();
    const { handleChange, handleSubmit, values } = useFormik({
        initialValues: {
            cityName: ''
        },
        onSubmit: () => {
            setCity(values.cityName)

        }
    })
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="cityName" className='text-secondary p-3'>Please enter city name.</label>
                <input onChange={handleChange} id="cityName" name="cityName" placeholder="City" className='form-control' />
                <br />
                <button className='btn btn-secondary' type='submit'>search</button>
                <br />



                <h6 className='text-uppercase mt-3'>{values.cityName}</h6>

            </form>
            
            
        </>
    )
}

export default Form
