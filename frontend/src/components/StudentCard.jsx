import axios from 'axios';
import React, { useState } from 'react'

const StudentCard = ({student,getStudents}) => {

    const [isEditMode,setEditMode] = useState(false);
        const [studentData,setStudentData] = useState({
            name:student.name,
            email:student.email,
            mobile:student.mobile,
            rollNo:student.rollNo
        })

        function handleInput(e){
            let key = e.target.name;
            let value = e.target.value;
            console.log(key,value)
            setStudentData({...studentData,[key]:value});
        }

    async function deleteStudent() {
        try {
            const deleteStudent = await axios.delete(`http://localhost:3030/student/${student._id}`);
            getStudents();
            alert("student deleted sucessfully");
        } catch (error) {
          console.log(error)
          alert("something went wrong while deleting"); 
        }
    }

    async function handleSubmit(e) {
            e.preventDefault();
            try {
                const {name,email,mobile,rollNo} = studentData;
                if(!name || !email || !mobile || !rollNo){
                    alert("please fill all fields");
                    return;
                }
                const addStudent = await axios.put(`http://localhost:3030/student/${student._id}`,{...studentData})
                alert("Student updated sucessfully");
                setEditMode(false);
                getStudents();
            } catch (error) {
                console.log(error);
                alert("something went wrong");
                setEditMode(false);
            }
        }
  return (
    <div>
        {
            !isEditMode?<div>
                <h3>{student.name}</h3>
        <h4>{student.email}</h4>
        <h5>{student.mobile}</h5>
        <h6>{student.rollNo}</h6>
        <div>
            <button
            onClick={()=>{
                setEditMode(true);
            }}
            >Edit</button>
            <button
            onClick={deleteStudent}
            >Delete</button>
        </div>
            </div>:
        <div>
            <form action="" onSubmit={handleSubmit}>
                <p>Name</p>
                <input type="text" name="name" value={studentData.name}  placeholder='Enter name...' onChange={handleInput} />
                <p>Email</p>
                <input type="email" name="email" value={studentData.email} placeholder='Enter email...' onChange={handleInput}/>
                <p>Mobile No</p>
                <input type="number" name="mobile" value={studentData.mobile} onChange={handleInput}/>
                <p>Roll No</p>
                <input type="text" name='rollNo' value={studentData.rollNo} onChange={handleInput}/>
                <br />
                <input type="submit" />
    </form>
            <button
            onClick={()=>{
                setEditMode(false);
            }}
            >
                Exit Edit Mode
            </button>
        </div>
        }
        
    </div>
  )
}

export default StudentCard