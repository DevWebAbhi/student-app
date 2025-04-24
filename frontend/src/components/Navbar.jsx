import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div
        style={{
            display:"flex",
            justifyContent:"space-around",
            border:"1px solid"
        }}
    >
        <button
            onClick={()=>navigate("/")}
        >Home</button>
        <button
            onClick={()=>navigate("/addstudent")}
        >Add Student</button>

    </div>
  )
}

export default Navbar