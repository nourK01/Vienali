const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sendEmail = require('./sendEmail');

const app = express();
const port = 3000;

app.use(cors());  // Enable CORS
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/submitForm', async (req, res) => {
    const formData = req.body;

    // Call the sendEmail function with form data
    const emailSent = await sendEmail(formData);

    if (emailSent) {
        res.status(200).send('Email sent successfully');
    } else {
        res.status(500).send('Error sending email');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
