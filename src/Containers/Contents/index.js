import React from "react";
import MovieRow from "./MuvieRow";
const movies = [
    "https://image.tmdb.org/t/p/original//f2PVrphK0u81ES256lw3oAZuF3x.jpg",
    "https://image.tmdb.org/t/p/original//ekZobS8isE6mA53RAiGDG93hBxL.jpg",
    "https://image.tmdb.org/t/p/original//a91e9hpWwfCqxJI4xM9Q2RhuxgI.jpg",
    "https://image.tmdb.org/t/p/original//1xeiUxShzNn8TNdMqy3Hvo9o2R.jpg",
    "https://image.tmdb.org/t/p/original//49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    "https://image.tmdb.org/t/p/original//m7tG5E1EbywuwTsl6hq990So0Bx.jpg",
    "https://image.tmdb.org/t/p/original//hqmDLY8BSuHmldBuuUwNNt8L45G.jpg",
    "https://image.tmdb.org/t/p/original//AqcHMbvN4lkYUXKNalOxOFe025K.jpg",
    "https://image.tmdb.org/t/p/original//q54qEgagGOYCq5D1903eBVMNkbo.jpg",
    "https://image.tmdb.org/t/p/original//6zUUtzj7aJzOdoxhpiGzEKYtj1o.jpg",
    "https://image.tmdb.org/t/p/original//fLP0mA7FiERZhDP1NJUaHpm6XM8.jpg",
    "https://image.tmdb.org/t/p/original//AninoKw9HranR7ioImNYYA8dMu3.jpg",
    "https://image.tmdb.org/t/p/original//3NTAbAiao4JLzFQw6YxP1YZppM8.jpg",
    "https://image.tmdb.org/t/p/original//6RrseODZo2e66XOzC1XMzMuecnf.jpg",
    "https://image.tmdb.org/t/p/original//dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
    "https://image.tmdb.org/t/p/original//8j12tohv1NBZNmpU93f47sAKBbw.jpg",
    "https://image.tmdb.org/t/p/original//reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
    "https://image.tmdb.org/t/p/original//dNiI4TdbTb9Mc8ACKQnW9gHCxGZ.jpg",
    "https://image.tmdb.org/t/p/original//fjAAxDPzllwnCMqHDXYlw4IlkaL.jpg",
    "https://image.tmdb.org/t/p/original//dspwDOosidQT85oPDDHMM9zmaLw.jpg"
]
const Contents = () => {
    return(
        <>
            <MovieRow movies={movies} title="Netfix Originals" isNetfFix={true}/>
            <MovieRow movies={movies} title="Trending Movies"/>
            <MovieRow movies={movies} title="Top Rated Movies"/>
            <MovieRow movies={movies} title="Action Movies"/>
            <MovieRow movies={movies} title="Comedy Movies"/>
            <MovieRow movies={movies} title="Horror Movies"/>
            <MovieRow movies={movies} title="Romance Movies"/>
            <MovieRow movies={movies} title="Documentaries"/>
        </>
    )
}
export default Contents