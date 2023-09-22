import Link from 'next/link';
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
      <div className='movieSection px-5'>
        <div className='flex justify-between items-center lg:py-3'>
          <h2 className='d-inline uppercase lg:text-3xl md:text-xl text-lg font-bold text-white'>popular</h2>
          <Link href='' className='d-inline-block uppercase text-white'>view all</Link>
        </div>
        <div className="md:columns-4 sm:columns-3 columns-2 my-5 ">
          {popularMovies.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
