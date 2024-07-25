
document.addEventListener('DOMContentLoaded', function() {
const API_key = "79deef0e"
const searchBtn = document.getElementById('search-button');
const movieListDiv = document.getElementById('movie-list');
const errorMessage = document.getElementById('error-message');

searchBtn.addEventListener('click',function(){
    const title = document.getElementById('input-title').value;
    movieListDiv.innerHTML = '';
    errorMessage.style.display = 'none';

    fetch(`https://www.omdbapi.com/?apikey=${API_key}&s=${title}`)
    .then(response => response.json())
    .then(data => {

        if (data.Response === 'False') {           // if movie not found 
            errorMessage.style.display = 'block';
        } else {
        data.Search.forEach(movie=> {                      //create UI for displaing the list of movies
            const movieItem = document.createElement('div');
            movieItem.classList.add('movie-item');
                
            const poster = document.createElement('img');
            poster.src = movie.Poster;
            poster.alt = 'Movie Poster';
                
            const title = document.createElement('p');
            title.textContent = movie.Title;

            const detail = document.createElement('button')
            detail.textContent = 'Detail'

            detail.addEventListener('click', ()=>{
                localStorage.setItem('selectedMovie', movie.imdbID); // store the imdb id in the local storage on the basis we will dispaly the full details about the movie
                window.location.href = 'movieDetail.html';
            })
                
            movieItem.appendChild(poster);
            movieItem.appendChild(title);
            movieItem.appendChild(detail)
            movieListDiv.appendChild(movieItem);
        });
        }
    })
    .catch(error => {                     //catch error message for handling error
        errorMessage.textContent = 'An error occurred. Please try again later.';
        errorMessage.style.display = 'block';
      });
})
})