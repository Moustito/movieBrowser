import search from '../assets/images/icons/search.png';

export default function Search() {
  return (
    <div>
      <h1>Search</h1>
      <div className="bg-gray-800 rounded-3xl flex p-3">
        <button>
          <img src={search} alt="" />
        </button>
        <input
          className="bg-gray-800"
          type="text"
          placeholder="Search your film..."
        />
      </div>
    </div>
  );
}
