const search = document.getElementById('search-bar').value;
document.getElementById('search-bar').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    // e.preventDefault();
    console.log('key pressed')
    window.location.href = `https://www.google.com/search?q=${search}&tbm=isch`;
    }
})