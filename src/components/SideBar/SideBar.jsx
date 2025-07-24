import avatar from "../../assets/avatar.svg";

const SideBar = ({ currentUser, onLogout, onEditProfile }) => {
  return (
    <div className="sidebar">
      <div className="sidebar__user-info">
        <img
          className="sidebar__avatar"
          src={currentUser?.avatar || avatar}
          alt={currentUser?.name || "User avatar"}
        />
        <p className="sidebar__username">{currentUser?.name || "User"}</p>
      </div>
      <button onClick={onEditProfile} className="sidebar__edit-button">
        Change profile data
      </button>
      <button onClick={onLogout} className="sidebar__logout-button">
        Log out
      </button>
    </div>
  );
};

export default SideBar;
