import {	getWeather,	getCurrency, footer} from './footer.js';
import {	getActor, options} from './movieAPI.js';
// SEARCH CODE

const search_actorEl = document.querySelector("#find_cont");

function renderSearch({
	name = "",
	id = '',
}) {
	const sItem = document.createElement("div");
	const sResultEl = document.createElement("p");
	sResultEl.className = "s_result";
	sResultEl.innerText = name;
	sItem.appendChild(sResultEl);
	sItem.setAttribute("data-actor_id", id);
	return sItem;
}
const input = document.querySelector("#find");
input.addEventListener("input", updateValue);

function updateValue(e) {
	let findActor = e.target.value;
	fetch(`https://api.themoviedb.org/3/search/person?query=${findActor}&include_adult=false&language=ru-RU&page=1`, options)
		.then((searchActorRes) => searchActorRes
			.json()).then((searchActorRes) => {
			sActorsList(searchActorRes.results.slice(0, 5));
		})

	function sActorsList(search) {
		search_actorEl.innerHTML = "";
		search.forEach((item) => {
			const sItem = renderSearch(item);
			search_actorEl.appendChild(sItem);
			sItem.addEventListener("click", () => {
				let actorId = sItem.getAttribute('data-actor_id')
				fetch(`https://api.themoviedb.org/3/person/${actorId}?language=ru-RU`, options)
					.then((actor) => actor.json())
					.then((actor) => {
						if (actor.biography) {
							document.querySelector(".biography").textContent = actor.biography;
							document.querySelector(".actor-name").textContent = actor.name;
							document.querySelector(".actor_img").setAttribute("src", `https://image.tmdb.org/t/p/w500/${actor.profile_path}`);
						} else {
							fetch(`https://api.themoviedb.org/3/person/${actorId}?language=us-EN`, options)
								.then((actorEn) => actorEn.json())
								.then((actorEn) => {
									document.querySelector(".biography").textContent = actorEn.biography;
									document.querySelector(".actor-name").textContent = actor.name;
									document.querySelector(".actor_img").setAttribute("src", `https://image.tmdb.org/t/p/w500/${actor.profile_path}`);
								})
						}
						search_actorEl.innerHTML = ""
						input.value = "";
						searchForm.classList.remove("search-container-show");
						searchForm.classList.add("search-container-hide");
					})
			});
		});
	}
}
//ПОЛУЧИТЬ ИНФОРМАЦИЮ ОБ АКТЕРЕ
getActor()
// ФУТЕР
footer()
// ПОГОДА ))
getWeather()
//КУРС ВАЛЮТ))
getCurrency()