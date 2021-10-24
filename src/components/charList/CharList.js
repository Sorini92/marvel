import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner'
import ErrorMessage from '../errorMessage/errorMessage';
import PropTypes from 'prop-types';

import './charList.scss';

class CharList extends Component {
    state = {
        charList: [],
        loading: true,
        error: false,
        newItemLoading: false,
        offset: 210,
        charEnded: false
        //active: false
    }

    marvelService = new MarvelService();

    componentDidMount () {
        this.onRequest();
    }

    onRequest = (offset) => {
        this.onCharListLoading();
        this.marvelService
            .getAllCharacters(offset)
            .then(this.onCharListLoaded)
            .catch(this.onError) 
    }

    onCharListLoading = () => {
        this.setState({
            newItemLoading: true
        });
    }

    onCharListLoaded = (newCharList) => {
        let ended = false;
        if (newCharList.length < 9) {
            ended = true;
        }


        this.setState(({offset, charList}) => ({
            charList: [...charList, ...newCharList],
            loading: false,
            newItemLoading: false,
            offset: offset + 9,
            charEnded: ended
        }))
    }

    charRefs = [];

    setCharRef = elem => {
        this.charRefs.push(elem);
    }

    focused = (id) => {
        this.charRefs.forEach(item => item.classList.remove('char__item_selected'))
        this.charRefs[id].classList.add('char__item_selected');
        this.charRefs[id].focus();
    }

    renderItem (arr) {
        const list = arr.map((item, i) => {
            let imgStyle = {'objectFit' : 'cover'};
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit' : 'contain'};
            }
            
            return (
                <li 
                    tabIndex={0} 
                    ref={this.setCharRef} 
                    className="char__item" 
                    key={item.id} 
                    onClick={() => {
                        this.focused(i);
                        this.props.onCharSelected(item.id)
                    }}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            this.focused(i);
                            this.props.onCharSelected(item.id)
                        }
                    }}>
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
        const {charList, error, loading, offset, newItemLoading, charEnded} = this.state;
        const items = this.renderItem(charList);
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? items : null;

        return (
            <div className="char__list">
                {content}
                {errorMessage}
                {spinner}
                <button 
                    className="button button__main button__long"
                    disabled={newItemLoading}
                    style={{'display': charEnded ? "none" : 'block'}}
                    onClick={() => this.onRequest(offset)}>
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired
}

export default CharList;