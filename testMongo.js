// testMongo.js
const mongoose = require('mongoose');

const uri = 'mongodb+srv://somakbhuti_db_user:1234@cluster0.hlwup04.mongodb.net/?appName=Cluster0';

mongoose.connect(uri)
  .then(() => {
    console.log('✅ MongoDB connection successful!');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('❌ MongoDB connection failed: ', err.message);
  });
