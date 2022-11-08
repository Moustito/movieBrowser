import Spotlight from '../Components/Spotlight';
import Trending from '../Components/Trending';

export default function Home({ setGetId }) {
  return (
    <div>
      <Spotlight setGetId={setGetId} />
      <Trending setGetId={setGetId} />
    </div>
  );
}
