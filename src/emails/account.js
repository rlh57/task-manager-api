const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'skipease99@gmail.com',
        subject: 'Thanks for joining in.',
        text: `Welcome to the app, ${name}.  Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'skipease99@gmail.com',
        subject: 'Sorry to see you leave.',
        text: `Sorry to see that you are quitting the app, ${name}.  Is there anything we can do to help?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
