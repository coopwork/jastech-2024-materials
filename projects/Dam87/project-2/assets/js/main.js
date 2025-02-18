import {getWeather, getCurrency, footer} from './footer.js';
import {options} from './movieAPI.js';
// import {happyNY} from './happyNY.js';

const url = new URL("Movie/film.html", window.location.origin);
// new Snow ();
// happyNY();

//ИНИЦИАЛИЗАЦИЯ СВАЙПЕРА НЕДАВНО ВЫШЕДШИЕ
const swiperJR = document.querySelector('.swiper-JR');
const swiperJRParams = {
    spaceBetween: 30,
    slidesPerView: 6,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    breakpoints: {
        499: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        999: {
            slidesPerView: 6,
            spaceBetween: 20,
        },
        800: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    },
    on: {
      init() {
       
      },
    },
  };

  Object.assign(swiperJR, swiperJRParams);

  swiperJR.initialize();

  //ИНИЦИАЛИЗАЦИЯ СВАЙПЕРА НЕДАВНО ВЫШЕДШИЕ


// ПОЛУЧЕНИЕ СПИСКА ПОПУЛЯРНЫХ ФИЛЬМОВ ДЛЯ ХЭДЕРА И РЕНДЕР
fetch(`https://api.themoviedb.org/3/movie/popular?include_adult=false&language=ru-RU&page=1`, options)
  .then((response) => response.json())
  .then((movieList) => {
   getMovieList(movieList.results);
});

