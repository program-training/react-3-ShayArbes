import { useState, useEffect } from "react";
import { User } from "../interfaces/interface/users";
import UserCard from "../UserCard/UserCard";

// interface User {
//   username: string;
//   email: string;
// }

function UsersFromServer(): JSX.Element {
  const [items, setItems] = useState<User[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const db = await fetch("https://jsonplaceholder.typicode.com/users");
        const arrDb = await db.json();
        console.log(arrDb);
        setItems(arrDb);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="container row">
      {items.map((item) => (
        <UserCard key={item.id} {...item} />
      ))}
    </div>
  );
}

export default UsersFromServer





