/**
 * Created by b on 2017/8/25.
 */
import { createStore, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import reducers from '../reducers';
const history = createHistory();
const middleware = routerMiddleware(history);

export default createStore(
    reducers,
    applyMiddleware(middleware)
)