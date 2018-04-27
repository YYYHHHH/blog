import * as actions from '../../actions/article';


const initialState = {
    id:''
};

export default function index(state = initialState, action = {} ) {

    switch (action.type) {

        case actions.EDIT_ID:
            return action.id;

        default:
            return state;
    }
}