import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditStudent({ student }) {
    console.log(student);

    const [studentDetails, setStudentDetails] = useState({
        name: student?.name,
        contact: student?.contact,
        email: student?.email,
        course: student?.course

    })



    const handleEdit = async () => {
        const { name, contact, email, course } = studentDetails
        // console.log(name, contact, email, course);
        try {
            const body = { name, contact, email, course };
            const headers = { "Content-Type": "application/json" };
            const result = await updateStudentAPI(body, headers);
            alert(result.data.message || "Student updated successfully!");
            location("/");
        } catch (err) {
            console.error("Error updating Student:", err);
            alert("Something went wrong while updating.");
        }
    };


const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
return (
    <>
        <Button variant="outline-success" onClick={handleShow}>
            Edit
        </Button>


        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Edit Student</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className='mb-3'>
                        <label className='mb-2'>Name</label>
                        <input type="text" className='form-control' placeholder='Enter Student Name'
                            onChange={(e) => setStudentDetails({ ...studentDetails, name: e.target.value })}
                            value={studentDetails.name} />
                    </div>
                    <div className='mb-3'>
                        <label className='mb-2'>Contact</label>
                        <input type="text" className='form-control' placeholder='Enter Student Contact'
                            onChange={(e) => setStudentDetails({ ...studentDetails, contact: e.target.value })}
                            value={studentDetails.contact} />
                    </div>
                    <div className='mb-3'>
                        <label className='mb-2'>Email</label>
                        <input type="email" className='form-control' placeholder='Enter Student Email'
                            onChange={(e) => setStudentDetails({ ...studentDetails, email: e.target.value })}
                            value={studentDetails.email} />
                    </div>
                    <div className='mb-3'>
                        <label className='mb-2'>Course</label>
                        <input type="text" className='form-control' placeholder='Enter Course'
                            onChange={(e) => setStudentDetails({ ...studentDetails, course: e.target.value })}
                            value={studentDetails.course} />
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleEdit}>
                    Save Student
                </Button>
            </Modal.Footer>
        </Modal>
    </>
)
}

export default EditStudent