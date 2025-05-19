function animateCounter(element, start, end, duration) {
  let startTime = null;
  
  function updateCounter(currentTime) {
    if (!startTime) startTime = currentTime;
    const progress = Math.min((currentTime - startTime) / duration, 1);
    element.textContent = Math.floor(progress * (end - start) + start);

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    }
  }
  
  requestAnimationFrame(updateCounter);
}

function startCounting(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      let counter = entry.target;
      let endValue = parseInt(counter.textContent, 10);
      animateCounter(counter, 0, endValue, 2000);
      // observer.unobserve(counter); // 
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  let observer = new IntersectionObserver(startCounting, { threshold: 0.5 });
  document.querySelectorAll(".quantity__number").forEach(counter => {
    observer.observe(counter);
  });
});
