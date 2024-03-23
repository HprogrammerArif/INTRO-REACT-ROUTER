import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { name, id, email, phone } = user;
  console.log(user);

  const userStyle = {
    border: "2px solid yellow",
    padding: "6px",
    borderRadius: "20px",
  };

  return (
    <div style={userStyle}>
      <h2>Name: {name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <Link to={`/user/${id}`}>Show Details</Link>
      <Link to={`/user/${id}`}>
        <button>CLick Me</button>
      </Link>
    </div>
  );
};

export default User;
