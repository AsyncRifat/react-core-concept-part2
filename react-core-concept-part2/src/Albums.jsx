import { use } from "react";
import Album from "./Album";

export default function Albums({ albums }) {
  const albumsPromise = use(albums);
  console.log(albumsPromise);
  return (
    <div className="universe-border">
      <h3>Name</h3>
      {
        albumsPromise.map(album=><Album key={album.id} album={album}></Album>)
      }
    </div>
  );
}