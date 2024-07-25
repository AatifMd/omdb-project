document.addEventListener('DOMContentLoaded', () => {
    const API_key = "79deef0e";
    const movieDetail = document.getElementById('movie-details');
    backBtn = document.getElementById('back-button');

    const movieID = localStorage.getItem('selectedMovie');   //get imdb id from the local storage to show the details of the movie 

    if(movieID){
        fetch(`https://www.omdbapi.com/?apikey=${API_key}&i=${movieID}`)
        .then(response => response.json())
        .then(movie => {

            const movieDetailItem = document.createElement('div'); // create elemetnt to display the data
            movieDetailItem.classList.add('detail-item');

            const poster = document.createElement('img');
            poster.src = movie.Poster;
            poster.alt = 'Movie Poster';

            const title = document.createElement('h2');
            title.textContent = movie.Title;

            const year = document.createElement('p');
            year.textContent = `Year: ${movie.Year}`;

            const genre = document.createElement('p');
            genre.textContent = `Genre: ${movie.Genre}`;

            const actors = document.createElement('p');
            actors.textContent = `Actors: ${movie.Actors}`;

            const plot = document.createElement('p');
            plot.textContent = `Plot: ${movie.Plot}`;

            movieDetail.appendChild(movieDetailItem);
            movieDetailItem.appendChild(poster);
            movieDetailItem.appendChild(title);
            movieDetailItem.appendChild(year);
            movieDetailItem.appendChild(genre);
            movieDetailItem.appendChild(actors);
            movieDetailItem.appendChild(plot);
        })
        .catch(error => {
            movieDetail.textContent='An error occurred. Please try again later.'
        })
    }
    backBtn.addEventListener('click', function(){
        window.location.href='index.html';
    })
})
