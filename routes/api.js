'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      if (!Object.hasOwn(req.body, 'locale') || !Object.hasOwn(req.body, 'text')) return res.json({ error: 'Required field(s) missing' });
      if (!req.body.text) return res.json({ error: 'No text to translate' });
      
      res.json(translator.translate(req.body.locale, req.body.text));
    });
};
