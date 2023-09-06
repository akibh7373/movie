import Header from '@/components/Header';
import MovieCard from '@/components/MovieCard';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
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
      <Header />
      <Hero />
      <div className="md:columns-5 sm:columns-3 columns-2 m-5">
        {popularMovies.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Footer />
    </>
  );
}
