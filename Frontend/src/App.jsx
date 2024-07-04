import axios from "axios";
import { useEffect, useState } from "react";
import Form from "./components/Form";
import Post from "./components/Post";

const urlBaseServer = "http://localhost:5000";

function App() {
  const [titulo, setTitulo] = useState("");
  const [imgSrc, setImgSRC] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const { data: posts } = await axios.get(urlBaseServer + "/posts");
    setPosts([...posts]);
  };

  const agregarPost = async () => {
    const post = { titulo, img: imgSrc, descripcion };
    console.log("aca post..:",post)
    await axios.post(urlBaseServer + "/post", post);
    getPosts();
  };

  const like = async (id, newLikes) => {
    const updatedPosts = posts.map(post => 
      post.id === id ? { ...post, likes: newLikes } : post
    );
    setPosts(updatedPosts);
  };

  const eliminarPost = async (id) => {
    try {
      await axios.delete(urlBaseServer + `/posts/${id}`);
      setPosts(posts.filter(post => post.id !== id));
    } catch (error) {
      console.error('Error al eliminar el post:', error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="App">
      <h2 className="py-5 text-center">&#128248; Like Me &#128248;</h2>
      <div className="row m-auto px-5">
        <div className="col-12 col-sm-4">
          <Form
            setTitulo={setTitulo}
            setImgSRC={setImgSRC}
            setDescripcion={setDescripcion}
            agregarPost={agregarPost}
          />
        </div>
        <div className="col-12 col-sm-8 px-5 row posts align-items-start">
          {posts.map((post, i) => (
            <Post
              key={i}
              post={post}
              onPostUpdated={(id, likes) => {
                const updatedPosts = posts.map(p => 
                  p.id === id ? { ...p, likes } : p
                );
                setPosts(updatedPosts);
              }}
              onPostDeleted={eliminarPost}
            />
          ))}
        </div>
      </div>
    </div>
  );
}



export default App;