var posts = require("./posts");

module.exports = function(app) {

  /**
   * On renvoie la liste complète des articles
   */
  app.get("/", function(req, res) {
    app.db.collection('articles').find({}).toArray(function(err, articles) {
      if(err) {
        console.log("Erreur: ", err);
      }

      res.render("index", {'articles': articles});
    });
  });

  // Register posts endpoint
  posts(app);
}