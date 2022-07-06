import useComments from "../../../api/hooks/useComments";

export const Comments = () => {
  const { isLoading, error, isError, data } = useComments();
  if (isLoading) {
    return <div>Loading comments...</div>;
  }
  if (isError) {
    console.log(error);
    return <div>Commnets couldn't be loaded</div>;
  }
  return (
    <ul>
      {data?.map((item) => (
        <li key={item.id}>{item.body}</li>
      ))}
    </ul>
  );
};
