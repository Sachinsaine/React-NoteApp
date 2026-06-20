export const MovieCard = ({ movielist }) => {
  return (
    <div>
      {movielist.map((movie) => {
        return (
          <div>
            <div>Title: {movie.title}</div>
            <div>Genre: {movie.genre}</div>
            <div>Rating: {movie.rating}</div>
            <div
              style={{
                backgroundColor:
                  movie.rating >= 8
                    ? "lightgreen"
                    : movie.rating >= 6
                      ? "yellow"
                      : movie.rating < 6
                        ? "red"
                        : "",
                fontWeight: "bold",
                color: "black",
              }}
            >
              Recommendation:{" "}
              {movie.rating >= 8
                ? " ⭐ Recommended"
                : movie.rating >= 6
                  ? "👍 Good"
                  : movie.rating < 6
                    ? "👎 Skip"
                    : ""}{" "}
            </div>
          </div>
        );
      })}
    </div>
  );
};
