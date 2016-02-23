import express from "express";
import React from 'react';
import ReactDOM from 'react-dom/server';
import Html from './Html';
import Chart from '../shared/chart'
const app = express();
app.use(express.static('./static'));

app.get('/*', function (req, res) {
  const appContent =  <Chart />;
    var fullPageHtml = ReactDOM.renderToStaticMarkup(<Html appContent={appContent}/>);
    res.write(fullPageHtml);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
