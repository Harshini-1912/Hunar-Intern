document.addEventListener("DOMContentLoaded", () => {
  fetch("data.json")
    .then(res => res.json())
    .then(data => {
      const movieList = document.getElementById("movie-list");

      data.movies.forEach(movie => {
        const div = document.createElement("div");
        div.className = "movie";
        div.innerHTML = `
          <img src="${movie.thumbnail}" alt="${movie.title}">
          <h3>${movie.title}</h3>
        `;

        div.addEventListener("click", () => {
          document.getElementById("detail-title").textContent = movie.title;
          document.getElementById("detail-desc").textContent = movie.description;
          document.getElementById("video-player").src = movie.video;
          document.getElementById("movie-detail").classList.remove("hidden");
        });

        movieList.appendChild(div);
      });

      document.getElementById("close-btn").addEventListener("click", () => {
        document.getElementById("movie-detail").classList.add("hidden");
        document.getElementById("video-player").pause();
      });
    })
    .catch(err => console.error("Failed to load movie data", err));
});