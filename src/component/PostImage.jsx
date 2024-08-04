import { useState } from "react";
import styled from "styled-components";
import background from "../assets/webp/NBA.webp";
import { addDoc, collection } from "firebase/firestore";
import { db, baseStorage } from "../Firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Swal from "sweetalert2";

const PostImage = () => {
  const [avatar, setAvatar] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const uploadImage = (e) => {
    const file = e.target.files[0];
    const fileRef = ref(baseStorage, "/nba-blog", file.name);
    const storageRef = uploadBytesResumable(fileRef, file);
    getDownloadURL(storageRef.snapshot.ref).then((url) => {
      setAvatar(url);
    });
  };

  const createPost = async () => {
    Swal.fire({
      title: "Successful",
       text: "Data posted successful",
      icon: "success",
   });
    addDoc(collection(db, "NBA-BLOG"), {
      title,
      description,
      avatar: await avatar,
     
    });

    setTitle("");
    setDescription("");
    
  };

  return (
    <div>
      {" "}
      {/* <button>Delete Post</button> */}
      <Container>
        <Wrapper>
          <input
            type="file"
            onChange={uploadImage}
            style={{ cursor: "pointer" }}
          />
          <br />
          <input
            value={title}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title:"
          />
          <br />
          <textarea
            name="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description:"
          ></textarea>
          <br />
          <ButtonHold>
            {" "}
            <button onClick={createPost}>POST</button>
          </ButtonHold>
        </Wrapper>
      </Container>
    </div>
  );
};

export default PostImage;
const Container = styled.div`
  margin-top: 20px;
  background-image: url(${background});
  min-height: 100vh;

  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 750px) {
    margin-top: -50px;
    margin-bottom: -100px;
  }
  @media (max-width: 500px) {
    margin-bottom: -170px;
  }
`;

const Wrapper = styled.div`
  border: none;

  input {
    width: 300px;
    background-color: #eee;
    height: 40px;

    outline: none;
    border: none;
    margin-bottom: 1px;
    @media (max-width: 811px) {
      width: 180px;
      height: 20px;
    }
  }
  textarea {
    height: 150px;
    resize: vertical;
    width: 250px;
    @media (max-width: 811px) {
      width: 180px;
      height: 75px;
    }
  }
`;
const ButtonHold = styled.div`
  text-align: center;

  button {
    cursor: pointer;
    height: 30px;

    width: 90px;
    border: none;
    color: #ddd;
    background-color: #3f88c5;
  }
`;
