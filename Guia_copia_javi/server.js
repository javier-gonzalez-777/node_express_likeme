import express from 'express';
import cors from 'cors' ;
import postRouter from './src/routes/post.routes.js'

const app = express();

const PORT = process.env.PORT || 3000 

app.use(express.json()); // PARA QUE LEA LAS POST

// middlelweare
app.use(cors());
app.use('/',postRouter);  // conecto el server con las rutas

// rutas


app.listen(PORT, () =>{
    console.log(`Server conectado!! http://localhost:${PORT}`);
});

