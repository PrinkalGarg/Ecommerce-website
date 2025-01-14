import express from 'express';
import cors from 'cors';
import connectDB from './config/mongoos.js'
import ConnectCloudify from './config/cloudify.js';
import { connect } from 'mongoose';
import { userRoute } from './routes/userRoutes.js';
import productrouter from './routes/productRoutes.js';

const app = express();
const port = 3000;
connectDB();
ConnectCloudify().then(()=>console.log(connect));



// Use express.json middleware
app.use(express.json());

// Use CORS middleware
app.use(cors());

app.use('/api/user',userRoute);
app.use('/api/product',productrouter);


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});