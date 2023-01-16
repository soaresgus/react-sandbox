import { useEffect, useState } from "react";

interface IFetchBody {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export function FetchImages() {
  const [imagesUrl, setImagesUrl] = useState<IFetchBody[]>();

  function fetchImages() {
    setImagesUrl([]);
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data: IFetchBody[]) => setImagesUrl(data));
  }

  /*useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data: IFetchBody[]) => setImagesUrl(data));
  }, []);*/

  return (
    <div className="suspense">
      <button className="button suspense__button" onClick={fetchImages}>
        Fetch images
      </button>
      {imagesUrl?.map((item) => (
        <img
          key={item.id}
          className="suspense__img"
          src={item.thumbnailUrl}
          alt={item.title}
        />
      ))}
    </div>
  );
}
