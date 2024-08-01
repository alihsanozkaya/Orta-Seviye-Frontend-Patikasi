import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);
  return (
    <div>
      <h1>User Detail</h1>
      {loading && <div>Loading...</div>}
      {!loading && <pre>{JSON.stringify(user, null ,2)}</pre>}
      <br/>
      <br/>
      <Link to={`/user/${parseInt(id) + 1}`}>Next User ({parseInt(id) + 1})</Link>
    </div>
  );
};

export default User;
