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
  /**
  * 	On supprime l'article dont l'id est passé en paramètre
  */
   app.get("/supprimer/:id", function(req, res) {
    app.db.collection("articles").deleteOne({ "_id":  new ObjectID(req.params.id)},function(err, article) {
      if (err) throw err;
    });
    res.redirect('http://localhost:8000/');
  });
}