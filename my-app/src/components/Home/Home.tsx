interface Props {
  user: string;
}

export const Home = ({ user }: Props) => {
  return <h1>Welcome {user.split("@")[0]}!</h1>;
};
