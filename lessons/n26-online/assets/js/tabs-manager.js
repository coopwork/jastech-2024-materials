export function tabsManagement(event) {
  const parentElement = event.target.closest('.tab__bar');
  const tabButtons = parentElement.querySelectorAll('.tab__btn[data-tab]');
  const tabsContents = parentElement.querySelectorAll('.tab__inner[data-tab]');
  const element = event.target;
  
  const isTabButton = element.classList.contains('tab__btn') || element.closest('.tab__btn');

  if (isTabButton) {
    const currentTabButton = element.closest('.tab__btn');
    const tabId = currentTabButton.getAttribute('data-tab');

    tabButtons.forEach(tabButton => {
      const buttonId = tabButton.getAttribute('data-tab');
      if (buttonId === tabId) {
        currentTabButton.classList.add('active')
      } else {
        tabButton.classList.remove('active')
      }
    });

    tabsContents.forEach(tabContent => {
      const contentId = tabContent.getAttribute('data-tab');
      if (contentId === tabId) {
        tabContent.classList.add('active');
      } else {
        tabContent.classList.remove('active');
      }
    });

  }
  
}