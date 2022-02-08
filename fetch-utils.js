const SUPABASE_URL = 'https://gmpyleofggphhfqygglb.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtcHlsZW9mZ2dwaGhmcXlnZ2xiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzNDE0NTEsImV4cCI6MTk1OTkxNzQ1MX0.aAoG-W_B2pk78Kdb54K8sM3SQbO0g1kbGUOtqvvQhXA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

function checkError({ data, error }) {
  return error ? console.error(error) : data;
}

export async function getMovies() {
  // return the list of all movies
  const resp = await client.from("movies").select("*");
  return checkError(resp);
}

export async function getMoviesWithDirector() {
  // return the list of all the movies with their director
  const resp = await client.from("movies").select("*");
  const movieInfo = await client.from("directors").select("name");
  return checkError(resp, movieInfo);
}

export async function getDirectorNames() {
  // return the list of the director's names
  const director = await client.from("directors").select("name");
  return checkError(director);
}

export async function getMovieById(id) {
  // return the movie with the given id
  //const resp = await client.from("movies").select("id");
  //return checkError(resp.id);
}

export async function getMovieByTitle(title) {
  // return the movie with the given title
  const movieTitle = await client.from("movies").select("title");
  return checkError(movieTitle);
}

export async function getOldestMovie() {
  // return the oldest movie (assume the database is not sorted)
}

export async function getMoviesAfter(year) {
  // return movies made after the year passed in
}

export async function getHighestGrossingMovie() {
  // return movie with the highest box office total
}
