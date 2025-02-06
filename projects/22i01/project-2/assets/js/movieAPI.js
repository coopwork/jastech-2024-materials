
const actor_id = new URLSearchParams(window.location.search).get("actorId");

export const options = {
    method: "GET",
    headers: {
       accept: "application/json",
       Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZThmMTU3ZTYwMjNmODdlYTdiNWU3MGQ5MjNmOTBmOCIsIm5iZiI6MTczMzQ1NDI3NC40NDYsInN1YiI6IjY3NTI2OWMyZmExMDdkYzRlZDQwNDgxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FN8b3fNjIHpryFON3ztkvAbJXGz_ag1L79WefRFAXOU",
    },
 };

//ПОЛУЧИТЬ ИНФОРМАЦИЮ ОБ АКТЕРЕ

 export function getActor(){
   fetch(`https://api.themoviedb.org/3/person/${actor_id}?language=ru-RU`, options)
   .then((actor) => actor.json())
   .then((actor) => {

         if (actor.biography) {   
         document.querySelector(".biography").textContent = actor.biography;
         document.querySelector(".actor-name").textContent = actor.name;
         document.querySelector(".actor_img").setAttribute( "src", `https://image.tmdb.org/t/p/w500/${actor.profile_path}`  ); 
         }
         else {
            fetch(`https://api.themoviedb.org/3/person/${actor_id}?language=us-EN`, options)
            .then((actorEn) => actorEn.json())
            .then((actorEn) => { 
            document.querySelector(".biography").textContent = actorEn.biography;
            document.querySelector(".actor-name").textContent = actor.name;
            document.querySelector(".actor_img").setAttribute(  "src",`https://image.tmdb.org/t/p/w500/${actor.profile_path}` ); 
         }
      )
      }
 
   })
.catch((actor) => console.error(err));
 }


 
//
