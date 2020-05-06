import { GET_TASKS, ADD_ARTICLE, ADD_TASK } from "../constants/action-types";


const initialState = {
    articles: []
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ARTICLE:
            return Object.assign({}, state, {
                articles: state.articles.concat(action.payload)
            });
    }

    return state;
}

export default rootReducer;