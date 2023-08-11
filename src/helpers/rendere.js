import React from "react";
import { renderToString } from "react-dom/server";
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
import Routes from "../Client/Routes";

export default (req, context) => {
    const content = renderToString(
        <StaticRouter location={req.path} context={context}>
            <div>{renderRoutes(Routes)}</div>
        </StaticRouter>
      );

    return `
    <html>
        <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
        </head>
        <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
        </body>
    </html>
    `;
}