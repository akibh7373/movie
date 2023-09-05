import Image from 'next/image';

const MovieCard = ({ movie }) => {
  return (
    <>
      <div className="max-w-sm rounded border-2 border-blue-300 overflow-hidden mb-5">
        <div className="w-full h-[400px] relative">
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
            alt={movie?.title}
            fill={true}
            objectFit="cover"
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{movie?.title}</div>
          <p className="text-gray-700 text-base">
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
          </p>
          <p className="text-gray-700 text-base">
            <strong>Vote Average:</strong> {movie?.vote_average}
          </p>
          <p className="text-gray-700 text-base">
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
          <p className="text-gray-700 text-base">
            <strong>Vote Count:</strong> {movie?.vote_count}
          </p>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
