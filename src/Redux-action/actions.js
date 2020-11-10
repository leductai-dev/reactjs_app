import axios from 'axios'
import callApi from '../utils/ApiCaller.js'

export const Fetch_API =(data)=>{
    return({
        type : 'ACTION_TYPE_2',
                data
    })
} 
 //Cách dùng async
/*  const Action_Fetch_API = async (dispatch)=>{
    const response = await callApi('GET', 'http://localhost:3000/items');
    console.log("hello");
    if(typeof response.data == 'undefined'){
        alert('Call API error!');
        return false;
    }
    dispatch(Fetch_API(response.data));
} */

//Cách thông thường
export const Action_Fetch_API = ()=>{
            return (dispatch)=>{
                return callApi('GET', 'http://localhost:3000/items').then(res=>{
                    console.log('data', res.data);
                    dispatch(Fetch_API(res.data));
            })
            }
           
    
}


  
export const Set_Data =(data)=>{
    return({
        type : 'ACTION_TYPE_3',
                data
    })
}