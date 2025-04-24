import axios from 'axios';
import React, { useState } from 'react'

const StudentForm = () => {
    const [studentData,setStudentData] = useState({
        name:"",
        email:"",
        mobile:"",
        rollNo:""
    })

    function handleInput(e){
        let key = e.target.name;
        let value = e.target.value;
        console.log(key,value)
        setStudentData({...studentData,[key]:value});
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const {name,email,mobile,rollNo} = studentData;
            if(!name || !email || !mobile || !rollNo){
                alert("please fill all fields");
                return;
            }
            const addStudent = await axios.post("http://localhost:3030/student",{...studentData})
            alert("Student added sucessfully");
        } catch (error) {
            console.log(error);
            alert("something went wrong");
        }
    }


  return (
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
  )
}

export default StudentForm