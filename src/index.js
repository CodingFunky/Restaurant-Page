import './style.css';
import { makeHome } from "./Home";
import { drawMenu } from "./menu";
import { drawContact } from "./contact";

const content = document.getElementById('content')
const homeTab = document.querySelector('#home-tab');
const menuTab = document.querySelector('#menu-tab');
const contactTab = document.querySelector('#contact-tab')

let activeTab = homeTab;

makeHome(homeTab)

homeTab.addEventListener('click', (e) => {

  if (activeTab != e.target) {
    let target = e.target;
    while (content.firstChild) {
      content.removeChild(content.firstChild);
      // switch active class
      activeTab.classList.remove('active')
      activeTab.classList.add('not-active')
      target.classList.add('active')
      target.classList.remove('not-active')
      activeTab = homeTab;
  }
    makeHome(e.target)
  }
})
menuTab.addEventListener('click', (e) => {
  let target = e.target;
  if (activeTab != e.target) {
      while (content.firstChild) {
          content.removeChild(content.firstChild);
          // switch active class
          activeTab.classList.remove('active')
          activeTab.classList.add('not-active')
          target.classList.add('active')
          target.classList.remove('not-active')
          activeTab = menuTab
    }
      drawMenu(e.target);
  }else {
      return
  }
})
contactTab.addEventListener('click', (e) => {
  let target = e.target;
  if (activeTab != e.target) {
      while (content.firstChild) {
          content.removeChild(content.firstChild)
          // switch active class
          activeTab.classList.remove('active')
          activeTab.classList.add('not-active')
          e.target.classList.add('active')
          e.target.classList.remove('not-active')
          activeTab = contactTab
      }
      drawContact();
  }else {
      return
  }
})