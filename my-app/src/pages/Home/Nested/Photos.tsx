import usePhotos from "../../../api/hooks/usePhotos";

export const Photos = () => {
  const { isLoading, error, isError, data } = usePhotos();

  if (isLoading) {
    return <div>Loading photos...</div>;
  }
  if (isError) {
    console.log(error);
    return <div>Photos couldn't be loaded</div>;
  }
  return (
    <ul>
      {data?.map((item) => (
        <li key={item.id}>
          <img src={item.thumbnailUrl} alt="" />
        </li>
      ))}
    </ul>
  );
};
