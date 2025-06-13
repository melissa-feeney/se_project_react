import ItemCard from "../ItemCard/ItemCard";

// import { defaultClothingItems } from "../../utils/constants";

const ClothesSection = ({ clothingItems, onCardClick, onAddClick }) => {
  return (
    <div className="clothes-section">
      <div className="clothes__titles">
        <p className="clothes__items">Your items</p>
        <button type="button" className="clothes__button" onClick={onAddClick}>
          + Add New
        </button>
      </div>
      <ul className="clothes-section__items">
        {clothingItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={onCardClick}
              // onDelete={handleDeleteItem}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ClothesSection;