function getMovieList(list) {
    swiperHeaderEl.innerHTML = "";
    let headerQunatity = list.slice(0, 5);
    headerQunatity.forEach((item) => {
        const swiperSlide = renderMovieswiperSlide(item);
        swiperHeaderEl.appendChild(swiperSlide);
    });
 }

 const swiperHeaderEl = document.querySelector(".swiper-two");
 
 function renderMovieswiperSlide({
    backdrop_path = "",
    poster_path = "",
    title = "",
    release_date = "",
    overview = "",
    id = "",
    genre_ids = "",
    vote_average = "",
    }) 
 {
    const swiperSlide = document.createElement("swiper-slide"),
          slideEl = document.createElement("div"),
          headerHeroEl = document.createElement("div"),
          headerHeroNameEl = document.createElement("div"),
          movieNameEl = document.createElement("p"),
          headerHeroGenreEl = document.createElement("div"),
          movieYearEl = document.createElement("p"),
          movieGenreEl = document.createElement("p"),

          ratingTopEl = document.createElement("div"),
        //   ratingTopEl = document.createElement("p"),
        
          headerHeroDescrEl = document.createElement("div"),
          movieDescriptEl = document.createElement("p"),
          buttonsContainerEl = document.createElement("div"),
          headerHeroButtonsEl = document.createElement("div"),
          headerHeroButtonsContinueEl = document.createElement("a"),
          headerHeroButtonsWatchswiperHeaderEl = document.createElement("a");

            slideEl.className = "header_swiper";
            headerHeroEl.className = "header__hero";
            headerHeroNameEl.className = "header__hero-name";
            movieNameEl.className = "movie_name";
            headerHeroGenreEl.className = "header__hero-genre";
            movieYearEl.className = "movie_year";
            movieGenreEl.className = "movie_genre";

             ratingTopEl.className = "rating",
            // ratingTopEl.className = "movie_rating",

            headerHeroDescrEl.className = "header__hero-descr";
            movieDescriptEl.className = "movie_descript";
            buttonsContainerEl.className = "buttons-container";
            headerHeroButtonsEl.className = "header__hero-buttons";
            headerHeroButtonsContinueEl.className = "header__hero-buttons-continue";
            headerHeroButtonsWatchswiperHeaderEl.className = "header__hero-buttons-watchlist";

            if( window.innerWidth > 800 ){
                slideEl.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${backdrop_path})`;
           } else {
            slideEl.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500/${poster_path})`;
           }
                
                movieNameEl.textContent = title;
                movieYearEl.textContent = 'Год: ' + release_date.slice(0, 4);
                movieGenreEl.textContent = 'Жанр: ';
                // ratingTopEl.textContent = "Рейтинг:  " + vote_average.toString().slice(0, 3);

                ratingTopEl.textContent = vote_average.toString().slice(0, 3);
                            
                ratingTopEl.style.setProperty('--value', vote_average.toString().slice(0, 3));

                fetch('https://api.themoviedb.org/3/genre/movie/list?language=ru', options)
                .then((genreRes) => genreRes.json())
                .then((genreRes) => {
                    let genreList = genreRes.genres.slice(1, 10)
                    const resultGenres = genreList.filter(i => genre_ids.includes(i.id));
                        resultGenres.forEach(({name}) => {
                        movieGenreEl.textContent += `${name}  `   
                    });
                })

                headerHeroButtonsContinueEl.textContent = "Трейлер";
                headerHeroButtonsContinueEl.setAttribute("data-hystmodal", "#swiper_movie");
                movieDescriptEl.textContent = overview;
                movieNameEl.setAttribute("data-id", id);

                    swiperSlide.appendChild(headerHeroEl);
                    headerHeroEl.appendChild(headerHeroNameEl);
                    headerHeroEl.appendChild(headerHeroGenreEl);

                    headerHeroGenreEl.appendChild(ratingTopEl)

                    headerHeroGenreEl.appendChild(movieYearEl);
                    headerHeroGenreEl.appendChild(movieGenreEl);
                   
                    headerHeroEl.appendChild(headerHeroDescrEl);
                    headerHeroDescrEl.appendChild(movieDescriptEl);
                    headerHeroNameEl.appendChild(movieNameEl);
                    headerHeroEl.appendChild(buttonsContainerEl);
                    buttonsContainerEl.appendChild(headerHeroButtonsEl);
                    headerHeroButtonsEl.appendChild(headerHeroButtonsContinueEl);
                    swiperSlide.appendChild(slideEl);

                // movieNameEl.addEventListener("click", () => {
                //     const filmId1 = movieNameEl.getAttribute("data-id");
                //     location.href = "film.html";
                //     localStorage.setItem("filmId", filmId1);
                // });

                movieNameEl.addEventListener("click", () => {
                    const filmId1 = movieNameEl.getAttribute("data-id");
                    url.searchParams.set("id", filmId1);
                    location.href = url; 
                });
                
                

                // ПОЛУЧЕНИЕСПИСКА ТРЕЙЛЕРА ПО id ФИЛЬМА И ВЫВОД
    headerHeroButtonsContinueEl.addEventListener("click", () => {
        const movie_id = movieNameEl.getAttribute("data-id");
        fetch(` https://api.themoviedb.org/3/movie/${movie_id}/videos?language=ru-RU`, options) // Трейлер
        .then((trailerID) => trailerID.json()).then((trailerID) => {
            let trailer = trailerID.results[0].key;
            document.querySelector(".trailer").setAttribute("src", `https://www.youtube.com/embed/${trailer}`);
        }).catch((err) => console.error(err));
    });
    //--//--//
    return swiperSlide;
 }

 //--//--//--//--//--//--//--//--//--//


//RANDOM FILM
function getRandomFilmId(min, max) {
    min = Math.ceil(6);
    max = Math.floor(1000);
    return Math.floor(Math.random() * (max - min) + min); 
}


