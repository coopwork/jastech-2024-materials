export function getActorList(list) {
  actorsEl.innerHTML = "";
  list.forEach((item) => {
     const actorsSlideEl = renderActors(item);
     actorsEl.appendChild(actorsSlideEl);
  });
}

export function renderActors({
         name = "",
         character = "",
         profile_path = "",
         id = "",
      }) {
         const actorsSlideEl = document.createElement("div");

         const profile_pathEl = document.createElement("img");
         profile_pathEl.setAttribute(
            "src",
            `https://image.tmdb.org/t/p/w500/${profile_path}`
         );

         const swiperActorContainerEl = document.createElement("div");
         const swiperActorNameEl = document.createElement("p");
         const swiperHeroNameEl = document.createElement("p");

         swiperActorNameEl.innerText = name;
         swiperHeroNameEl.innerText = character;

         actorsSlideEl.className = "swiper-slide";
         swiperActorContainerEl.className = "swiper__actor-container";
         swiperActorNameEl.className = "swiper__actor-name";
         swiperHeroNameEl.className = "swiper__hero-name";
         swiperActorNameEl.setAttribute("data-actor", id);

         actorsSlideEl.appendChild(profile_pathEl);
         actorsSlideEl.appendChild(swiperActorContainerEl);
         swiperActorContainerEl.appendChild(swiperActorNameEl);
         swiperActorContainerEl.appendChild(swiperHeroNameEl);

         swiperActorNameEl.addEventListener("click", () => {
            const actorId = swiperActorNameEl.getAttribute("data-actor");
            location.href = "actor.html";
            localStorage.setItem("actorId", actorId);
         });

         return actorsSlideEl;
      }