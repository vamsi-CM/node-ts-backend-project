import dotenv from 'dotenv-safe';
import morgan from 'morgan';
import http from 'http';
import express, { Express } from 'express';
import routes from '@src/routes/auth';

const router: Express = express();

/** Logging */
router.use(morgan('dev'));
/** Parse the request */
router.use(express.urlencoded({ extended: false }));
/** Takes care of JSON data */
router.use(express.json());

router.use('/', routes);

dotenv.config();

const httpServer = http.createServer(router);
const PORT = process.env.PORT ?? 6060;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
