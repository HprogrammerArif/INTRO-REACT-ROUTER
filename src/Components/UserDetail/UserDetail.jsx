import { useLoaderData } from "react-router-dom";

const UserDetail = () => {
  const user = useLoaderData();
  const {name, website}= user;
  return (
    <div>
      <h2>Details About User:{name}</h2>
      <p>Visit Us: {website}</p>
    </div>
  );
};

export default UserDetail;