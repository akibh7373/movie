import Image from 'next/image';

const MovieCard = ({ movie }) => {
  return (
    <>
      <div className="movieCard max-w-sm rounded overflow-hidden mb-5 p-3 rounded-2xl" style={{ position: 'relative' }}>
        <div className="w-full sm:h-[400px] h-[250px] relative rounded-2xl">
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
            alt={movie?.title}
            className='h-full rounded-2xl'
            fill={true}
            objectFit="cover"
          />
        </div>
        <div className="lg:block hidden px-6 pt-3">
          <div className="font-bold text-xl mb-2 text-white">{movie?.title}</div>
          {/* <p className="text-gray-700 text-base">
            <strong>Release Date:</strong> {movie?.release_date}
          </p>
          <p className="text-gray-700 text-base">
            <strong>Original Title:</strong> {movie?.original_title}
          </p>
          <p className="text-gray-700 text-base">
            <strong>Overview:</strong> {movie?.overview}
          </p>
          <p className="text-gray-700 text-base">
            <strong>Popularity:</strong> {movie?.popularity}
          </p> */}
          <p className="flex justify-start items-center text-white text-base">
            <Image src='/imdb.png' className='mr-2' alt='imdb' width={40} height={20} />  {movie?.vote_average}
          </p>
          {/* <p className="text-gray-700 text-base">
            <strong>Adult:</strong> {movie?.adult ? 'Yes' : 'No'}
          </p>
          <p className="text-gray-700 text-base">
            <strong>Original Language:</strong> {movie?.original_language}
          </p>
          <p className="text-gray-700 text-base">
            <strong>Genre IDs:</strong> {movie?.genre_ids.join(', ')}
          </p>
          <p className="text-gray-700 text-base">
            <strong>Video:</strong> {movie?.video ? 'Yes' : 'No'}
          </p>
          <p className="text-base text-white">
            <strong>Vote Count:</strong> {movie?.vote_count}
          </p> */}
        </div>
      </div>
    </>
  );
};

export default MovieCard;
