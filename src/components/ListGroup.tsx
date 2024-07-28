import { useState } from "react";

interface Props {
  cities: string[];
  heading: string;
}

const ListGroup = ({ cities, heading }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {cities.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {cities.map((city, i) => (
          <li
            className={
              selectedIndex === i ? "list-group-item active" : "list-group-item"
            }
            key={i}
            onClick={() => setSelectedIndex(i)}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
