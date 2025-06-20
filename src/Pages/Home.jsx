import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import EditStudent from '../Components/EditStudent';
import { getStudentDataAPI } from '../Service/allApi';

function Home() {
    const [studentsData, setStudentsData] = useState([])

    const getStudentData = async () => {
        const result = await getStudentDataAPI()
        // console.log(result);
        setStudentsData(result.data)

    }
    console.log(studentsData);


    useEffect(() => {
        getStudentData()
    }, [])
    return (
        <>
            <div className="">
                <div className="row m-4">
                    {studentsData?.map((student) => (
                        <div className="col-3">
                            <Card border="primary" style={{ width: '18rem' }}>
                                <Card.Header>{student?.name}</Card.Header>
                                <Card.Body>
                                    <Card.Text>Course : {student?.course}</Card.Text>
                                    <Card.Text>Email : {student?.email}</Card.Text>
                                    <Card.Text>Contact : {student?.contact}</Card.Text>
                                </Card.Body>
                                <div className="m-3 d-flex justify-content-around">
                                    <Button variant="outline-danger">Delete</Button>
                                    <EditStudent student={student} />
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