//4 steps for useReducer
//1. init state
//2. action
//3. reducer
//4. dispatch

export const personalizeReducer = (state, action) => {
    const {
        //hair style
        type,
        payload: { hairType, length, color },
    } = action;

    switch (type) {
        case "SET_STYLE":
            return {
                ...state,
                hairType,
                length,
                color,
            };

        default:
            return state;
    }
};