import cors from 'cors'
import bodyParser from 'body-parser'
import  express  from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoutes from "./routes/auth.js";

const app = express();
dotenv.config();    
app.use(express.json({limit : '30mb',extended : 'true'}))
app.use(express.urlencoded({limit : '30mb',extended : 'true'}))
app.use(cors());
app.use(bodyParser.json());


app.get('/',(req,res) =>{
    res.send("This is a stack overflow clone API")
// })
})
app.post('/user', userRoutes)
// app.post('/userOtp',userOtpRoutes)
// app.post('/verifyOtp',verifyOtp)
// app.use('/questions', questionRoutes) 
// app.use('/answers',answerRoutes)


const  PORT = process.env.PORT || 5000


const CONNECTION_URL =  process.env.DATA_URL

mongoose.connect(CONNECTION_URL , {useNewUrlParser: true})
    .then(() => app.listen(PORT,() => {console.log( `server running on port ${PORT}`)}))
    .catch((err) => console.log(err.message) )