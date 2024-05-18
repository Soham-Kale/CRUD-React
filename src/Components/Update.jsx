import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const navigate = useNavigate();

    useEffect(()=> {
        setFirstName(localStorage.getItem("firstName"));
        setLastName(localStorage.getItem("lastName"));
        setPhoneNumber(localStorage.getItem("phoneNumber"));
    }, [])

    function handleUpdate(e) {
        e.preventDefault();
        axios.patch(`https://careful-wasp-tunic.cyclic.app/updateContact/${idOfData}`),
        { 
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            _id: idOfData,
        }
        .then(() => {
            navigate('/read');
        })
    }

    return (
        <>
            <h2>Update</h2>
            <form>
                <div className="mb-3">
                    <label  className="form-label">First Name</label>
                    <input 
                    onChange={(e) => setFirstName(e.target.value)} 
                    value={firstName}
                    type="text" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Last Name</label>
                    <input  
                    onChange={(e) => setLastName(e.target.value)} 
                    value={lastName}
                    type="text" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Contact Number</label>
                    <input 
                    onChange={(e) => setPhoneNumber(e.target.value)} 
                    value={phoneNumber}
                    type="phoneNumber" className="form-control" />
                </div>
                <button 
                onClick={handleUpdate}
                type="submit" className="btn btn-primary">Update</button>
            </form>
        </>
    )
}

export default Update