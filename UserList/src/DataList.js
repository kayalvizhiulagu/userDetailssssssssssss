import React, { useState,useEffect} from "react";
import './App.css';
import { useNavigate,Link } from "react-router-dom";
  import { Button } from 'react-bootstrap';
import BootstrapTable from "react-bootstrap-table-next";
import { PencilFill,ArchiveFill } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
function DataList(){
 const[dataList,setDataList]=useState([]);
 let navigate = useNavigate();
 const pagination=paginationFactory({
    page:1,
    sizePerPage:10,
    lastPageText:'>>',
    firstPageText:'<<',
    nextPageText:'>',
    prePageText:'<',
    showTotal:true,
    alwaysShowAllBtns:true,
  });
  const columns=[
    {
      dataField: 'id',
      text: 'User ID',
      sort:true,
    },{
      dataField: 'username',
      text: 'User Name',
      sort:true,
    },{
      dataField: 'email',
      text: 'Email',
      sort:true
    },{
      dataField: 'phonenumber',
      text: 'Phone Number',
      sort:true
    },
   
    { 
    dataField: "id", 
    text: "Action",
    sort: false,
    formatter: (cell, row, rowIndex, formatExtraData) => { 
      console.log(row);
      const customerId = row.id;
      return ( 
        <div>
       <Link to ={"/edituser/"+customerId}>
        <PencilFill
         style={{ fontSize: 20 }}
         color="disabled"  
         /> 
         </Link>
        <span>  &nbsp;  &nbsp;</span>
          <ArchiveFill
           onClick={() => deleteCustomer(customerId)}
           style={{ fontSize: 20 }}
           color="disabled"  
            /> 
        </div> 
      )
    },
}];

const deleteCustomer = (customerId) => {
alert("User Deleted");
};
  
   useEffect(()=>{
     fetch('https://61ef7787732d93001778e3c3.mockapi.io/register')
     .then(response=>response.json())
     .then(result=>setDataList(result))
     .catch(error=>console.log(error));
   },[])
    return (
      <div>
        <h1 className='text-center'> User List</h1>
        <div className="float-left">
        <Button  onClick={()=>{navigate("/contactus");}} style={{ marginLeft: 1100 }}  variant="outline-primary" size="sl">Contact us </Button>
        </div>
        <div className="container" style={{ marginTop: 50 }}>
        <BootstrapTable striped
          hover bootstrap4 keyField="id"  columns={columns}   data={dataList} pagination={ pagination } />
        </div>
       </div>
    );
  }
export default DataList;

