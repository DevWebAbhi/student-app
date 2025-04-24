const express = require("express");

const studentRouter = express.Router();

const studentModel = require("../schema");


studentRouter.post("/",async(req,res)=>{
    try {
        const {name,email,mobile,rollNo} = req.body;
        if(!name || !email || !mobile || !rollNo){
            return res.status(400).send({message:"fill all detail"});
        }

        const newStudent = await studentModel.insertOne({
            name,
            email,
            mobile,
            rollNo
        })

        return res.status(201).send({message:"student registered sucessfully",newStudent});

    } catch (error) {
        console.log(error)
        return res.status(500).send({message:"something went wrong"});
    }
})


studentRouter.get("/",async(req,res)=>{
    try {
        const students = await studentModel.find();
        return res.status(200).send({message:"sucessfull",students})
    } catch (error) {
        return res.status(500).send({message:"something went wrong"});
    }
}
)

studentRouter.put("/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        if(!id){
            return res.status(400).send({message:"fill provide id"});
        }
        const {name,email,mobile,rollNo} = req.body;
        if(!name || !email || !mobile || !rollNo){
            return res.status(400).send({message:"fill all detail"});
        }

        const update = await studentModel.findByIdAndUpdate({_id:id},{name,email,mobile,rollNo});
        if(!update){
            return res.status(404).send({message:"student not found"});
        }

        return res.status(200).send({message:"student updated sucessfully",updatedStudent:{
            name,email,mobile,rollNo
        }});

    } catch (error) {
        return res.status(500).send({message:"something went wrong"});
    }
})

studentRouter.delete("/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        if(!id){
            return res.status(400).send({message:"fill provide id"});
        }
       

        const studentRemove = await studentModel.findByIdAndDelete({_id:id});
        if(!studentRemove){
            return res.status(404).send({message:"student not found"});
        }

        return res.status(200).send({message:"student deleted sucessfully"});

    } catch (error) {
        return res.status(500).send({message:"something went wrong"});
    }
})



module.exports = studentRouter;