import { useState } from "react";

export const Like = () => {
  const [like, setLike] = useState(0);
  const hanldeUnLike = () => {
    if (like > 0) {
      setLike(like - 1);
    }
  };
  return (
    <div>
      <h4>Like and Unike</h4>
      <h1>{like}</h1>
      <div>
        <button onClick={() => setLike(like + 1)}>Like</button>
        <button onClick={hanldeUnLike}>Unlike</button>
      </div>
      <div>Total Reactions: {like} </div>
    </div>
  );
};
