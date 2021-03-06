const mongoose = require('mongoose');
const Shoe = require('../database/Product.js').shoe;

const getShoeData = (modelId, cb) => {
  Shoe.find({modelId: modelId}, function(err, doc) {
    if (err) {
      cb(err, null)
    } else {
      //console.log(doc);
      cb(null, doc);
    }
  });
}

module.exports.getShoeData = getShoeData;