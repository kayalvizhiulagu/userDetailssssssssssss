import React, { Component} from "react";
import DataList from "./DataList";
import {BrowserRouter as Router,Routes,Route ,Link} from 'react-router-dom'
import AddUser from "./adduser";
import EditUser from "./edituser";
function App (){
    return (
        <Router>
           <Routes>
           <Route path ="/" element= {<DataList />}></Route>
           <Route path ="/contactus" element= {<AddUser />}></Route>
           <Route path ="/edituser/:id" element= {<EditUser />}></Route>
           </Routes>
        </Router>
      );
    
    
  };
export default App;

