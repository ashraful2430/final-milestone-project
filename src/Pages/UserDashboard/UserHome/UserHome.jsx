import useAuth from "../../../Hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h3 className="text-3xl">
        Hi , Welcome Back {user?.displayName ? user?.displayName : ""}
      </h3>
    </div>
  );
};

export default UserHome;
