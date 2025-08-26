document.getElementById('helloBtn').addEventListener('click', function() {
  const spinner = document.getElementById('spinner');
  spinner.classList.remove('d-none');
  setTimeout(() => {
    spinner.classList.add('d-none');
    alert('Hello, World!');
  }, 1200);
});
