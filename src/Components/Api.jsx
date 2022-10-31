import axios from 'axios';
import { useEffect } from 'react';

export default function Api({ setData, url }) {
  //State

  //Comportements
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const result = await response?.data;

        setData(result.results);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  //Render
}
