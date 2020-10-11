const mongoose=require("mongoose")

const dataSchema=new mongoose.Schema({
    patientId:{
        type:Number,
        required:true,
    },
    reportedOn:{
        type:String
    },
    ageEstimate:{
        type:Number,
    },
    gender:{
        type:String,
        trim:true
    },
    state:{
        type:String,
        trim:true
    },
    district:{
        type:String,
        trim:true
    },
    status:{
        type:String,
        trim:true
    },
    notes:{
        type:String,
        trim:true
    },
    onsetEstimate:{
        type:String,
        trim:true
    },
    city:{
        type:String,
        trim:true
    }

},{
    timestamps:true
})

dataSchema.statics.findbythedetails=async(list,filter)=>{
    var finalData=[]

    list.forEach(element => {
        filter["reportedOn"]=element
        finalData.push(Data.find(filter))
    });
    return Promise.all(finalData)
}

const Data=mongoose.model('Data',dataSchema)

module.exports=Data