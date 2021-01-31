const express = require("express")
const bodyParser = require("body-parser")
const nodemailer = require("nodemailer")
var smtpTransport = require('nodemailer-smtp-transport')
const app = express()
const PORT = process.env.PORT || 3001;
const path = require('path')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

 app.post("/api/contactForm", (req, res) => {
 
    const htmlEmail = `
    <h3>Inqiry/Complaints/Request</h3>
    <b>Name: ${req.body.name}</b>
    <b>Business Name: ${req.body.businessname}</b>
    <b>Email Address: ${req.body.emailaddress}</b>
    <b>Confirm Email: ${req.body.confirmemail}</b>
    <b>Phone Number: ${req.body.phonenumber}</b>
    <h3>Content of Inquiry <br/></h3>
    <p>${req.body.content}</p>
    `;
    var transporter = nodemailer.createTransport(smtpTransport ({
      tls: {
        rejectUnauthorized: false
      },
      host: '',
      secureConnection: false,
      port: 465,
      auth: {
      user: 'bolajiolayinka980@gmail.com',
      pass: 'damilola1'
      }
      }));
   
     // send mail with defined transport object
     let mailOptions={
       from: '"Nodomaru Contact us Form 👻"<standage.org>', // sender address
       to: "", // list of email receivers
       subject: "Contact Form", // Subject line
       text: "Hello world?", // plain text body
       html: htmlEmail // html body
     };
   
     transporter.sendMail(mailOptions, (error, info)=>{
         if(error){
             return console.log(error);
         }
         console.log('Message sent: %s', info.messageId);
         console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
     })
     
   



})


if (process.env.NODE_ENV === 'production'){
app.use(express.static('client/build'));
app.get('*', (req, res)=>{
res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});
}

app.listen(PORT, () => console.log(`Server Listening on port ${PORT}`));
