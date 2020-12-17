const {
  index,
  show,
  create,
  update,
  destroy
} = require('../controllers/music');

module.exports = router => {
  // localhost:4000/music
  router.get('/music', index);

  // localhost:4000/music/12345
  

  // localhost:4000/music
  router.post('/music', create);

  // localhost:4000/music/update
  

  // localhost:4000/music/destroy
  
};