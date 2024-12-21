import { tabsManagement } from './tabs-manager.js';

const tabBars = document.querySelectorAll('.tab__bar');

tabBars.forEach(tabBar => {
  tabBar.addEventListener('click', tabsManagement)
});
