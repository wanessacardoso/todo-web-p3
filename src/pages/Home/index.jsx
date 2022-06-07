import { useNavigate } from "react-router-dom";
import { TaskForm } from "../../components/TaskForm";
import TaskList from "../../components/TaskList";
import Template from "../../containers/Template";
import { useAuth } from "../../hooks/useAuth";
import { GoSignOut } from "react-icons/go";

const Home = () => {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate("/");
  };
  return (
    <Template
      title="My Todo App"
      sideButton={
        <button type="button" onClick={handleLogout}>
          {user.name} <GoSignOut />
        </button>
      }
    >
      <TaskForm />
      <TaskList />
    </Template>
  );
};

export default Home;
