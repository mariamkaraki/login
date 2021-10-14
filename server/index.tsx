const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/login', async (req, res) => {
  var user_name = req.body.post.email;
  var password = req.body.post.password;

  if (!user_name || !password) {
    res.status(401).json('Username or password was left empty. Please complete both fields and re-submit.');
  }
if (user_name === "mkaraki@proximie.com" && password === "P@ssw0rd") {
  var token = Math.random();

    // res.cookie('auth',token);
    await  res.json(
    {
      "error":  false,
      "token" : token
    }
  
  );
}else{
    res.json(
    {
      "error" : true,
      "token" : "no-authentication"
    }
  
  );
}
});

app.listen(port, () => console.log(`Listening on port ${port}`));