import { Fragment } from "react";
import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";
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
        {plantList.map((plant) => (
          <Fragment>
            <li className="lmj-plant-item" key={plant.id}>
              {plant.name} {plant.isBestSale && <span>🔥</span>}
              {plant.isSpecialOffer && (
                <div className="lmj-sales">Soldes</div>
              )}
            </li>
          </Fragment>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
// function ShoppingList() {
//     return (
//         <ul>
//             {plantList.map((plant, index) => (
//                 <li key={`${plant}-${index}`}>{plant}</li>
//             ))}
//         </ul>
//     )
// }

// export default ShoppingList
