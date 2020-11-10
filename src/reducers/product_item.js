var itemInitialState = {
    "name": '',
    "description": "",
    "price": "",
    "status": null,
    "id": null
}
const item = (state = itemInitialState, action) => {
    switch (action.type) {
        case 'getItem': {

            /* return state */
            return action.getitem 
            
     
        }
        default:
            return state
    }
}
export default item;