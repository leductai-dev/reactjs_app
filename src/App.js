import React from 'react';
import Menu from './components/Menu/Menu';
import routes from './routes'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div >
        <Menu></Menu> 
        <Dieuhuong/>
      </div>
     </Router>
  );
  
}

 function Dieuhuong(){
  var result = null;
  result = routes.map((route,index)=>{
    return <Route path={route.path} key={index} exact = {route.exact}>
      {route.page} 
    </Route>
  });
  return  <Switch>{result}</Switch>;
}



export default App;

