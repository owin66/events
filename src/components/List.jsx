function List({ peoples }) {
  return (
    <div>
      <ul>
        {peoples.map((person, ind) => (
          <li key={ind}>{person}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
