const initialState = 'ltr';

const changeDirection = (state = initialState, action) => {
    switch(action.type) {
        case "dir" : return action.payload;
        default : return state;
    }
}

export default changeDirection;