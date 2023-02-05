const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

//send json
app.get('/api/customers', (req, res) => {
    res.send([
        {
        'id': 1,
        'image': 'https://xsgames.co/randomusers/avatar.php?g=pixel',
        'name': 'Justin',
        'birthday': '1/1/2002',
        'gender': 'male',
        'job': 'Software Engineer'
      },
      {
        'id': 2,
        'image': 'https://xsgames.co/randomusers/assets/avatars/pixel/24.jpg',
        'name': 'Issac',
        'birthday': '4/3/1999',
        'gender': 'male',
        'job': 'student'
      },
      {
        'id': 3,
        'image': 'https://xsgames.co/randomusers/assets/avatars/pixel/33.jpg',
        'name': 'Olivia',
        'birthday': '5/3/2003',
        'gender': 'Female',
        'job': 'Designer'
      }
    ]);
});

app.listen(port, ()=> console.log(`Listening on port ${port}`));