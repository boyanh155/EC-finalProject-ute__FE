//4 steps for useReducer
//1. init state
//2. action
//3. reducer
//4. dispatch
export const authReducer = (state, action) => {
    const {
        type,
        payload: { isAuthenticated, user },
    } = action;

    switch (type) {
        case "SET_AUTH":
            return {
                ...state,
                //done auth loading
                authLoading: false,
                isAuthenticated,
                user,
            };

        default:
            return state;
    }
};