require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const userRoutes = require('../routes/user');
const productRoutes = require('../routes/product');
const customerRoutes = require('../routes/customer');
const orderRoutes = require('../routes/order');

const app = express();
const PORT = 5000



app.use(cors({
    origin: "*",  // Allow all origins (you can replace "*" with specific domains if needed)
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization", 'ngrok-skip-browser-warning'],
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.get('/', (req, res) => {
    res.send("testing");
});

app.use('/admin', userRoutes);
app.use('/product', productRoutes);
app.use('/customer', customerRoutes);
app.use('/order', orderRoutes);

// Ensure a single database connection is reused across invocations
let isConnected = false;

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        if (!isConnected) {
            console.log("DB connected");
            isConnected = true;
        }
    })
    .catch((error) => {
        console.error(error.message);
    });

app.listen(PORT, '0.0.0.0', () => {
    console.log('Server running');
});


// module.exports.handler = serverless(app);  // Wrap the app for serverless deployment
