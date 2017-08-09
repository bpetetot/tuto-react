import React from 'react';

const Person = ({ persons }) =>
  <div>
    {persons.map(p => <div key={p.name}>{`${p.name} travaille chez ${p.company}`}</div>)}
  </div>

export default Person;