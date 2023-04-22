function List({ peoples }) {
  return (
    // РЕНДЕРИМ РАЗМЕТКУ
    <ul>
      {peoples.map((people, ind) => (
        <li key={ind}>{people}</li>
      ))}
    </ul>
  );
}

export default List;
