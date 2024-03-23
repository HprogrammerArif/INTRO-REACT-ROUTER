import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
  const {id, title, body} = post;

  const navigate = useNavigate();

  const postStyle = {
    border: "2px solid green",
    padding: "10px",
    borderRadius: "20px",
  };

  const handleShowDetails = () => {
      navigate(`/post/${id}`)
  }

  return (
    <div style={postStyle}>
      <h3>Post Id: {id}</h3>
      <h5>{title}</h5>
      
      <Link to={`/post/${id}`}>Post Details</Link>
      <Link to={`/post/${id}`}><button>SHow Details</button></Link>
      <button onClick={handleShowDetails}>Click to see Details</button>
      
    </div>
  );
};

export default Post;