const express = require('express');
const route = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pelanggan');
let db = mongoose.connection;

db.on('error',(err)=>console.log(`terjadi error ${err}`));
db.once('open',()=>console.log('berhasil konek'));

route.listen(5000,()=>console.log(`berjalan di port 5000`));
