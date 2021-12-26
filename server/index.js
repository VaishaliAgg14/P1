import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

const app = express();

app.use( express.json ( { limit: '30mb' , extended: true } ));
app.use( express.urlencoded ( { limit: '30mb' , extended: true } ));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/users', userRoutes);

const CONNECTION_URL = 'mongodb+srv://Vaishali:V%40%21shali1410@cluster0.3uvnd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true , useUnifiedTopology: true})
    .then(() => (app.listen(PORT, () => console.log(`server is running on: ${PORT}`))))
    .catch((error) => console.log(error.message));


