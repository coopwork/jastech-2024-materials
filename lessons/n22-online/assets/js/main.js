

const div = document.querySelector('.scrollMe');
const btn = document.querySelector('.handleScroll');

document.addEventListener('scroll', (e)=>{
  // console.log(window.scrollY);


  
})

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}


btn.addEventListener('click', ()=>{
  div.scrollIntoView({
    behavior: 'smooth'
  });


  console.log(getCookie('_ga'));
  

  // document.cookie = 'user=myUserName; max-age=5; secure'

  sessionStorage.setItem('test', 'i work')

  localStorage.setItem('meta', 'myMeta')
  localStorage.removeItem('name');
  localStorage.clear();
})

if (!div) {
  window.scrollTo({
    behavior: 'smooth',
    top: 250
  })
}

console.log(localStorage.getItem('name'));


console.log(document.cookie);


console.log(sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer'));



fetch('/dwadaw', {
  method: "GET",
  headers: {
    "Authorization": "awdwadawdaw"
  },
  withCredentials: true
});