fetch(`https://api.themoviedb.org/3/movie/${getRandomFilmId()}?language=ru-RU&sort_by=popularity.asc&release_date.gte=1980-01-01&release_date.lte=2024-12-31`, options)
  .then((randomFilmRes) => randomFilmRes.json())
  .then((randomFilmRes) => {
   let randomFilm = randomFilmRes;
   randomFilm.genres.slice(0, 3).forEach(({name}) => {
   document.querySelector(".random__genre").textContent += ` ${name}  `;
   });

   document.querySelector(".random__block").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${randomFilm.backdrop_path})`;
   document.querySelector(".random__hero-name").textContent = randomFilm.title;
   document.querySelector(".random__descript").textContent = randomFilm.overview;
   document.querySelector(".random__year").textContent += randomFilm.release_date.slice(0, 4);
   
   document.querySelector(".random__movie-rating").textContent += randomFilm.vote_average.toString().slice(0, 3);
   document.querySelector(".random__hero-name").setAttribute("data-rand-id", randomFilm.id);

   document.querySelector(".random__hero-name").addEventListener("click", () => {
       const filmId = document.querySelector(".random__hero-name").getAttribute("data-rand-id");
                    url.searchParams.set("id", filmId);
                    location.href = url; 
   });

   document.querySelector(".random_film_trailer_btn").addEventListener("click", () => {
       fetch(` https://api.themoviedb.org/3/movie/${randomFilm.id}/videos?language=ru-RU`, options) // Трейлер
       .then((trailerID) => trailerID.json()).then((trailerID) => {
           let trailer = trailerID.results[0]?.key;
  //Добавить
           if (trailer) {
            document.querySelector(".trailer").setAttribute("src", `https://www.youtube.com/embed/${trailer}`)
            }
           else {
            document.querySelector(".trailer").setAttribute("src", `https://www.youtube.com/embed/nkGlAEnkQhw?si=jI2Q09i8dJ_131Yg`)
           }
   //

       }).catch((err) => console.error(err));
   });
});

fetch(`https://api.themoviedb.org/3/movie/${getRandomFilmId()}?language=ru-RU&sort_by=popularity.asc`, options).then((randomFilmRes1) => randomFilmRes1.json()).then((randomFilmRes1) => {
   let randomFilm1 = randomFilmRes1;
   randomFilm1.genres.slice(0, 1).forEach(({name}) => {
       document.querySelector(".random__genre_1").textContent += ` ${name}  `;
   });

   if (randomFilm1.poster_path) {
         
    document.querySelector(".random_img_1").setAttribute('src', `https://image.tmdb.org/t/p/w500/${randomFilm1.poster_path}`);
    } else {
   
    document.querySelector(".random_img_1").setAttribute("src", '../assets/img/none.jpg');
    }
   document.querySelector(".random__movie-name_1").textContent = randomFilm1.title;
   document.querySelector(".random__rating_1").textContent = randomFilm1.vote_average.toString().slice(0, 3);
   document.querySelector(".random__movie-name_1").setAttribute("data-rand-id", randomFilm1.id);
   document.querySelector(".random__movie-name_1").addEventListener("click", () => {
       const filmId = document.querySelector(".random__movie-name_1").getAttribute("data-rand-id");
                    url.searchParams.set("id", filmId);
                    location.href = url;
   });
   document.querySelector(".swiper-slide_1").addEventListener("click", () => {
       const filmId = document.querySelector(".random__movie-name_1").getAttribute("data-rand-id");
                    url.searchParams.set("id", filmId);
                    location.href = url;
   });
   fetch(`https://api.themoviedb.org/3/movie/${getRandomFilmId()}?language=ru-RU&sort_by=popularity.asc`, options).then((randomFilmRes2) => randomFilmRes2.json()).then((randomFilmRes2) => {
       let randomFilm2 = randomFilmRes2;
       randomFilm2.genres.slice(0, 1).forEach(({name}) => {
           document.querySelector(".random__genre_2").textContent += ` ${name}  `;
       });
       if (randomFilm2.poster_path) {
         
        document.querySelector(".random_img_2").setAttribute('src', `https://image.tmdb.org/t/p/w500/${randomFilm2.poster_path}`);
    } else {
       
        document.querySelector(".random_img_2").setAttribute("src", '../assets/img/none.jpg');
    }
       document.querySelector(".random__movie-name_2").textContent = randomFilm2.title;
       document.querySelector(".random__rating_2").textContent = randomFilm2.vote_average.toString().slice(0, 3);
       document.querySelector(".random__movie-name_2").setAttribute("data-rand-id", randomFilm2.id);
       document.querySelector(".random__movie-name_2").addEventListener("click", () => {
           const filmId = document.querySelector(".random__movie-name_2").getAttribute("data-rand-id");
                    url.searchParams.set("id", filmId);
                    location.href = url;
       });
   });
   document.querySelector(".swiper-slide_2").addEventListener("click", () => {
       const filmId = document.querySelector(".random__movie-name_2").getAttribute("data-rand-id");
                    url.searchParams.set("id", filmId);
                    location.href = url;
   });
   fetch(`https://api.themoviedb.org/3/movie/${getRandomFilmId()}?language=ru-RU&sort_by=popularity.asc`, options).then((randomFilmRes3) => randomFilmRes3.json()).then((randomFilmRes3) => {
       let randomFilm3 = randomFilmRes3;
       randomFilm3.genres.slice(0, 1).forEach(({name}) => {
           document.querySelector(".random__genre_3").textContent += ` ${name}  `;
       });
       
       if (randomFilm3.poster_path) {
         
        document.querySelector(".random_img_3").setAttribute('src', `https://image.tmdb.org/t/p/w500/${randomFilm3.poster_path}`);
    } else {
       
        document.querySelector(".random_img_3").setAttribute("src", '../assets/img/none.jpg');
    }
       document.querySelector(".random__movie-name_3").textContent = randomFilm3.title;
       document.querySelector(".random__rating_3").textContent = randomFilm3.vote_average.toString().slice(0, 3);
       document.querySelector(".random__movie-name_3").setAttribute("data-rand-id", randomFilm3.id);
       document.querySelector(".random__movie-name_3").addEventListener("click", () => {
           const filmId = document.querySelector(".random__movie-name_3").getAttribute("data-rand-id");
                    url.searchParams.set("id", filmId);
                    location.href = url;
       });
       document.querySelector(".swiper-slide_3").addEventListener("click", () => {
           const filmId = document.querySelector(".random__movie-name_3").getAttribute("data-rand-id");
                    url.searchParams.set("id", filmId);
                    location.href = url;
       });
   })
});
//--//--//--//--//--//--//

