import {
	getWeather,
	getCurrency,
	footer
} from './footer.js';
import {
	options
} from './movieAPI.js';


const urlActor = new URL("Movie/actor.html", window.location.origin);
const urlFilm = new URL("Movie/film.html", window.location.origin);
const movie_id = new URLSearchParams(window.location.search).get("id");


//ИНИЦИАЛИЗАЦИЯ СВАЙПЕРА ПОХОЖИЕ ФИЛЬМЫ
const swiperSimilar1 = document.querySelector('.swiperSimilar');
const swiperSimilarParams = {
	slidesPerView: 2,
	spaceBetween: 30,
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
			slidesPerView: 5,
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
Object.assign(swiperSimilar1, swiperSimilarParams);
swiperSimilar1.initialize();

//ИНИЦИАЛИЗАЦИЯ СВАЙПЕРА ПОХОЖИЕ ФИЛЬМЫ

fetch(`https://api.themoviedb.org/3/movie/${movie_id}?language=ru-RU`, options)
	.then((filmById) => filmById.json())
	.then((filmById) => {
		let mainFilmInfo = filmById;
		filmById.genres.slice(0, 3).forEach(({
			name
		}) => {
			document.querySelector(".hero-genre").textContent += ` ${name}  `;
		});
		document.querySelector(".hero-year").textContent += mainFilmInfo.release_date.slice(0, 4);
		
		
		document.querySelector(".hero-rating").textContent += mainFilmInfo.vote_average.toString().slice(0, 3);
		document.querySelector(".hero-name").textContent = mainFilmInfo.title;

		if( window.innerWidth > 800 ){
			document.querySelector(".header").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${mainFilmInfo.backdrop_path})`;;
	   } else {
		document.querySelector(".header").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${mainFilmInfo.poster_path})`;
	   }


		// document.querySelector(".header").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${mainFilmInfo.backdrop_path})`;
		let storyEl = document.querySelector(".story__line");
		storyEl.textContent = mainFilmInfo.overview + " " + storyEl.textContent;
		fetch(`https://api.themoviedb.org/3/movie/${movie_id}/credits?language=ru-RU`, options).then((FilmActors) => FilmActors.json()).then((FilmActors) => {
			getActorList(FilmActors.cast.slice(0, 10));
		}).catch((err) => console.error(err));

		function getActorList(list) {
			actorsEl.innerHTML = "";
			list.forEach((item) => {
				const actorsSlideEl = renderActors(item);
				actorsEl.appendChild(actorsSlideEl);
			});
		}
		const actorsEl = document.querySelector(".swiper-wrapper");

		function renderActors({
			name = "",
			character = "",
			profile_path = "",
			id = "",
		}) {
			const actorsSlideEl = document.createElement("div"),
				profile_pathEl = document.createElement("img"),
				swiperActorContainerEl = document.createElement("div"),
				swiperActorNameEl = document.createElement("p"),
				swiperHeroNameEl = document.createElement("p");
			profile_pathEl.setAttribute("src", `https://image.tmdb.org/t/p/w500/${profile_path}`);
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
				
                    urlActor.searchParams.set("actorId", actorId);
                    location.href = urlActor;
			});
			return actorsSlideEl;
		}
		document.querySelector(".header__hero-buttons-continue").addEventListener("click", () => {
			fetch(` https://api.themoviedb.org/3/movie/${movie_id}/videos?language=ru-RU`, options) // Трейлер
				.then((trailerID) => trailerID.json()).then((trailerID) => {
					let trailer = trailerID.results[0].key;
					if (trailer) {
						document.querySelector(".trailer").setAttribute("src", `https://www.youtube.com/embed/${trailer}`)
					} else {
						document.querySelector(".trailer").setAttribute("src", `https://www.youtube.com/embed/nkGlAEnkQhw?si=jI2Q09i8dJ_131Yg`)
					}
				}).catch((err) => console.error(err));
		});

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
			fetch(`https://api.themoviedb.org/3/search/movie?include_adult=false&language=ru-RU&query=${find}`, options)
				.then((searchList) => searchList.json())
				.then((searchList) => {
					sMovieList(searchList.results.slice(0, 5));
				}).catch((err) => console.error(err));
		}

		function sMovieList(search) {
			searchEl.innerHTML = "";
			search.forEach((item) => {
				const sItem = renderSearch(item);
				searchEl.appendChild(sItem);
				const filmId = sItem.getAttribute("data-id");
				sItem.addEventListener("click", () => {
					fetch(`https://api.themoviedb.org/3/movie/${filmId}?language=ru-RU`, options)
						.then((filmById) => filmById.json())
						.then((filmById) => {
							let mainFilmInfo = filmById;
							filmById.genres.slice(0, 3).forEach(({
								name
							}) => {
								document.querySelector(".hero-genre").textContent += ` ${name}  `;
							});
							document.querySelector(".hero-year").textContent += mainFilmInfo.release_date.slice(0, 4);
							document.querySelector(".hero-name").textContent = mainFilmInfo.title;
							document.querySelector(".header").style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${mainFilmInfo.backdrop_path})`;
							let storyEl = document.querySelector(".story__line");
							storyEl.textContent = mainFilmInfo.overview + " " + storyEl.textContent;
							fetch(`https://api.themoviedb.org/3/movie/${movie_id}/credits?language=ru-RU`, options).then((FilmActors) => FilmActors.json()).then((FilmActors) => {
								getActorList(FilmActors.cast.slice(0, 10));
							}).catch((err) => console.error(err));

							function getActorList(list) {
								actorsEl.innerHTML = "";
								list.forEach((item) => {
									const actorsSlideEl = renderActors(item);
									actorsEl.appendChild(actorsSlideEl);
								});
							}
						})
				});
				sItem.addEventListener("click", () => {
					const filmId = sItem.getAttribute("data-id");
					// const url = new URL("film.html", window.location.origin);
                    urlFilm.searchParams.set("id", filmId);
                    location.href = urlFilm;
				});
			});
		}



        // ACTORS SWIPER
		var swiper = new Swiper(".swiperActors", {

			spaceBetween: 30,
			breakpoints: {
				299: {
					slidesPerView: 2,
					spaceBetweenSlides: 30
				},
				999: {
					slidesPerView: 6,
					spaceBetweenSlides: 40
				}
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
				clickable: true,
			},

		});


		// SIMILAR SWIPER
		fetch(`https://api.themoviedb.org/3/movie/${movie_id}/similar?language=ru-RU&page=1`, options).then((SimilarList) => SimilarList.json()).then((SimilarList) => {
			getSimilar(SimilarList.results);
		}).catch((err) => console.error(err));

		function getSimilar(list) {
			swipeSimilarEl.innerHTML = "";
			list.forEach((item) => {
				const swiperSlideSimilarEl = renderSimilar(item);
				swipeSimilarEl.appendChild(swiperSlideSimilarEl);
			});
		}
		const swipeSimilarEl = document.querySelector(".swiperSimilar");

		function renderSimilar({
			poster_path = "",
			title = "",
			vote_average = "",
			id = "",
			genre_ids = "",
		}) {
			const swiperSlideSimilarEl = document.createElement("swiper-slide"),
				swiperMovieNameEl = document.createElement("p"),
				swiperRatingGenreEl = document.createElement("div"),
				swiperMovieRatingEl = document.createElement("p"),
				swiperNovieGenre = document.createElement("p"),
				img_SimEl = document.createElement("img");
			swiperSlideSimilarEl.className = "slide_JR";
			swiperMovieNameEl.className = "swiper_movie-name";
			swiperRatingGenreEl.className = "swiper_rating-genre";
			swiperMovieRatingEl.className = "swiper_movie-rating";
			swiperNovieGenre.className = "swiper_movie-genre";
			img_SimEl.className = "img_JR";
			swiperMovieNameEl.innerText = title;
			swiperMovieRatingEl.innerText = vote_average.toString().slice(0, 3);


			fetch('https://api.themoviedb.org/3/genre/movie/list?language=ru', options)
				.then((genreRes1) => genreRes1.json())
				.then((genreRes1) => {

					let genreList1 = genreRes1.genres
					const resultGenres = genreList1.filter(i => genre_ids.includes(i.id));

					resultGenres.slice(0, 2).forEach(({
						name
					}) => {

						swiperNovieGenre.innerText += `${name}  `
						
					});

				})


			if (poster_path) {

				img_SimEl.setAttribute("src", `https://image.tmdb.org/t/p/w500/${poster_path}`);
			} else {

				img_SimEl.setAttribute("src", '../assets/img/none.jpg');
			}

			swiperMovieNameEl.setAttribute("data-id", id);
			swipeSimilarEl.appendChild(swiperSlideSimilarEl);
			swiperSlideSimilarEl.appendChild(swiperMovieNameEl);
			swiperSlideSimilarEl.appendChild(swiperRatingGenreEl);
			swiperRatingGenreEl.appendChild(swiperMovieRatingEl);
			swiperRatingGenreEl.appendChild(swiperNovieGenre);
			swiperSlideSimilarEl.appendChild(img_SimEl);
			swiperMovieNameEl.addEventListener("click", () => {
				const filmId = swiperMovieNameEl.getAttribute("data-id");
				// const url = new URL("film.html", window.location.origin);
                    urlFilm.searchParams.set("id", filmId);
                    location.href = urlFilm;
			});
			return swiperSlideSimilarEl;
		}
		const swiperMain = document.querySelector("swiper-container");
		const params = {
			injectStyles: [`
         .swiper-pagination-bullet {
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
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
				clickable: true,
			},
		};
		Object.assign(swiperMain, params);
		swiperMain.initialize();
		const myModal = new HystModal({
			linkAttributeName: "data-hystmodal2",
			catchFocus: true,
			waitTransitions: true,
			closeOnEsc: false,
			beforeOpen: function(modal) {},
			afterClose: function(modal) {
				document.querySelector(".trailer").setAttribute("src", "");
			},
		});
	});


	

	const glightbox2 = GLightbox({
		navigation:  true,
		openEffect: 'bounce', // Define that we want the bounce animation on open
		closeEffect: 'zoom',
  cssEfects: {
    // register our new animation
    bounce: { in: 'bounceIn', out: 'bounceOut' }
  }
	});
	
	
// footer
footer()
// ПОГОДА ))
getWeather()
//КУРС ВАЛЮТ))
getCurrency()