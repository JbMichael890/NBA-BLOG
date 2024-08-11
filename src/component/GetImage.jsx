import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../Firebase";

const GetImage = () => {
  const [getmyBase, setGetmyBase] = useState([]);
  const getData = async () => {
    const data = await getDocs(collection(db, "nba-blog"));
    setGetmyBase(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h2>Recent Post:</h2>
      {getmyBase.map((data) => (
        <section key={data}>
          <img src={data.avatar} height="412" width="735px" alt="" />
          <h2>Title:{data.title}</h2>

          <Link to={`/details/${data.id}`}>
            <p>See more</p>
          </Link>
        </section>
      ))}
    </div>
  );
};

export default GetImage;
