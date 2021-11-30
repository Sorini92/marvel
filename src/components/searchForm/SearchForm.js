import { useEffect, useState } from 'react';
import { Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import useMarvelService from '../../services/MarvelService';

import './searchForm.scss';

//background: #5C5C5C;

/* const Success = () => {
    return (
        <div className="success">
            There is! Visit page?
            <button className="button button__secondary form__btn form__grey">
                <div className="inner">TO PAGE</div>
            </button>
        </div>
    )
} */

/* const Warning = () => {
    return (
        <div className="warning">The character was not found. Check the name and try again</div>
    )
} */

const SearchForm = () => {

    const [char, setChar] = useState('');
    const [objChar, setObjChar] = useState({});

    const {getCharacterByName} = useMarvelService();

    const onRequest = (name) => {
        getCharacterByName(name)
            .then(res => setObjChar(res))
    }

    return (
        <Formik 
            initialValues={{
                name: ''
            }}
            validationSchema = {Yup.object({
                name: Yup.string().required('This field is required')
            })}
            onSubmit= {values => console.log(JSON.stringify(values, null, 2))}
        >
            <Form className="form">
                <label className='form__label'>Or find a character by name:</label>
                <div>
                    <Field 
                        value={char.name} 
                        onChange={(e) => setChar(e.target.value)} 
                        className="form__input" 
                        name="name" 
                        type="text" 
                        placeholder="Enter name"/>
                    <button onClick={() => onRequest(char)} type='submit' className="button button__main form__btn">
                        <div className="inner">FIND</div>
                    </button>
                </div>
            </Form>
        </Formik>
    )
}

export default SearchForm;