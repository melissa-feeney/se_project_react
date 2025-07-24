import Sidebar from "../SideBar/SideBar.jsx";
import ClothesSection from "../ClothesSection/ClothesSection.jsx";
import "./Profile.css";
import "../ClothesSection/ClothesSection.css";
import "../SideBar/SideBar.css";

function Profile({
  onCardClick,
  clothingItems,
  onAddClick,
  currentUser,
  onLogout,
  onEditProfile,
  onCardLike,
}) {
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
