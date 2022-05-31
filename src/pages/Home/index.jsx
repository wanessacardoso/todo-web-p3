import { useNavigate } from "react-router-dom";
import { TaskForm } from "../../components/TaskForm";
import TaskList from "../../components/TaskList";
import Template from "../../containers/Template";
import { useAuth } from "../../hooks/useAuth";

const Home = () => {
  const { signOut } = useAuth();
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
          Logout
        </button>
      }
    >
      <TaskForm />
      <TaskList />
    </Template>
  );
};

export default Home;
