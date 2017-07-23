/**
 * render.js
 *
 * (C) 2017 mobile.de GmbH
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 10 Feb 2017
 */
import { renderToString } from 'react-dom/server';
import React from 'react';

export default (renderMe, head) => `<!DOCTYPE html>
<html ${head.htmlAttributes.toString()}>
    <head>
        <meta charset="UTF-8">
        ${head.title}
        ${head.meta}
        ${head.link}
        <link rel='stylesheet' href='/static/bundle.css'/>
    </head>
    <body>
        <div id="app">${renderToString(renderMe)}</div>
        <script src="/static/bundle.js"></script>
    </body>
</html>`;