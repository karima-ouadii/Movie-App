$(function() {
    //recuper id depuis localstorage avec la methode get
   var id_movie =(window.localStorage.getItem("id-movie-details"))
   console.log(id_movie)
    
  $.get(
    "http://www.omdbapi.com/?apikey=e4f21eb6&i=" + id_movie,getDetails)

})




  function getDetails(response) {
    
    console.log(response)

   var Title=response.Title
   var poster=response.Poster
 
   var actors=response.Actors
   var genre=response.Genre
   var typeMedia=response.Type
   var description=response.Plot
   var length=response.Runtime
   var ratings=response.imdbRating
   var language=response.Language
   var director=response.Director
   var country= response.Country

 
// personaliser actors 
var actors_html= "";
var actors_tableau = actors.split(",")
for (let i = 0; i < actors_tableau.length; i++) {
    actors_html=
    actors_html + 
    ` <span class="badge rounded-pill bg-success fs-6 p-3 m-2">
    ${actors_tableau[i]}</span>`;
}
console.log(actors_tableau)



var details=`  <main class="d-flex  border position-absolute top-50 start-50 translate-middle" style="width: 70%;">

<section style="width: 20%;" class="">
    <div class="card " >
        <img src="${poster}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title text-center">${director}</h5>
          
          <a href="#" class="btn btn-danger mx-auto " style="width: auto;">Watch Now</a>
        </div>
      </div>
</section>

<section style="width: 80%;" class="mx-2" >  

    <div >
        <div class="d-flex justify-content-between align-center">
          <div class=" d-flex ">
          <img src="" />
            <h1 class="p-3 text-light">${Title}</h1>
           </div>

            <div   class=" d-flex justify-content-between align-top">
            <i class=" fas fa-star p-3 fs-2 text-warning "><span class="mx-2">${ratings}</span></i>
            </div>
        </div>


        <div class="d-flex justify-content-lg-start  mb-4">
            <span class="badge bg-secondary  p-3 m-2">${typeMedia}</span>
            <span class="badge bg-secondary  p-3 m-2 ">${language}</span>
            <span class="badge bg-secondary  p-3 m-2">${length}</span>
            <span class="badge bg-secondary  p-3 m-2">${genre}</span>
        </div>
        
       <div>
        <p class="lead text-white text-start  mx-2">

          ${description}
          </p>
       </div>

       <div class="">
        
                <h1 class="text-white "><i class="fas fa-person-booth p-2" style="color: crimson;"></i>Cast</h1>
       </div>
       
       <div class="d-flex justify-content-lg-start flex-wrap mb-5 ">
    ${actors_html}
       
       </div>
         
         
</section>

    </main>`

 

    $("#details").html( details);
      
  }