//   ЗАПРОС СПИСКА НЕДАВНИХ ФИЛЬМОВ ДЛЯ СЛАЙДЕРА "Недавно вышедшие"
fetch(` https://api.themoviedb.org/3/trending/movie/week?language=ru-RU`, options).then((JustRealeasedList) => JustRealeasedList.json()).then((JustRealeasedList) => {
   getJustRealeased(JustRealeasedList.results);
}).catch((err) => console.error(err));
// ПОЛУЧЕНИЕ СПИСКА  НЕДАВНИХ ФИЛЬМОВ ДЛЯ СЛАЙДЕРА "Недавно вышедшие"
function getJustRealeased(list) {
   swipeJustReleasedEl.innerHTML = "";
   list.forEach((item) => {
       const swiperSlideJustReleasedEl = renderJustRealeased(item);
       swipeJustReleasedEl.appendChild(swiperSlideJustReleasedEl);
   });
}
// РЕНДЕР СПИСКА  НЕДАВНИХ ФИЛЬМОВ ДЛЯ СЛАЙДЕРА "Недавно вышедшие"
const swipeJustReleasedEl = document.querySelector(".swiper-JR");

function renderJustRealeased({
   poster_path = "",
   title = "",
   vote_average = "",
   id = "",
   genre_ids = "",
}) {
   const swiperSlideJustReleasedEl = document.createElement("swiper-slide"),
         swiperMovieNameEl = document.createElement("p"),
         swiperRatingGenreEl = document.createElement("div"),
         swiperMovieRatingEl = document.createElement("p"),
         swiperNovieGenre = document.createElement("p"),
         img_JREl = document.createElement("img");
   swiperSlideJustReleasedEl.className = "slide_JR";
   swiperMovieNameEl.className = "swiper_movie-name";
   swiperRatingGenreEl.className = "swiper_rating-genre";
   swiperMovieRatingEl.className = "swiper_movie-rating";
   swiperNovieGenre.className = "swiper_movie-genre";
   img_JREl.className = "img_JR";
   swiperMovieNameEl.innerText = title;
   swiperMovieRatingEl.innerText = vote_average.toString().slice(0, 3);

   fetch('https://api.themoviedb.org/3/genre/movie/list?language=ru', options)
   .then((genreRes1) => genreRes1.json())
   .then((genreRes1) => {

     let genreList1 = genreRes1.genres
      const resultGenres = genreList1.filter(i => genre_ids.includes(i.id));

      resultGenres.slice(0 , 1).forEach(({
         name
     }) => {
         
        swiperNovieGenre.innerText += `${name}  `  
                
     });

})

  // swiperNovieGenre.innerText = "Пока нет";
   img_JREl.setAttribute("src", `https://image.tmdb.org/t/p/w500/${poster_path}`);
   swiperMovieNameEl.setAttribute("data-id", id);
   swipeJustReleasedEl.appendChild(swiperSlideJustReleasedEl);
   swiperSlideJustReleasedEl.appendChild(swiperMovieNameEl);
   swiperSlideJustReleasedEl.appendChild(swiperRatingGenreEl);
   swiperRatingGenreEl.appendChild(swiperMovieRatingEl);
   swiperRatingGenreEl.appendChild(swiperNovieGenre);
   swiperSlideJustReleasedEl.appendChild(img_JREl);
   swiperMovieNameEl.addEventListener("click", () => {
       const filmId = swiperMovieNameEl.getAttribute("data-id");
                    url.searchParams.set("id", filmId);
                    location.href = url;
   });
   return swiperSlideJustReleasedEl;
}
//ЛУЧШИЕ ФИЛЬМЫ
let pageTop = 1;
const topListEl = document.querySelector(".week__block");

