import express from 'express';
import dotenv from 'dotenv';
import renderer from './helpers/rendere';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import Routes from './Client/Routes';

const app = express();

dotenv.config({ path: './.env' });

const port = process.env.PORT;

app.use(
    '/api',
    proxy('http://react-ssr-api.herokuapp.com', {
      proxyReqOptDecorator(opts) {
        opts.headers['x-forwarded-host'] = `localhost:${port}`;
        return opts;
      }
    })
);
app.use(express.static('public'));
app.get("*", (req, res) => {
    
    // res.send(rendere());

    const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route?.loadData ? route.loadData(store) : "data";
    })
    .map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, context);
;    if (context.url) {
      return res.redirect(301, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
