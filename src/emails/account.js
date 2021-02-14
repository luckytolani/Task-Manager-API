const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name) => {
  sgMail.send({
    to: email,
    from:'lakhitolani41@gmail.com',
    subject:'Thanks For joinging us',
    text:`welcome to the app, ${name}. Let me know how you get along with the app`
  })
}

const sendCancelEmail = (email,name ) => {
  sgMail.send({
    to:email,
    from:'lakhitolani41@gmail.com',
    subject:'Sad to See you go go',
    text:`${name}, Why are you Deleting Your Account `
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail
}