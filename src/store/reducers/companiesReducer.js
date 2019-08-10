import { FETCH_COMPANIES } from '../actions/actionTypes';
const initialState = { companies: [] }


const companyReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COMPANIES: {
            return {
                ...state,
                companies: action.data
            }
        }
        default: {
            return state
        }
    }
}

export default companyReducer;