function renderTopCard({
   title = "",
   release_date = "",
   poster_path = "",
   id = "",
   vote_average = "",
   top = 1,
}) {
   const cardTop = document.createElement("div"),
         placeTopEl = document.createElement("p"),
         posterPathTopEl = document.createElement("img"),
         infoTopEl = document.createElement("div"),
         titleTopEl = document.createElement("p"),
         ratingTop = document.createElement("p"),
         yearTopEl = document.createElement("p");
   posterPathTopEl.setAttribute("src", `https://image.tmdb.org/t/p/w500/${poster_path}`);
   placeTopEl.textContent = " Топ  " + top;
   yearTopEl.textContent = "Год выхода: " + release_date.slice(0, 4);
   titleTopEl.textContent = title;
   ratingTop.textContent = "Рейтинг: " + vote_average.toString().slice(0, 3);
   titleTopEl.setAttribute("data-id-top", id);
   cardTop.className = "week__card";
   placeTopEl.className = "week__top";
   posterPathTopEl.className = "week__poster";
   infoTopEl.className = "week__info";
   yearTopEl.className = "week__top";
   ratingTop.className = "week__movie-rating";
   titleTopEl.className = "week__movie-name";
   cardTop.appendChild(posterPathTopEl);
   cardTop.appendChild(infoTopEl);
   infoTopEl.appendChild(placeTopEl);
   infoTopEl.appendChild(yearTopEl);
   infoTopEl.appendChild(titleTopEl);
   infoTopEl.appendChild(ratingTop);
   titleTopEl.addEventListener("click", () => {
       const filmId = titleTopEl.getAttribute("data-id-top");
                    url.searchParams.set("id", filmId);
                    location.href = url;
   });
   posterPathTopEl.addEventListener("click", () => {
       const filmId = titleTopEl.getAttribute("data-id-top");
                    url.searchParams.set("id", filmId);
                    location.href = url;
   });
   return cardTop;
}
fetch(`https://api.themoviedb.org/3/movie/top_rated?language=ru-RU&page=${pageTop}`, options).then((topList) => topList.json()).then((topList) => {
   getTopList(topList.results);
}).catch((err) => console.error(err));

