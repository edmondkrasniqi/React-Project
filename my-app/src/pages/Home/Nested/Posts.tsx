import usePosts from "../../../api/hooks/usePosts";

export const Posts = () => {
  const { isLoading, error, isError, data } = usePosts();

  if (isLoading) {
    return <div>Loading posts...</div>;
  }
  if (isError) {
    console.log(error);
    return <div>Posts couldn't be loaded</div>;
  }
  return (
    <ul>
      {data?.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};
