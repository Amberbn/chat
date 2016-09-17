
exports.index = function(req, res){
  res.render('index', { title: 'Socket.io + Express' });
};

exports.chat = function(req, res){
  res.render('chat', { title: 'Socket.io + Express' });
};
