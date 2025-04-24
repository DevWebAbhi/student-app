import React, { useEffect, useState } from 'react'
import axios from "axios";
import StudentCard from '../components/StudentCard';

const HomePage = () => {

    const[students,setStudents] = useState([]);

    async function getStudents(){
        try {
            const data = await axios.get("http://localhost:3030/student");
            console.log(data.data.students);
            setStudents(data.data.students);
        } catch (error) {
            console.log(error)
            alert("something went wrong");
        }
    }

    useEffect(()=>{
        getStudents();
    },[])

  return (
    <div>
        {
            students.map((std)=>(
                <StudentCard key={std._id} student={std} getStudents={getStudents}/>
            ))
        }
    </div>
  )
}

export default HomePage