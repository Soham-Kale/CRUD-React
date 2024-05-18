import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Read = () => {
    const [data, setData] = useState([]);

    function getData() {
        axios.get("https://careful-wasp-tunic.cyclic.app/getContact")
        .then((resp) => {
            console.log(resp.data);
            setData(resp.data);
        })
    }
    
    function deleteData(_id) {
        axios.delete(`https://careful-wasp-tunic.cyclic.app/deleteContact/${_id}`)
        .then(()=> {
            getData();
        })
    }

    function editData(firstName, lastName, phoneNumber) {
        localStorage.setItem("firstName",firstName);
        localStorage.setItem("lastName",lastName);
        localStorage.setItem("phoneNumber",phoneNumber);
    }

    useEffect(()=> {
        getData();
    }, []);

  return (
    <div>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">FirstName</th>
                <th scope="col">LastName</th>
                <th scope="col">ContactNumber</th>
                <th scope="col">Operations</th>
                </tr>
            </thead>
            {
                data.map((item, i)=> {
                    return(
                        <>
                            <tbody >
                                <tr>
                                <th scope="row">{item.firstName}</th>
                                    <td>{item.lastName}</td>
                                    <td>{item.phoneNumber}</td>
                                    <td>
                                        <Link to='/update'>
                                        <button onClick={()=> editData(item.firstName, item.lastName, item.phoneNumber)} className="btn btn-primary">Edit</button>  &nbsp;&nbsp;&nbsp;
                                        </Link>
                                        <button className="btn btn-danger" onClick={()=> deleteData(item.id)}>Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </>
                    )
                })
                }
        </table>
    </div>
  )
}

export default Read