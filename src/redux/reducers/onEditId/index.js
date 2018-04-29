import * as actions from '../../actions/article';


export default function index(state = '', action = {} ) {

    switch (action.type) {

        case actions.EDIT_ID:
            return action.id;

        default:
            return state;
    }
}