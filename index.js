const gaze = require('gaze');

const pattern = 'examples/**/*.css';

function spy(filePath) {
  console.log('seen: ', filePath);
}

gaze(pattern, function(err, files) {
  this.on('changed', spy);
  this.on('added', spy);
});
