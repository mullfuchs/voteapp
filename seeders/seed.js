module.exports = function(db) {
  db.vote.create({
    mVote: 0,
    fVote: 0,
  }).success(function() {
    
  });

};