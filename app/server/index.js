/**
 * index.js
 *
 * @author <a href="mailto:akash.bhatia1184@gmail.com">Aakash Bhatia</a>
 */

import express from 'express';
import React from 'react';
import Skeleton from './../client/components/jsx/Skeleton.jsx';
//import NoMatch from '../shared/NoMatch';
//import Error from '../shared/Error';
import { StaticRouter as Router, matchPath } from 'react-router';
import sourceMapSupport from 'source-map-support';
import render from './render';
//import fetch from 'node-fetch';
import Helmet from 'react-helmet';

const routes = [
    '/',
    '/next-mining-boom',
    '/next-mining-boom/:slug'
];

sourceMapSupport.install();

const app = express();

app.use('/static', express.static('dist'));

app.get('*', (req, res) => {
    const match = routes.reduce((acc, route) => matchPath(req.url, route, { exact: true }) || acc, null);
    let head = Helmet.rewind();

            res.status(200).send(render(
                (
                    <Router context={{}} location={req.url}>
                        <Skeleton />
                    </Router>
                ), head
            ));
});

app.listen(3000, () => console.log('Demo app listening on port 3000'));