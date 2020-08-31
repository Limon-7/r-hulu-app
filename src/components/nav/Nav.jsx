import React from "react";
import "./Nav.css";

import requests from "../../constant/requests";

function Nav({ setSelectedOption }) {
    console.log("Render one time");
    return (
        <div className="nav">
            <h2 className="nav__trending">Trending</h2>
            <h2
                className="nav__top-rated"
                onClick={() => setSelectedOption(requests.fetchTrending)}
            >
                Top Rated
            </h2>
            <h2 onClick={() => setSelectedOption(requests.fetchActionMovies)}>
                Action
            </h2>
            <h2 onClick={() => setSelectedOption(requests.fetchComedyMovies)}>
                Comedy
            </h2>
            <h2 onClick={() => setSelectedOption(requests.fetchHorrorMovies)}>
                Horror
            </h2>
            <h2 onClick={() => setSelectedOption(requests.fetchRomanceMovies)}>
                Romance
            </h2>
            <h2 onClick={() => setSelectedOption(requests.fetchMystrey)}>
                Mystry
            </h2>
            <h2
                className="nav__sci-fi"
                onClick={() => setSelectedOption(requests.fetchSciFi)}
            >
                Sci-fi
            </h2>
            <h2>Western</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchAnimation)}>
                Animation
            </h2>
            <h2 onClick={() => setSelectedOption(requests.fetchTv)}>
                Tv Movie
            </h2>
        </div>
    );
}

export default Nav;
