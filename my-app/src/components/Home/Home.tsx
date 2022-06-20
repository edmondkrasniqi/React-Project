import { Header } from "../../layout/Header/Header";

interface Props {
  user: string;

  onLogout: () => void;
}

export const Home = ({ user, onLogout }: Props) => {
  const logout = () => {
    localStorage.removeItem("user");
  };
  return (
    <div>
      <Header onLogout={onLogout} />
      <div></div>
      <main>
        <h1>Welcome {user.split("@")[0]}!</h1>
      </main>
    </div>
  );
};
