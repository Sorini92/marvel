import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner'
import ErrorMessage from '../errorMessage/errorMessage';
import AppBanner from "../appBanner/AppBanner";
import './singleComicPage.scss';

const SingleComicPage = () => {
    const {comicId} = useParams();
    const {charId} = useParams();
    const [data, setData] = useState(null);

    const {loading, error, getComic, clearError, getCharacter} = useMarvelService();

    useEffect(() => {
        update(getCharacter);
    }, [comicId, charId]);

    console.log(data)

    /* const updateComic = () => {
        clearError();
        getComic(comicId)
            .then(onLoaded)
    } */

    const update = (func) => {
        clearError();
        func(charId)
            .then(onLoaded)
    }

    /* const updateChar = () => {
        clearError();
        getCharacter(charId)
            .then(onLoaded)
    } */

    const onLoaded = (data) => {
        setData(data);
    }
    

    /* useEffect(() => {
        updateChar();
    }, [charId]); */

    

    /* const onCharLoaded = (char) => {
        setChar(char);
    } */

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const contentComic = !(loading || error || !data) ? <ViewComic comic={data}/> : null;
    //const contentChar = !(loading || error || !char) ? <ViewChar char={char}/> : null;

    return (
        <>
            <AppBanner/>
            {errorMessage}
            {spinner}
            {contentComic}
            {/* {comicId === null ? contentComic : contentChar} */}
        </>
    )
}

const ViewComic = ({comic}) => {
    const {title, description, pageCount, thumbnail, language, price} = comic;

    return (
        <div className="single-comic">
            <img src={thumbnail} alt={title} className="single-comic__img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{title}</h2>
                <p className="single-comic__descr">{description}</p>
                <p className="single-comic__descr">{pageCount}</p>
                <p className="single-comic__descr">Language: {language}</p>
                <div className="single-comic__price">{price}</div>
            </div>
            <div>
                <Link to="/" className="single-comic__back">Back to characters</Link>
                <Link to="/comics" className="single-comic__back">Back to all comics</Link>
            </div>
        </div>
    )
}

const ViewChar = ({char}) => {
    const {name, description, thumbnail} = char;

    return (
        <div className="single-comic">
            <img src={thumbnail} alt={name} className="single-comic__img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{name}</h2>
                <p className="single-comic__descr">{description}</p>
            </div>
            <div>
                <Link to="/" className="single-comic__back">Back to characters</Link>
                <Link to="/comics" className="single-comic__back">Back to all comics</Link>
            </div>
        </div>
    )
}

export default SingleComicPage;