function getTopList(list) {
   let slider = document.querySelector("#myRange");
   let output = document.querySelector("#quantity");
   output.innerHTML = slider.value;
   let filmQuantity = 6;
   topListEl.innerHTML = "";
   let topList = list.slice(0, filmQuantity);
   topList.forEach((item, index) => {
       const cardTop = renderTopCard({...item,
           top: index + 1,
       });
       topListEl.appendChild(cardTop);
   });
   slider.oninput = function() {
       output.innerHTML = this.value;
       filmQuantity = this.value;
       topListEl.innerHTML = "";
       let topList = list.slice(0, filmQuantity);
       topList.forEach((item, index) => {
           const cardTop = renderTopCard({...item,
               top: index + 1,
           });
           topListEl.appendChild(cardTop);
       });
   };
}

// SEARCH CODE
const searchEl = document.querySelector("#find_cont");

function renderSearch({
    title = "",
    id = " ",
    poster_path = " ",
    release_date = " ",
 }) {
    const sItem = document.createElement("div"),
          sResultEl = document.createElement("div"),
          sResultTitleYear = document.createElement("div"),
          sResultImg = document.createElement("img"),
          sResultYear = document.createElement("p");
    
    sResultEl.className = "s_result-title";
    sResultImg.className = "s_result-img";
    sItem.className = "s_result";
    sResultYear.className = "s_result-year";
    sResultEl.innerText = title;
    sResultYear.textContent = "Год: " + release_date.slice(0, 4);
    sItem.appendChild(sResultTitleYear);
    sItem.setAttribute("data-id", id);
    sItem.appendChild(sResultImg);
    sResultTitleYear.appendChild(sResultEl)
    sResultTitleYear.appendChild(sResultYear);
    sResultImg.setAttribute("src", `https://image.tmdb.org/t/p/w500/${poster_path}`);
    return sItem;
 }
const input = document.querySelector("#find");

input.addEventListener("input", updateValue);

function updateValue(e) {
   let find = e.target.value;
   fetch(`https://api.themoviedb.org/3/search/movie?include_adult=false&language=ru-RU&query=${find}`, options).then((searchList) => searchList.json()).then((searchList) => {
      sMovieList(searchList.results.slice(0, 5));
       console.log(searchList.results);
   }).catch((err) => console.error(err));

   function sMovieList(search) {
       searchEl.innerHTML = "";
       search.forEach((item) => {
           const sItem = renderSearch(item);
           searchEl.appendChild(sItem);
           sItem.addEventListener("click", () => {
               const filmId = sItem.getAttribute("data-id");
                    url.searchParams.set("id", filmId);
                    location.href = url;
           });
       });
   }
}
const swiperMain = document.querySelector("swiper-container");
const params = {
   injectStyles: [`  .swiper-pagination-bullet {
           width: 20px;
           height: 20px;
           text-align: right;
           line-height: 20px;
           font-size: 12px;
           color: #000;
           opacity: 1;
           background: rgba(0, 0, 0, 0.2);
         }
   
         .swiper-pagination-bullet-active {
           color: #fff;
           background: #007aff;
         }
         `, ],
   pagination: {
       clickable: true,
       renderBullet: function(index, className) {
           return '<span class="' + className + '">' + "</span>";
       },
   },
};
Object.assign(swiperMain, params);
swiperMain.initialize();
//МОДАЛЬНОЕ ОКНО
const myModal = new HystModal({
   linkAttributeName: "data-hystmodal",
   catchFocus: true,
   waitTransitions: true,
   closeOnEsc: false,
   beforeOpen: function(modal) {},
   afterClose: function(modal) {
       document.querySelector(".trailer").setAttribute("src", "");
   },
});
// RANDOM SWIPER
var swiper = new Swiper(".randomSwiper", {
   slidesPerView: 3,
   spaceBetween: 30,
   pagination: {
       el: ".swiper-pagination",
       clickable: true,
   },
   navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
   },
});


// footer
footer()
   // ПОГОДА ))
getWeather()
   //КУРС ВАЛЮТ))
getCurrency()
