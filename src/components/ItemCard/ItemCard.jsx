import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./ItemCard.css";
import likeButton from "../../assets/like-button.svg";
import likeButtonActive from "../../assets/like-button-active.svg";

function ItemCard({ item, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);

  const handleCardClick = () => {
    onCardClick(item);
  };

  const handleLike = () => {
    const isLiked = item.likes.some((id) => id === currentUser?._id);
    onCardLike({ id: item._id, isLiked });
  };

  // Check if the item was liked by the current user
  const isLiked = item.likes.some((id) => id === currentUser?._id);

  // Create className for the like button
  const itemLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_active" : ""
  }`;

  return (
    <li className="card">
      <h2 className="card__name">{item.name}</h2>
      <img
        onClick={handleCardClick}
        className="card__image"
        src={item.link || item.imageUrl}
        alt={item.name}
      />
      {currentUser && (
        <button
          className={itemLikeButtonClassName}
          onClick={handleLike}
          type="button"
          aria-label="Like item"
        />
      )}
    </li>
  );
}

export default ItemCard;
