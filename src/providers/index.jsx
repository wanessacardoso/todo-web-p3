import { AuthProvider } from "./AuthProvider";
import { TaskProvider } from "./TaskProvider";

export const AppProvider = ({ children }) => (
  <AuthProvider>
    <TaskProvider>{children}</TaskProvider>
  </AuthProvider>
);
