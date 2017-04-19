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
  let keysArray = Object.keys(wordReplacements);
  for(let i = 0; i < keysArray.length; i++) {
    if (message.toLowerCase().indexOf(keysArray[i]) > -1) {
      message = message.toLowerCase().replace(keysArray[i], wordReplacements[keysArray[i]]);
    }
  }
  return message;
};
