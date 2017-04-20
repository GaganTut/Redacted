/*jshint esversion: 6*/

const wordReplacements = {
  'selfie' : 'self-portrait',
  'yummers' : 'delicious',
  'outchea' : 'are out here',
  'bruh' : 'wow',
  'doge' : 'pug',
  'cilantro' : 'soap',
  'bae' : 'loved one',
  'swag' : 'style',
  'yolo' : 'carpe diem'
};

module.exports = (req, res, next) => {
  req.body.message = filterMessage(req.body.message);
  next();
};

const filterMessage = (message) => {
  message = message.toLowerCase()
    .replace(new RegExp(Object.keys(blacklist).join('|'),'gi'), match => blacklist[match]);
  return message;
};
