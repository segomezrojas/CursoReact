const cors_anywhere = 'https://cors-anywhere.herokuapp.com/';
const base_url = 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/';
const chart_movies_get ='search/';
const chart_detail_film_get ='film/';
//const api_host='?x-rapidapi-host=imdb-internet-movie-database-unofficial.p.rapidapi.com'
const api_key = '?rapidapi-key=a853042b4bmshc94401ba93bd48cp15d41ejsnbaa516ce5423';


export const movieSearch = q_movie_name => `${ base_url }${ chart_movies_get }${ q_movie_name }${ api_key }`;
export const chartMoviesGet = id => `${ base_url }${ chart_detail_film_get }${ id }${ api_key }`;
