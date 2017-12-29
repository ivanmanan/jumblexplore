// Send out emails manually
// todo: integrate emails via server after POST request to form
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'email@gmail.com',
    pass: 'emailPassword'
  }
});

// Make a query to retrieve all user emails
// Then run a for-loop for all the emails
var mailOptions = {
  from: 'email@gmail.com',
  to: 'recipient@yahoo.com',
  subject: 'Welcome to Travel Share',
  text: 'You have successfully registered an account on Travel Share!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
