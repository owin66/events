function List({ peoples }) {
  return (
    <ul>
      {peoples.map((people, ind) => (
        <li key={ind}>{people}</li>
      ))}
    </ul>
  );
}

export default List;
