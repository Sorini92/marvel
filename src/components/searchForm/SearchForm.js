import { useEffect } from 'react';
import { Formik,Form, Field, ErrorMessage, } from 'formik';
import * as Yup from 'yup';
import useMarvelService from '../../services/MarvelService';

import './searchForm.scss';

//There is! Visit ${name} page? 
//The character was not found. Check the name and try again
//background: #5C5C5C;
const SearchForm = () => {

    const {getCharacter} = useMarvelService();

    /* useEffect(() => {
        onRequest();
    }, []) */

    const onRequest = () => {
        getCharacter()
            .then(res => console.log(res))
    }

    return (
        <Formik 
            initialValues={{
                name: ''
            }}
            validationSchema = {Yup.object({
                name: Yup.string()
                          .min(2, 'Минимум 2 символа!')
                          .required('This field is required'),
            })}
            onSubmit= {values => console.log(JSON.stringify(values, null, 2))}
        >
            <Form className="form">
                <label className='form__label'>Or find a character by name:</label>
                <div>
                    <Field className="form__input" name="name" type="text" placeholder="Enter name"/>
                    <button onClick={onRequest} type='submit' className="button button__main form__btn">
                            <div className="inner">FIND</div>
                    </button>
                </div>
                <ErrorMessage className='warning' name="name" component="div"/>
            </Form>
        </Formik>
    )
}

export default SearchForm;