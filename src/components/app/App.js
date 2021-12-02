import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import useMarvelService from '../../services/MarvelService';
import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";

const Page404 = lazy (() => import('../pages/404'));
const MainPage = lazy (() => import('../pages/MainPage'));
const ComicsPage = lazy (() => import('../pages/ComicsPage'));
const SingleComicPage = lazy (() => import('../pages/SingleComicPage'));



const App = () => {

    const {getComic, getCharacter} = useMarvelService();

    return (
        <Router>
            <div className="app">
            <AppHeader/>
            <main>
                <Suspense fallback={<Spinner/>}>
                    <Switch>
                        <Route exact path="/">
                            <MainPage/>
                        </Route>
                        <Route exact path="/comics">
                            <ComicsPage/>
                        </Route>
                        <Route exact path="/comics/:id">
                            <SingleComicPage requestFunction={getComic}/>
                        </Route>
                        <Route exact path="/character/:id">
                            <SingleComicPage requestFunction={getCharacter}/>
                        </Route>
                        <Route path='*'>
                            <Page404/>
                        </Route>
                    </Switch>
                </Suspense>
            </main>
        </div>
        </Router>
    )
}

export default App;