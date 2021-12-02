import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import Spinner from '../spinner/Spinner'
import useMarvelService from '../../services/MarvelService';

import './searchForm.scss';

const Success = (props) => {
    return (
        <div className="success">
            There is! Visit {props.char.name} page?
            <Link to={`/character/${props.char.id}`}>
                <button className="button button__secondary form__btn form__grey">
                    <div className="inner">TO PAGE</div>
                </button>
            </Link>
            
        </div>
    )
}

const Warning = () => {
    return (
        <div className="warning">The character was not found. Check the name and try again</div>
    )
}

/* const SearchInput = ({...props}) => {
    const [field, meta] = useField(props);
    return (
        <>
            <input {...props} {...field}/>
            {meta.touched && meta.error ? (
                <div className="warning">{meta.error}</div>
            ) : null}
        </>
    )
}; */

const SearchForm = () => {

    const [objChar, setObjChar] = useState({});
    const [error, setError] = useState(false);

    const {loading, getCharacterByName} = useMarvelService();

    const onCharLoaded = (char) => {
        setObjChar(char);
    }

    const onRequest = (char) => {
        setError(false);
        setObjChar({});
        getCharacterByName(char)
            .then(onCharLoaded)
            .catch(onError)    
    }

    const onError = () => {
        setError(true)
    }

    const spinner = loading ? <Spinner width={'80px'} height={'80px'}/> : null;
    const errorMessage = error && typeof objChar.name === "undefined" ? <Warning/> : null;
    const successMessage = !(typeof objChar.name === "undefined") && !error ? <Success char={objChar}/> : null;

    return (
        <Formik 
            initialValues={{name: ''}}
            validationSchema = {Yup.object({
                name: Yup.string().required('This field is required')
            })}
            onSubmit= {values => onRequest(values.name)}
        >
            <Form className="form">
                <label htmlFor='name' className='form__label'>Or find a character by name:</label>
                <div className="form__dialog">
                    <div>
                        <Field
                            id="name"
                            className="form__input" 
                            name="name" 
                            type="text" 
                            placeholder="Enter name"
                        />
                    </div>
                    <div>
                        <button 
                            type='submit' 
                            className="button button__main form__btn">
                            <div className="inner">FIND</div>
                        </button>
                    </div>
                    <ErrorMessage name="name" className="warning" component="div" />
                    {spinner}
                    {errorMessage}
                    {successMessage}
                </div>
            </Form>
        </Formik>
    )
}

export default SearchForm;