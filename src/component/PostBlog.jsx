// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import Background from "../assets/webp/NBA.webp"

// const Details = () => {
//   const [logo, setLogo] = useState(null);
//   const [title, setTitle] = useState("");
//   const [image, setImage] = useState(null);
//   const [description, setDescription] = useState("");
//   const [storePost, setStorePost] = useState(() => {
//     const saveData = localStorage.getItem("storePost");
//     return saveData ? JSON.parse(saveData) : [];
//   });


//   const createPost = () => {
//     if (logo && title && image && description) {
//       const logoURL = URL.createObjectURL(logo);
//       const imageURL = URL.createObjectURL(image);
//       setStorePost([
//         ...storePost,
//         { logo: logoURL, title, image: imageURL, description },
//       ]);
//       setLogo("");
//       setTitle("");
//       setImage("");
//       setDescription("");
//     } else {
//       alert("All Fields Are Require!");
//     }
//   };
//   const clearData = () => {
//     localStorage.removeItem("storePost");
//     setStorePost([]);
//   };

//   useEffect(() => {
//     localStorage.setItem("storePost", JSON.stringify(storePost));
//   }, [storePost]);

//   return (
//     <div>
//       <Container>
//         <Wrapper>
//           <Title>Post a Blog</Title>
//           <InputHold>
//             <label>Select a Nba Team</label>
//             <input type="file" onChange={(e) => setLogo(e.target.files[0])} />
//           </InputHold>
//           <InputHold>
//             <label>Title</label>
//             <input
//               type="text"
//               placeholder="Enter the title of your post"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//             />
//           </InputHold>
//           <InputHold>
//             <label>Select Your Post Image</label>
//             <input type="file" onChange={(e) => setImage(e.target.files[0])} />
//           </InputHold>
//           <InputHold>
//             <label>Post Details</label>
//             <textarea
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//             />
//           </InputHold>

//           <Button onClick={createPost}>Post Update</Button>
//           <div style={{ textAlign: "center" }}>
//             <Button
//               onClick={clearData}
//               style={{
//                 backgroundColor: "purple",
//                 height: "30",
//                 width: "90px",
//                 marginTop: "10px",
//                 borderRadius: "5px",
//               }}
//             >
//               Clear Data
//             </Button>
//           </div>
//         </Wrapper>
//       </Container>

//       <section>
//         {/* <NewEntry storePost={storePost} setStorePost={setStorePost} /> */}
//       </section>
//     </div>
//   );
// };

// export default Details;

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-top: 30px;
//   min-height: 100vh;
//   background-image: url(${Background});


//   margin-bottom: 20px;
// `;
// const Wrapper = styled.div`
//   width: 310px;
//   /* background-color: red; */
//   border: 1px solid #eee;
//   padding: 10px;
//   height: 400px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
// `;

// const InputHold = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin: 10px 0px;

//   label {
//     font-size: 14px;
//     font-weight: 700;
//   }

//   input {
//     width: 300px;
//     background-color: #eee;
//     height: 40px;
//     font-family: Montserrat;
//     outline: none;
//     border: none;
//   }

//   textarea {
//     height: 150px;
//     resize: vertical;
//     font-family: Montserrat;
//   }
// `;
// const Title = styled.h3`
//   font-weight: 800;
// `;

// const Button = styled.button`
//   height: 35px;
//   width: 100%;
//   outline: none;
//   border: none;
//   background-color: lightblue;
//   font-family: Montserrat;
//   font-weight: 700;
//   color: #fff;
//   cursor: pointer;
// `;
// const Data = styled.div``;
