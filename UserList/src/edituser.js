import React, { useState,useEffect,useCallback } from "react";
import { useNavigate,Link ,generatePath,
  useParams } from "react-router-dom";
 // TODO - fill on the later step

const FORM_ENDPOINT = "";
const EditUser = () => {

  const [submitted, setSubmitted] = useState(false);
  let {id} = useParams();
  const [Users, fetchUsers] = useState([])

  const getData = () => {
    fetch('https://61ef7787732d93001778e3c3.mockapi.io/register')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        fetchUsers(res)
      })
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <section class="mb-4">
      <ul>
        {
       Users.filter(items => items.id == id)
            .map((items) => {
          return <li >{items.id} , 
          {items.username} ,
          {items.email}</li>
          
        })}
      </ul>
    </section>
  );
};

export default EditUser;