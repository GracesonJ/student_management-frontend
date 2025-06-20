import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addStudentAPI } from '../Service/allApi';

function AddStudent() {
    const [studentDetails, setStudentDetails] = useState({
        name:"",
        contact : "",
        email: "",
        course : ""

    })

    const handleAdd = async (e)=>{
        const {name, contact, email, course} = studentDetails
        // console.log(name, contact, email, course);
    e.preventDefault();

    const body = { name, contact, email, course };
    const headers = { "Content-Type": "application/json" };

    try {
      const result = await addStudentAPI(body, headers);
      alert(result.data.message || "Student added successfully!")
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong!");
    }
  };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                + Add Student
            </Button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add Student</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className='mb-3'>
                            <label className='mb-2'>Name</label>
                            <input type="text" className='form-control' placeholder='Enter Student Name'
                            onChange={(e)=>setStudentDetails({...studentDetails, name: e.target.value})} 
                            value={studentDetails.name} />
                        </div>
                        <div className='mb-3'>
                            <label className='mb-2'>Contact</label>
                            <input type="text" className='form-control' placeholder='Enter Student Contact'
                            onChange={(e)=>setStudentDetails({...studentDetails, contact: e.target.value})}
                            value={studentDetails.contact}  />
                        </div>
                        <div className='mb-3'>
                            <label className='mb-2'>Email</label>
                            <input type="email" className='form-control' placeholder='Enter Student Email'  
                            onChange={(e)=>setStudentDetails({...studentDetails, email: e.target.value})}
                            value={studentDetails.email} />
                        </div>
                        <div className='mb-3'>
                            <label className='mb-2'>Course</label>
                            <input type="text" className='form-control' placeholder='Enter Course'
                            onChange={(e)=>setStudentDetails({...studentDetails, course: e.target.value})}
                            value={studentDetails.course}  />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAdd}>
                        Add Student
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddStudent