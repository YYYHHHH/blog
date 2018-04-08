/**
 * Created by b on 2018/4/8.
 */
import * as actions from '../../actions/article';


const initialState = {
    title:'',
    content:''
};
const defaultAction = {
    type: 'doNothing'
};

export default function index(state = initialState, action = defaultAction ) {

    switch (action.type) {

        case actions.EDIT_ARTICLE:
            return action.data;

        default:
            return state;
    }
}