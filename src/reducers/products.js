const initialState = [];

const products = (state = initialState, action) => {
    switch (action.type) {
        case "ACTION_TYPE_2":
            {
                state = action.data;
                return [...state]
            }
        /* case "ACTION_TYPE_3":{
            state = action.data
        }
            return state */
        default:
            return [...state]
    }
}
export default products;