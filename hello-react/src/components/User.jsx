import React from "react";
import PropTypes from "prop-types";

const User = ({ isLoggedIn, name, surname, age, friends, address }) => {

  if (!isLoggedIn) {
    return <div>Giriş yapmadınız</div>
  }

  return (
    <>
      <h1>{isLoggedIn ? `${name} ${surname} (${age})` : "Giriş Yapmadınız"}</h1>
      {friends && friends.map((friend) => (
        <div key={friend.id}>
          {friend.id}- {friend.name}
        </div>
      ))}
      {/* {
        friends.map((friend, index) => {
          return <div key={index}>{index}- {friend}</div>
        })
      } */}
    </>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  age: PropTypes.number.isRequired,
  friend: PropTypes.array,
  address: PropTypes.shape({
    title: PropTypes.string.isRequired,
    zip: PropTypes.number
  })
};

User.defaultProps = {
  isLoggedIn: false
}
export default User;
