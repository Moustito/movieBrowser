import { useState } from 'react';
import List from '../Components/List';
import Research from '../Components/Research';

export default function Search() {
  //State
  const [searching, setSearching] = useState(null);

  //Comportements
  //Render
  return (
    <div>
      <Research setSearching={setSearching} />
      {searching != null ? <List searching={searching} /> : null}
    </div>
  );
}
