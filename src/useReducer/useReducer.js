const reducer = (state, action) => {
    if (action.type === 'CLICK'){
        return { ...state, clickedData: action.payload}
    }
    return state;
}
export default reducer;