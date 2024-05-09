const reducer = (state, action) => {
    if (action.type === 'ERROR'){
        return {
            ...state,
            failureAlert: true,
        };
    }
    else if (action.type === 'SUCCESS'){
        return {
            ...state,
            successAlert: true,
        }
    }
    else if (action.type === 'REMOVE_NOTIFICATION'){
        return {
            successAlert: false,
            failureAlert: false,
        }
    }
    return state;
}

export default reducer;