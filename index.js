const app = require('express')();
const fire = require('./fire');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5000

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send(
        '<h1>Tes Express & Firebase Cloud Firestore</h1><ul><li><p><b>GET /data/esp32</b></p></li><li><p><b>POST /data/esp32</b>  => {suhu, tinggi, berat}</p></li></ul>'
    );
});

//match databaseName with your database name
app.get('/tugasAkhir', (req, res) => {
    const db = fire.firestore();
    let wholeData = []
    db.collection('cadenceSensor').orderBy('date', 'desc').get().then(snapshot => {
        snapshot.forEach(doc => {
            wholeData.push(doc.data())
        });
        res.send(wholeData)
    }).catch(error => {
        console.log('Error! ', error);
    });
});

app.post('/tugasAkhir', (req, res) => {
    const db = fire.firestore();
    db.collection('cadenceSensor').add({
        //change this collections according to your need
        Speed: req.body.kph,
        RPM: req.body.rpm,
        Cadence: req.body.rpmCrank,
        Distance: req.body.km,
        Average: req.body.avg,
        Calories: req.body.kalori,
        Jam: req.body.hours,
        Menit: req.body.minutes,
        Detik: req.body.seconds,
        date: new Date()
    });
    res.send({
        date: new Date(),
        status: 'POST Success!'
    });
});

app.listen(PORT, () => {
    console.log(`Server has been started. Listening on port ${PORT}`)
});
