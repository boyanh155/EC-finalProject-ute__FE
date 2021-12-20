// action creator
//cach 1
// export const changeStyle = () => {
//     const changeStyleAction = (dispatch) => {
//         dispatch({
//             type: "CHANGE_STYLE",
//             payload: {
//                 type: "test hair type",
//             },
//         });
//     };
//     return changeStyleAction
// };

// short one
export const changeStyle = (hairType) => (dispatch) => {
    dispatch({
        type: "CHANGE_STYLE",
        payload: {
            type: hairType,
        },
    });
};