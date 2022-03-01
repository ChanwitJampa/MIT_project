
const asyncHandler = require('express-async-handler')
const version = require('nodemon/lib/version')
const axios = require('axios')



//@desc Get Hospital
//@route GET /api/hospitals/:id
//@access Private
const newTotalCase = asyncHandler(async(req,res)=>{
    if(!req.params.provinceName){
        res.status(400).send("give me province name")
        return;
       // throw new Error('give me a provinceName')
    }
    var data =[{
        new_total_1:"",
        new_total_7:"",
        new_total_30:"",
        death_total_1:"",
        death_total_7:"",
        death_total_30:"",
        traveler_total_1:"",
        traveler_total_7:"",
        traveler_total_30:""
    }]
     var check =0
     var count = 0;
     var new_total=0
     var death_total=0
     var traveler_total=0

    const maxfindWithOutFound = 100

     var j=1
    var name=req.params.provinceName
    await axios.get(`https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-by-provinces`).then((response) => {
             var lengthData =  response.data.length
            for(var i=0;i< lengthData ;i=i+j){
                console.log(i+" || "+ count)
                if(i>maxfindWithOutFound && check===0 ){
                    break
                }
                if(count>30){
                    console.log("break")
                    break;
                   
                }

                if(response.data[lengthData-1-i].province===name)
                {

                    check=1
                    j=78

                    count=count+1
                    new_total=response.data[lengthData-1-i].new_case + new_total
                    death_total=response.data[lengthData-1-i].new_death + death_total
                    traveler_total=response.data[lengthData-1-i].new_case_excludeabroad + traveler_total

                    if(count==1){
                        data.new_total_1 = new_total
                        data.death_total_1 = death_total
                        data.traveler_total_1 = new_total - traveler_total
                    }
                    else if(count==7){
                        data.new_total_7 = new_total
                        data.death_total_7 = death_total
                        data.traveler_total_7 = new_total - traveler_total
                    }
                    else if(count==30){
                        data.new_total_30 = new_total
                        data.death_total_30 = death_total
                        data.traveler_total_30 = new_total - traveler_total
                    }

                }
            }
        })
        if(check==0){
            res.status(400).send(`not have this province name ${req.params.provinceName}`)
            return;
           // throw new Error(`Not have this province name ${req.params.provinceName}`)
        }else if(check==1){
            res.status(200).json(data)
            return;
        }
})



module.exports = {
    newTotalCase
}