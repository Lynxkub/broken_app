const express = require('express');
const axios = require('axios');
const app = express();
const ExpressError = require('./expressError');


// app.post('/', function(req, res, next) {
//   try {
//     let results = req.body.developers.map(async d => {
//       return await axios.get(`https://api.github.com/users/${d}`);
//     });
//     let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));

//     return res.send(JSON.stringify(out));
//   } catch (err) {
//     next(err);
//   }
// });

app.get('/users/:username' , async function(req , res , next) {
  try{
    let resp = await axios.get(`https://api.github.com/users/${req.params.username}`)
    if (resp.data.name === null){
      throw new ExpressError('User not found' , 404);
    }
    if(resp.data.bio === null) {
      let userData = ({name : resp.data.name , bio: `No Bio Created for ${resp.data.name}`})
      return res.json(userData);
    }else {
    let userData = ({name : resp.data.name , bio: resp.data.bio})
    return res.json(userData);
    }
  }catch (err) {
    return next(err)
  }
})


app.use(function(err , req , res , next) {
  let status = err.status || 404;
  let message = err.message;
  return res.status(status).json({
    error: {message , status}
  })
})

app.listen(3000 , function () {
  console.log('App on port 3000');
});





module.exports = app;