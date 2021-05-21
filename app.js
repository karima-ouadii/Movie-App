$(function () {
  $("#search-btn").click(searchMovie);
  $("#more-details").click(getMovieDetails)
});



function getMovieDetails(event) {
    
 var id_movie = ( $(event.target).next().text());
window.localStorage.setItem("id-movie-details", id_movie);

}


function searchMovie() {
  // vider le contenu recent
  $("#results").html("");

  var movie_title = $("#title_input").val();
$("#title_input").val("");
  if (movie_title == "") $("#err-msg").removeClass("d-none");
  else {
      //daire disparaitre le msg d'erreur
    $("#err-msg").addClass("d-none");
    // faire apparaitre img loading
    $("#loading").removeClass("d-none");

    $.get(
      "http://www.omdbapi.com/?apikey=e4f21eb6&s=" + movie_title,
      function (response) {

  if(response!=null){
      $("#loading").addClass("d-none")
  } // les donnes toujours sont pas ici
   


        //verification si on a un message d erreur cote serveur
        if (response.Response == "False") {
          
        } else {
          if (response != null && response.Search != null)
            //cibler search property
            for (let i = 0; i < response.Search.length; i++) {
              //recuperation des donner
              var title = response.Search[i].Title;
              var poster = response.Search[i].Poster;
              var ID_MOVIE = response.Search[i].imdbID;
             
              // creation du composant html card

              var film = `
          <div class="card m-3" style="width: 18rem;">
      <img src="${poster}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <a id="more_details" href="details.html" onclick="getMovieDetails(event)" id="more-details" class="btn btn-primary">More Details</a>
        <span class="d-none">${ID_MOVIE}</span>
      </div>
    </div>
    `;

              //cibler le parent
              var latest_content = $("#results").html();

              $("#results").html(latest_content + film);
            }
          console.log(response.Search);
        }
      }
    );
  }
}
