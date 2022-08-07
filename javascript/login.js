const form = document.querySelector('.login form'),
  continueBtn = form.querySelector('.button input'),
  errorText = form.querySelector('.error-text');

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

continueBtn.onclick = () => {
  let formData = new FormData(form);

  fetch('php/login.php', { method: 'POST', body: formData })
    .then((response) => response.text())
    .then((data) => {
      if (data === 'success') {
        location.href = 'users.php';
      } else {
        errorTxt.textContent = data;
        errorTxt.style.display = 'block';
      }
    });
};
