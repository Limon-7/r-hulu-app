import React, { forwardRef } from "react";
import "./Videocard.css";
import TextTruncate from "react-text-truncate";
import { ThumbUpSharp } from "@material-ui/icons";
import StarIcon from "@material-ui/icons/Star";

const base_url = "https://image.tmdb.org/t/p/original/";

const Videocard = forwardRef(({ movie }, ref) => {
    return (
        <div className="videocard" ref={ref}>
            <img
                src={
                    `${base_url}${movie.backdrop_path}` ||
                    `${base_url}${movie.poster_path}`
                }
                alt={movie.title}
            />
            <TextTruncate
                line={1}
                element="p"
                truncateText={"[more...]"}
                text={movie.overview}
            />
            <h2>{movie.title}</h2>
            <p className="videocard__status">
                {movie.release_date} .
                <ThumbUpSharp />
                {movie.vote_count} <StarIcon />
                {movie.vote_average}
            </p>
        </div>
    );
});

export default Videocard;
