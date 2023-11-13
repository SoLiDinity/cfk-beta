import '../styles/main.css';
import '../styles/responsive.css';
import DataSource from './data/data-source';
import renderList from './render-list';

const hamburgerButton = document.querySelector('#hamburger');
const drawerNavigation = document.querySelector('#drawer');

hamburgerButton.addEventListener('click', (e) => {
  e.stopPropagation();
  drawerNavigation.classList.add('active');
});

document.body.addEventListener('click', (e) => {
  e.stopPropagation();
  drawerNavigation.classList.remove('active');
  setTimeout;
});

drawerNavigation.addEventListener('click', (e) => {
  e.stopPropagation();
  drawerNavigation.classList.remove('active');
});

const userData = await DataSource.allDocuments();
// console.log(userData);

const searchInput = document.getElementById('search');
searchInput.addEventListener('input', () => {
  userData.forEach((data) => {
    if (data.id == searchInput.value) {
      const dataListContainer = document.querySelector('#dataListContainer');
      dataListContainer.innerHTML += renderList(data);

      const orderStatus = document.querySelector('.order-progress');
      const paymentStatus = document.querySelector('.payment-status');
      if (data.status == 'done') {
        orderStatus.style.backgroundColor = '#37cd2a';
      } else {
        orderStatus.style.backgroundColor = '#febb15';
      }

      if (data.paymentStatus == 'done') {
        paymentStatus.style.backgroundColor = '#37cd2a';
      } else {
        paymentStatus.style.backgroundColor = '#febb15';
      }

      const searchEmptyState = document.getElementById('searchEmptyState');
      if (!searchEmptyState.classList.contains('hide')) {
        searchEmptyState.classList.add('hide');
      }
    } else {
      const currentDataListCard = document.getElementById(`${data.id}`);
      if (currentDataListCard) {
        currentDataListCard.remove();
      }

      if (currentDataListCard) {
        const searchEmptyState = document.getElementById('searchEmptyState');
        if (searchEmptyState.classList.contains('hide')) {
          searchEmptyState.classList.remove('hide');
        }
      }
    }
  });
});

const themeButton = document.querySelector('#themeButton');
themeButton.addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();

  const currentBody = document.body;
  const nightDayThemeIcon = document.querySelector('#nightDayIcon');
  const currentTheme = currentBody.getAttribute('data-theme');
  let themeValue;

  if (currentTheme == '') {
    themeValue = 'dark';
    currentBody.setAttribute('data-theme', themeValue);
    nightDayThemeIcon.classList.remove('fa-moon');
    nightDayThemeIcon.classList.add('fa-sun');
  }

  if (currentTheme == 'light') {
    themeValue = 'dark';
    currentBody.setAttribute('data-theme', themeValue);
    nightDayThemeIcon.classList.remove('fa-moon');
    nightDayThemeIcon.classList.add('fa-sun');
  }

  if (currentTheme == 'dark') {
    themeValue = 'light';
    currentBody.setAttribute('data-theme', themeValue);
    nightDayThemeIcon.classList.remove('fa-sun');
    nightDayThemeIcon.classList.add('fa-moon');
  }
});
