import React, { useState, useEffect } from "react";
import "./Result.css";
import Videocard from "../videocard/Videocard";
import axios from "../../constant/axios";
import FlipMove from "react-flip-move";

function Result({ selectedOption }) {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(selectedOption);
            console.log(request);
            setMovies(request.data.results);

            setIsLoading(false);
            return request;
        };

        fetchData();
        return () => {
            // clearInterval(interval);
        };
    }, [selectedOption]);
    return (
        <div className="result">
            <FlipMove>
                {isLoading ? (
                    <h1 style={{ color: "white" }}>Loading....</h1>
                ) : (
                    movies.map((movie) => (
                        <Videocard
                            movie={movie}
                            key={movie.id}
                            isLoading={isLoading}
                        />
                    ))
                )}
            </FlipMove>
        </div>
    );
}

export default Result;
