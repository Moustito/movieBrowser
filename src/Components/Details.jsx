import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ShowMoreText from 'react-show-more-text';
import axios from 'axios';
import '../Styles/Spotlight.css';
import star from '../assets/images/icons/Star-Details.png';
import clock from '../assets/images/icons/Clock-Details.png';

export default function Spotlight({ Id }) {
  //State
  const [data, setData] = useState([]);
  const url =
    'https://api.themoviedb.org/3/movie/' +
    Id +
    '?api_key=de254949dc1b811372f9de427feafa91&language=fr-FR';

  //Comportements
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const result = await response?.data;

        setData(result);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  //Render
  return (
    <div className="pb-14 text-white">
      <Link to="/">Retour</Link>
      <img
        className="block"
        src={`http://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
        alt={`poster ${data.name}${data.title}`}
      />
      <section className="pl-6 pt-6">
        <div>
          <p className="font-medium text-2xl leading-7 tracking-tight mb-2">
            {data.name}
            {data.title}
          </p>
          <div className="flex">
            <img
              className="place-self-center pr-1.5"
              src={clock}
              alt="runtime icons"
            />
            <p className="mr-3">{data.runtime} minutes</p>
            <img
              className="h-3 place-self-center pr-1.5"
              src={star}
              alt="vote average icons"
            />
            <p>{data.vote_average} (IMDb)</p>
          </div>
        </div>
        <hr className="my-4" />
        <div className="flex">
          <div className="mr-12">
            <p className="font-medium text-base leading-7 tracking-tight">
              Release date
            </p>
            <p className="text-gray-400">{data.release_date}</p>
          </div>
          <div>
            <p className="font-medium text-base leading-7 tracking-tight">
              Genre
            </p>
            {/* {data.genres.map((genre) => {
              <p key={genre.id}>genre</p>;
            })} */}
          </div>
        </div>
        <hr className="my-4" />
        <div>
          <p>Synopsis</p>
          <ShowMoreText
            className="text-gray-400"
            lines={3}
            more="Show more"
            less="Show less"
          >
            {data.overview}
          </ShowMoreText>
        </div>
      </section>
    </div>
  );
}
