export default function List({ searching }) {
  //State

  //Comportements

  //Render
  return (
    <section className="flex flex-wrap max-w-full justify-center">
      {searching.map((item) => (
        <div className="p-3" key={item.id}>
          <div className="w-40">
            <img
              className="image rounded-3xl"
              src={`http://image.tmdb.org/t/p/w200/${item.poster_path}`}
              alt="poster_path"
            />
          </div>
          <p className="text-left text-white w-40">
            {item.title}
            {item.name}
            <span style={{ color: '#7E7E7E', paddingLeft: '5px' }}>
              ({item.release_date.split('-')[0]})
            </span>
          </p>
        </div>
      ))}
    </section>
  );
}
