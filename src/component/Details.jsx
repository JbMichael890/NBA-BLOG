import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../Firebase";

const Details = () => {
  const { id } = useParams();
  const [getDescription, setGetDescription] = useState({});
  //   console.log(id);

  const getDetail = async (id) => {
    const mydata = await getDoc(doc(db, "NBABLOG", id));
    setGetDescription({ ...mydata.data(), id: mydata.id });
  };

  useEffect(() => {
    getDetail(id);
  }, [id]);

  console.log(getDescription);

  return (
    <div>
      <img src={getDescription.avatar} alt="" width="1000" height="400" />
      <h1>Title: {getDescription.title} </h1>
      <p>Desc: {getDescription.description}</p>
    </div>
  );
};

export default Details;
