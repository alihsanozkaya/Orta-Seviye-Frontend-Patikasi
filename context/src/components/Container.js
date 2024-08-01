import Header from "./Header";
import Button from "./Button";
import Profile from "./Profile";
import { useTheme } from "../context/ThemeContext";

const Container = () => {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <Header />
      <hr />
      <Button />
      <hr />
      <Profile />
    </div>
  );
};

export default Container;
