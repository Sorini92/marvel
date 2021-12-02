import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner'
import ErrorMessage from '../errorMessage/errorMessage';
import AppBanner from "../appBanner/AppBanner";
import './singleComicPage.scss';

const SingleComicPage = (props) => {
    const {id} = useParams();
    const [data, setData] = useState(null);

    const {loading, error, clearError} = useMarvelService();

    useEffect(() => {
        update();
    }, [id]);

    const update = () => {
        clearError();
        props.requestFunction(id)
            .then(onLoaded)
    }

    const onLoaded = (data) => {
        setData(data);
    }
    

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !data) ? <View data={data}/> : null;

    return (
        <>
            <AppBanner/>
            {errorMessage}
            {spinner}
            {content}
        </>
    )
}

const View = ({data}) => {
    const {title, description, pageCount, thumbnail, language, price, name} = data;

    return (
        <div className="single-comic">
            <img src={thumbnail} alt={title} className="single-comic__img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{title ? title : name}</h2>
                <p className="single-comic__descr">{description}</p>
                <p className="single-comic__descr">{pageCount ? pageCount : null}</p>
                {language ? <p className="single-comic__descr">Language: {language}</p> : null}
                <div className="single-comic__price">{price ? price : null}</div>
            </div>
            <div>
                <Link to="/" className="single-comic__back">Back to characters</Link>
                <Link to="/comics" className="single-comic__back">Back to all comics</Link>
            </div>
        </div>
    )
}

export default SingleComicPage;