const mongoose  = require('mongoose');

const mongoose_url = process.env.MONGO_CONN;

mongoose.connect(mongoose_url)
   .then(()=>{
    console.log('MongoDB connected...');
   }).catch((err)=>{
    console.log('MongoDB connection error:', err);
   })