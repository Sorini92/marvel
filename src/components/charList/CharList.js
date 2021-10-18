import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner'
import ErrorMessage from '../errorMessage/errorMessage';

import './charList.scss';

class CharList extends Component {
    state = {
        charList: [],
        loading: true,
        error: false
    }

    marvelService = new MarvelService();

    componentDidMount () {
        this.marvelService
            .getAllCharacters()
            .then(this.onCharListLoaded) 
    }

    onCharListLoaded = (charList) => {
        this.setState({
            charList,
            loading: false,
            error: false
        })
    }

    renderItem (arr) {
        const list = arr.map(item => {
            let imgStyle = {'objectFit' : 'cover'};
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit' : 'contain'};
            }
            
            return (
                <li className="char__item" key={item.id} onClick={() => this.props.onCharSelected(item.id)}>
                    <img src={item.thumbnail} style={imgStyle} alt={item.name}/>
                    <div className="char__name">{item.name}</div>
                </li>
            )
        })

        return (
            <ul className="char__grid">
                {list}
            </ul>
        )
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    render() {
        const {charList, error, loading} = this.state;
        const items = this.renderItem(charList);
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? items : null;

        return (
            <div className="char__list">
                {content}
                {errorMessage}
                {spinner}
                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

export default CharList;