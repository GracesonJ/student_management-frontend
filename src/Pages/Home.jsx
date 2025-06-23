import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import EditStudent from '../Components/EditStudent';
import { deleteStudentAPI, getStudentDataAPI } from '../Service/allApi';

function Home() {
    const [studentsData, setStudentsData] = useState([])

    const getStudentData = async () => {
        const result = await getStudentDataAPI()
        // console.log(result);
        setStudentsData(result.data)

    }
    console.log(studentsData);

    const deleteStudent = async (id) => {
        try {
            const result = await deleteStudentAPI(id);
            console.log("Delete response:", result);
            if (result.status == 200) {
                alert(`Student Deleted Siuccessfully`)
            } else {
                alert(`Something Went Wrong`)
            }

        } catch (error) {
            console.error("Error deleting Student:", error);
            alert(error.message || "Something went wrong.");
        }
    };



    useEffect(() => {
        getStudentData()
    }, [])
    return (
        <>
            <div className="">
                <div className="row m-4">
                    {studentsData?.map((students) => (
                        <div className="col-3 mt-5">
                            <Card border="primary" style={{ width: '18rem' }}>
                                <Card.Header>{students?.name}</Card.Header>
                                <Card.Body>
                                    <Card.Text>Course : {students?.course}</Card.Text>
                                    <Card.Text>Email : {students?.email}</Card.Text>
                                    <Card.Text>Contact : {students?.contact}</Card.Text>
                                </Card.Body>
                                <div className="m-3 d-flex justify-content-around">
                                    <Button onClick={() => deleteStudent(students?._id)} variant="outline-danger">Delete</Button>
                                    <EditStudent students={students} />
                                </div>
                            </Card>
                        </div>
                    ))
                    }
                </div>
            </div>

        </>
    )
}

export default Home