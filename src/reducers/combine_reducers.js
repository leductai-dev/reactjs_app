import {combineReducers} from 'redux'
import products from './products'
import item from './product_item'
/* var redux = require('redux'); */
const appReducers = combineReducers({
    products,
   /*  item */
})
export default appReducers;
