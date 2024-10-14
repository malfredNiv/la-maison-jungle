import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";
import PlantItem from "./PlantItem";

function ShoppingList() {
  const categories = plantList.reduce((previousValue, currentValue) => {
    if (!previousValue.includes(currentValue.category)) {
      previousValue.push(currentValue.category);
    }
    return previousValue;
  }, []);

  return (
    <div>
      <ul>
        {categories.map((category, index) => (
          <li key={`${index}}`}>{category}</li>
        ))}
      </ul>
      <ul className="lmj-plant-list">
        {plantList.map(({ name, id, cover, light, water }) => (
          <PlantItem
            name={name}
            id={id}
            cover={cover}
            light={light}
            water={water}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
