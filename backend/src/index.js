import express from 'express';
import { foodRouterV1 } from './router/foodV1.router.js';

export const app = express();

const PORT = 3000;
const HOST = '0.0.0.0';

// Plugins


//Middlewares


//Endpoints
app.use("/api/v1/food", foodRouterV1);

//Listening
console.log('starting server')
app.listen(PORT, HOST, (err) => {
    if (err) {
        console.error("======= FATAL ERROR =======");
        console.error(err);
        process.exit(1);
    }
    console.log(`Server Listening at ${HOST}:${PORT}`);
})
