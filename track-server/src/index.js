require ('./models/Users');
require ('./models/Track');

const express = require('express');
const mongoos = require('mongoose');
const bodyParser = require('body-parser')
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes//trackRoutes');
const requireAuth = require('./middlewares/requireAuth');




const app = express();

app.use(bodyParser.json())
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri = 'mongodb+srv://hayunori:Oh04081993@cluster0-txjme.azure.mongodb.net/test?retryWrites=true&w=majority';
mongoos.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

mongoos.connection.on('connected', () => {
    console.log('connected to mongo instance ');
});

mongoos.connection.on('error', (err) => {
    console.error('Error conneectio mongo ', err);
});

app.get('/', requireAuth, (req, res) => {
    res.send(`Your email: ${req.user.email}`);
});

app.listen(3000, () => {
    console.log('Listening to port 3000')
});