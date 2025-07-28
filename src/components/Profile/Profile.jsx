import { useContext } from "react";
import Sidebar from "../SideBar/SideBar.jsx";
import ClothesSection from "../ClothesSection/ClothesSection.jsx";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./Profile.css";
import "../ClothesSection/ClothesSection.css";
import "../SideBar/SideBar.css";

function Profile({
  onCardClick,
  clothingItems,
  onAddClick,
  onLogout,
  onEditProfile,
  onCardLike,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="profile">
      <section className="profile__sidebar">
        <Sidebar
          currentUser={currentUser}
          onLogout={onLogout}
          onEditProfile={onEditProfile}
        />
      </section>
      <section className="profile__clothing-items">
        <ClothesSection
          onCardClick={onCardClick}
          clothingItems={clothingItems}
          onAddClick={onAddClick}
          onCardLike={onCardLike}
        />
      </section>
    </div>
  );
}

export default Profile;
