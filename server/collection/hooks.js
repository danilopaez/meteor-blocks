Scenes.before.insert(function (userId, doc) {
  if(Scenes.find({}).count() > 1)
    return false;
});

Scenes.before.remove(function (userId, doc) {
    return false;
});
