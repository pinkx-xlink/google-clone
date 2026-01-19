const search = document.getElementById("search-bar").value;
document.getElementById("search-bar").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    searchGoogle();
  }
});

function searchGoogle() {
  const query = document.getElementById("search-bar").value;

  // check if input is empty

  if (!query) {
    alert("Please enter a search term.");
    return;
  }

  const searchParams = new URLSearchParams({ q: query });
  const queryString = searchParams.toString();

  const googleSearchUrl = `https://www.google.com/search?${queryString}&tbm=isch`;
  window.open(googleSearchUrl, "_blank");
}
