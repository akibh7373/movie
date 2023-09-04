async function getMovies(type) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${type}?api_key=${process.env.API_KEY}&language=en-US`
  );
  return res.json();
}

export default async function Home() {
  const popularMovies = await getMovies('popular');
  return (
    <>
      <h2>Hello</h2>
    </>
  );
}
