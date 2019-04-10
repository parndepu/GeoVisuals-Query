import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import config from '../../webpack.dev.config';

// Express routers
import routes from './routes/router';
import bodyParser from 'body-parser';

// Initialize webpack
const app = express(),
            DIST_DIR = __dirname,
            HTML_FILE = path.join(DIST_DIR, 'index.html'),
            compiler = webpack(config);

// Parse attached json from a specific request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set static resources folder
app.use(express.static('resources'));
// Set express router
app.use('/', routes);

// Set public webpack middleware
app.use(webpackDevMiddleware( compiler, {
    publicPath: config.output.publicPath
}));

// Set dynamic output files
app.get('*', (req, res, next) => {
    
    compiler.outputFileSystem.readFile( HTML_FILE, (err, result) => {

        if (err) {
            return next(err);
        }

        res.set('content-type', 'text/html');
        res.send(result),
        res.end();
    });

});

// Set listening port
const PORT = process.env.PORT || 3000;
// Start web server
app.listen( PORT, () => {
    console.log(`GeoVisuals is listening at http://localhost:${PORT}`);
});