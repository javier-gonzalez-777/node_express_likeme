import React, { useState } from 'react';//
import axios from 'axios';//


function Post({
  post: { id, titulo, img, descripcion, likes: initialLikes }, //
  onPostUpdated, //
  onPostDeleted,//
  //
  
  
}) {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(initialLikes > 0);

  const handleLike = async () => {
    try {
      const newLikes = likes + 1
      setIsLiked(!isLiked);
      setLikes(newLikes);
      await axios.put(`http://localhost:5000/like/${id}`, { likes: newLikes });
      onPostUpdated(id, newLikes);
    } catch (error) {
      console.error('Error al dar like:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/posts/${id}`);
      onPostDeleted(id);
    } catch (error) {
      console.error('Error al eliminar el post:', error);
    }
  };
  return (
    <div className="card col-12 col-sm-4 d-inline mx-0 px-3">
      <div className="card-body  p-0">
      
        <img
          className="card-img-top "
          src={img} // Aquí usamos el campo `img` para la URL de la imagen
          alt={titulo} // Añadimos el atributo alt para accesibilidad
          
        />
        <div className="p-3">
          <h4 className="card-title">{titulo}</h4>
          <p className="card-text">{descripcion}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <i
                onClick={handleLike}
                className={`fa-heart fa-xl ${
                  likes ? "fa-solid" : "fa-regular"
                }`}
              ></i>
              <span className="ms-1">{likes}</span>
            </div>
            <i
              onClick={handleDelete}
              className="fa-solid fa-x"
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
