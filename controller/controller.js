const conschema=require('../model/contact');

exports.addcontact=async(req,res,next)=>{
    try{
        const {name,phone,email}=req.body;
        let user=await conschema.findOne({phone});
        if(phone){
            res.status(400).json({
                message:"Contact already exists"
            });
        }
        user= new conschema({name,phone,email});
        await user.save();
        res.status(200).json({
            message:"Contact Successfully Stored"
        });
    }
    catch(error){
        res.status(500).json({
            message:"Internal Server"
        });
    }
};

exports.getcontact=async(req,res,next)=>{
    try{
        const user=await conschema.find();
        if(user){
            res.status(200).json(user);
        }
    }
    catch(error){
        res.status(500).json({
            message:"Internal Server"
        });
    }
};

exports.getidcontact=async(req,res,next)=>{
    try{
        const user=await conschema.findById(req.params.id);
        if(!user){
            res.status(400).json({
                message:"Contact not found"
            });
        }
        res.json(user);
    }
    catch(error){
        res.status(500).json({
            message:"Internal Server"
        });
    }
};

exports.updatecontact=async(req,res)=>{
    try{
        const update=await conschema.findByIdAndUpdate(req.params.id,req.body,{
            new:true
        });
        if(!update){
            res.status(400).json({
                message:"contact not found"
            });
        }
        res.json(update);
    }
    catch(error){
        res.status(500).json({
            message:"Internal Server"
        });
    }
};

exports.deletecontact=async(req,res)=>{
    try{
        const delet=await conschema.findByIdAndDelete(req.params.id);
        if(!delet){
            res.status(400).json({
                message:"Contact not found"
            });
        }
        res.json({
            message:"Deleted Successfully"
        });
    }
    catch(error){
        res.status(500).json({
            message:"Internal Server"
        });
    }
};