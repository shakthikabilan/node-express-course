const express = require('express');
const app =express();


const mockUserData=[
{name:'KAbi'},
{name:'dhenar'}
]

app.get('/users',function (req,res)
{
    res.json({
        success:true,
        message:'succesfully got users.nice!',
        users:mockUserData
    })
})

app.listen(8000,function(){
    console.log("server is running")
})
