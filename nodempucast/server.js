// Reseach how to convert gyro to threejs
// gyro values are from -255 to 255

var i2c = require('i2c-bus');
var MPU6050 = require('i2c-mpu6050');
var address = 0x68;
var i2c1 = i2c.openSync(1);
var sensor = new MPU6050(i2c1, address);
var data = sensor.readSync();
console.log(data);


const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")

app.use(express.static('public'))

app.get('/', function(req, res) {
    res.send(fs.readFileSync("public/index.html"))
})

app.get('/sensor', function(req, res) {
    res.send(sensor.readSync())
})

app.listen(port, function() {
    console.log(`Example app listening at http://localhost:${port}`)
})
