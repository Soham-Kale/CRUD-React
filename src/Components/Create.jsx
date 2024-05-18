import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const history = useNavigate();

    const header = {"Access-Control-Allow-Origin": "*"};

    const handleData = (e) => {
        e.preventDefault(e);
        console.log("Clicked");
        axios.post("https://careful-wasp-tunic.cyclic.app/addContact", {
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            header,
        })
        .then(() => {
            history('/read');
        })
    };

    return (
    <>
    <h2>Create</h2>
        <form>
            <div className="mb-3">
                <label  className="form-label">First Name</label>
                <input onChange={(e) => setFirstName(e.target.value)} type="text" className="form-control"/>
            </div>
            <div className="mb-3">
                <label  className="form-label">Last Name</label>
                <input  onChange={(e) => setLastName(e.target.value)} type="text" className="form-control"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Contact Number</label>
                <input onChange={(e) => setPhoneNumber(e.target.value)} type="phoneNumber" className="form-control" />
            </div>

            <button onClick={handleData} type="submit" className="btn btn-primary">Submit</button>
        </form>
    </>
  )
}

export default Create;