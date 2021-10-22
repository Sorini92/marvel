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

/*     setCharRef = elem => {
        this.active = elem;
    }

    focused = () => {
        if (this.active) {
           this.active.focus();
        }
    } */

    renderItem (arr) {
        const list = arr.map(item => {
            let imgStyle = {'objectFit' : 'cover'};
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit' : 'contain'};
            }
            /* const activeClass = "char__item char__item_selected";
            const inactiveClass = "char__item";
            let classes = this.state.active ? activeClass : inactiveClass; */
            
            return (
                <li tabIndex={0} ref={this.setCharRef} className="char__item" key={item.id} 
                onFocus={(e) => e.target.style.cssText = `box-shadow: 0 5px 20px #9F0013;
                                                          transform: translateY(-8px);` }
                onBlur={(e) => e.target.style.cssText = `box-shadow: none;
                                                         transform: none;`}
                onClick={() => this.props.onCharSelected(item.id)}>
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