const searchBar = document.querySelector('.search input'),
  searchIcon = document.querySelector('.search button'),
  usersList = document.querySelector('.users-list');

searchIcon.onclick = () => {
  searchBar.classList.toggle('show');
  searchIcon.classList.toggle('active');
  searchBar.focus();

  if (searchBar.classList.contains('active')) {
    searchBar.value = '';
    searchBar.classList.remove('active');
  }
};

searchBar.onkeyup = () => {
  let searchTerm = searchBar.value;
  if (searchTerm != '') {
    searchBar.classList.add('active');
  } else {
    searchBar.classList.remove('active');
  }

  fetch('php/search.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `searchTerm=${searchValue}`,
  })
    .then((response) => response.text())
    .then((data) => {
      usersList.innerHTML = data;
    });
};

setInterval(() => {
  fetch('php/users.php')
    .then((response) => response.text())
    .then((data) => {
      if (!searchBar.classList.contains('active')) {
        usersList.innerHTML = data;
      }
    });
}, 1000);
