import React, { useState } from "react";
import { useUser } from "../context/UserContext";

const Profile = () => {
  const { user, setUser } = useUser();
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setUser({ id: 1, username: "alihsanozkaya", bio: "lorem ipsum dolor" });
      setLoading(false);
    }, 1500);
  };
  const handleLogout = () => {
    setLoading(true);
    setTimeout(() => {
      setUser(null);
      setLoading(false);
    }, 1500);
  };

  return (
    <div>
      {!user && (
        <button onClick={handleLogin}>
          {loading ? "loading..." : "Login"}
        </button>
      )}
      <br />
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {user && (
        <button onClick={handleLogout}>
          {loading ? "loading..." : "Logout"}
        </button>
      )}
    </div>
  );
};

export default Profile;
