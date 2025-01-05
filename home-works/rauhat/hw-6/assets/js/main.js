// const folderTree = {
//   name: "root",
//   children: [
//     {
//       name: "folder1",
//       children: [
//         { name: "file1.txt", children: [] },
//         { name: "file2.txt", children: [] },
//       ],
//     },
//     {
//       name: "folder2",
//       children: [
//         { name: "folder3", children: [{ name: "file3.txt", children: [] }] },
//       ],
//     },
//   ],
// };

// const api = [
//   {
//     name: {
//       firstName: "FirstName",
//       //   lastName: "LastName",
//     },
//     photos: [
//       {
//         url: "sesfse",
//         tags: [
//           {
//             label: "photo",
//             id: 123,
//           },
//           {
//             label: "summer",
//             id: 111,
//           },
//         ],
//       },
//       {
//         url: "gesfef",
//         tags: [
//           {
//             label: "winter",
//             id: 1323,
//           },
//           {
//             label: "italy",
//             id: 1121,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: {
//       firstName: "FirstName 2",
//       lastName: "LastName 2",
//     },
//     photos: [
//       {
//         url: "gewsgew",
//         tags: [
//           {
//             label: "photo 2",
//             id: 1232,
//           },
//           {
//             label: "summer 2",
//             id: 1112,
//           },
//         ],
//       },
//       {
//         url: "gwer",
//         tags: [
//           {
//             label: "winter",
//             id: 1323,
//           },
//           {
//             label: "italy",
//             id: 1121,
//           },
//         ],
//       },
//     ],
//   },
// ];

// const apiRes = {
//   adult: false,
//   backdrop_path: "/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg",
//   belongs_to_collection: {
//     id: 558216,
//     name: "Venom Collection",
//     poster_path: "/4bXIKqdZIjR8wKgZaGDaLhLj4yF.jpg",
//     backdrop_path: "/vq340s8DxA5Q209FT8PHA6CXYOx.jpg",
//   },
//   budget: 120000000,
//   genres: [
//     {
//       id: 28,
//       name: "Action",
//     },
//     {
//       id: 878,
//       name: "Science Fiction",
//     },
//     {
//       id: 12,
//       name: "Adventure",
//     },
//   ],
//   homepage: "https://venom.movie",
//   id: 912649,
//   imdb_id: "tt16366836",
//   origin_country: ["US"],
//   original_language: "en",
//   original_title: "Venom: The Last Dance",
//   overview:
//     "Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie's last dance.",
//   popularity: 12656.263,
//   poster_path: "/aosm8NMQ3UyoBVpSxyimorCQykC.jpg",
//   production_companies: [
//     {
//       id: 5,
//       logo_path: "/71BqEFAF4V3qjjMPCpLuyJFB9A.png",
//       name: "Columbia Pictures",
//       origin_country: "US",
//     },
//     {
//       id: 84041,
//       logo_path: "/nw4kyc29QRpNtFbdsBHkRSFavvt.png",
//       name: "Pascal Pictures",
//       origin_country: "US",
//     },
//     {
//       id: 53462,
//       logo_path: "/nx8B3Phlcse02w86RW4CJqzCnfL.png",
//       name: "Matt Tolmach Productions",
//       origin_country: "US",
//     },
//     {
//       id: 91797,
//       logo_path: null,
//       name: "Hutch Parker Entertainment",
//       origin_country: "US",
//     },
//     {
//       id: 14439,
//       logo_path: null,
//       name: "Arad Productions",
//       origin_country: "US",
//     },
//   ],
//   production_countries: [
//     {
//       iso_3166_1: "US",
//       name: "United States of America",
//     },
//   ],
//   release_date: "2024-10-22",
//   revenue: 468513700,
//   runtime: 109,
//   spoken_languages: [
//     {
//       english_name: "English",
//       iso_639_1: "en",
//       name: "English",
//     },
//   ],
//   status: "Released",
//   tagline: "'Til death do they part.",
//   title: "Venom: The Last Dance",
//   video: false,
//   vote_average: 6.6,
//   vote_count: 1109,
// };

// const res = {
//   name: "Damir",
//   address: {
//     street: "Street",
//     numberStreet: "24",
//   },
//   hobbies: ["javascript, gtml, css"],
//   webSites: {
//     pages: ["page1", "page2", "page3"],
//     options: [
//       {
//         themes: ["dark", "light"],
//       },
//       {
//         works: ["music", "programming"],
//       },
//     ],
//   },
// };

// // console.log(apiRes.genres);

// console.log(api);

// api.forEach(({ name, photos }) => {
//   console.log(photos);
//   render(document.body, `${name?.firstName || ""} ${name?.lastName || ""}`);

//   photos.forEach(({ url, tags }) => {
//     render(document.body, `https://google.com/${url}`);

//     tags.forEach(({ label, id }) => {
//       render(document.body, `${id}: ${label}`);
//     });
//   });
// });

// function render(parrent, text) {
//   const div = document.createElement("div");

//   div.textContent = text;

//   parrent.appendChild(div);
// }

// console.log(folderTree);
// function renderThree(node) {
//   const ul = document.createElement("ul");
//   const li = document.createElement("li");

//   li.textContent = node.name;
//   ul.appendChild(li);

//   if (node.children && node.children.length > 0) {
//     const childUl = document.createElement("ul");
//     node.children.forEach((child) => {
//       childUl.appendChild(renderThree(child));
//     });
//   }

//   return ul;
// }

// const folders = renderThree(folderTree);
// console.log(folders);

// document.body.appendChild(folders);

// const myArr = [5, 5, 5, 5, 5];

// function arrSum(arr) {
//   if (arr.length === 0) {
//     return 0;
//   }

//   return arr[0] + arrSum(arr.slice(1));
// }

// const resultSummArr = arrSum(myArr);
// console.log(resultSummArr);

// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }

// const resultFactorial = factorial(8);

// console.log(resultFactorial);
function speakText() {
  const textInput = document.getElementById("textInput");
  const text = textInput.value;

  textInput.value = "";

  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "ru";
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}
