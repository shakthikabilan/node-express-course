const express = require('express');
const app =express();
const bodyParsar = require('body-parser');

app.use(bodyParsar.json())

const mockUserData=[{name:'KAbi'},{name:'dhenar'}]

app.get('/users',function (req,res){
    res.json({
        success:true,
        message:'succesfully got users.nice!',
        users:mockUserData
    })
})

//colons are used as variables that be viewed in the params

app.get('/users/:id',function (req,res){
    console.log(req.params.id)
    res.json({
        success:true,
        message:'got one user!',
        user: req.params.id
    })
})

app.post('/login',function(req,res){
    const username=req.body.username;
    const password=req.body.password;

// it comes from database
    const mockUsername="Kabilan";
    const mockPassword="baba";

    if (username===mockUsername && password===mockPassword){
        //in practice , use json web token sign method here to make an encrypted token
        res.json({
            success:true,
            message:'password and username match',
            token:'encrypted token goes here'
        })
    } else {
        res.json({
            success: false,
            message:'password and username do not match'
        })
    }

})


app.listen(8000,function(){
    console.log("server is listening")
})
