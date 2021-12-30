import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import useMarvelService from '../../services/MarvelService';
import setContent from '../../utils/setContent';
import AppBanner from "../appBanner/AppBanner";
import './singlePage.scss';

const SinglePage = ({dataType, Component}) => {
    const {id} = useParams();
    const [data, setData] = useState(null);
    
    const {clearError, getComic, getCharacter, process, setProcess} = useMarvelService();

    useEffect(() => {
        update();
        // eslint-disable-next-line
    }, [id]);

    const update = () => {
        clearError();

        switch (dataType) {
            case 'comic':
                getComic(id)
                    .then(onLoaded)
                    .then(() => setProcess('confirmed'))
                break;
            case 'character':
                getCharacter(id)
                    .then(onLoaded)
                    .then(() => setProcess('confirmed'))
                break;
            default:
                console.log('Default')
        }
    }

    const onLoaded = (data) => {
        setData(data);
    }
    

    /* const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !data) ? <Component data={data}/> : null; */

    return (
        <>
            <AppBanner/>
            {setContent(process, Component, data)}
        </>
    )
}

export default SinglePage;