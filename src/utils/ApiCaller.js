import axios from 'axios'   

/* export default function callApi (endpoint='items',method='GET',data){
      return axios({
        method: 'GET', */
        /* url : `${constant.ApiUrl}/${endpoint}`, */
       /*  url:`http://localhost:3000/items`,
        data:null
    }).catch(err=>{
       console.log(err)
    });
} */

export default function callApi (method,url,data){
    return axios({
      method: method,
      url:url,
      data:data
    }).catch(err=>{
      console.log('Không kết nối được!!')
    });
}