const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const dataService = require('./data/dataservice');
const CONSTANTS = require('./constants/constants');
const QUERIES = require('./data/queries');
const bodyParser = require('body-parser');
const {body, validationResult } = require('express-validator');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/inventory', (req, res) => {

  if(CONSTANTS.API_KEY !== req.get('Api-Key')) {
    res.sendStatus(401);
  } else {
    dataService.query(QUERIES.GET_INVENTORY, null, (error, results) => {
      if(error) {
        console.log(error);
      }
      res.status(200).json(results.rows);
    });
  }
});

app.post('/inventory', body('name').isString(), function(req, res) {
  const errors = validationResult(req);

  if(CONSTANTS.API_KEY !== req.get('Api-Key')) {
    res.sendStatus(401);
  } else if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
  } else {
    dataService.query(QUERIES.CREATE_INVENTORY, [req.body.name], (error, results) => {
      if(error) {
        console.log(error);
      }

      res.sendStatus(200);
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});