import Details from '../Components/Details';
import Similar from '../Components/Similar';

export default function Movie({ Id, setGetId }) {
  return (
    <div>
      <Details Id={Id} />
      <Similar Id={Id} setGetId={setGetId} />
    </div>
  );
}
