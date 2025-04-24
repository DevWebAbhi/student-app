import React from 'react'
import {Routes,Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import StudentForm from './pages/StudentForm';
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/'  element={<HomePage/>} />
        <Route path='/addstudent' element={<StudentForm/>} />
    </Routes>
  )
}

export default AllRoutes