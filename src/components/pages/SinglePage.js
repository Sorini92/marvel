import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner'
import ErrorMessage from '../errorMessage/errorMessage';
import AppBanner from "../appBanner/AppBanner";
import './singlePage.scss';

const SinglePage = ({dataType, Component}) => {
    const {id} = useParams();
    const [data, setData] = useState(null);

    const {loading, error, clearError, getComic, getCharacter} = useMarvelService();

    useEffect(() => {
        update();
    }, [id]);

    const update = () => {
        clearError();

        switch (dataType) {
            case 'comic':
                getComic(id).then(onLoaded);
                break;
            case 'character':
                getCharacter(id).then(onLoaded);
                break;
            default:
                console.log('Default')
        }
    }

    const onLoaded = (data) => {
        setData(data);
    }
    

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !data) ? <Component data={data}/> : null;

    return (
        <>
            <AppBanner/>
            {errorMessage}
            {spinner}
            {content}
        </>
    )
}

export default SinglePage;