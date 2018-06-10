module.exports = function(app) {

  /**
  * 	On récupère ici les donées du formulaire pour insérer un nouvel article en base
  * */
  app.post("/nouvelarticle", function(req, res) {
    var article = req.body;

    app.db.collection('articles').find({}).toArray(function(err, articles) {
      if(err) {
        console.log("Erreur: ", err);
      }


      app.db.collection('articles').insertOne({
        titre: article.titre, 
        auteur: article.auteur,  
        resume: article.resume, 
      });
    });

    res.redirect("http://localhost:8000/creation");
  });

   /**
   * 	On affiche à l'utilisateur le formulaire de création
   */
  app.get("/post/creation", function(req, res) {
    res.render("insertion");
  });
}