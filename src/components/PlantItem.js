
import "../styles/PlantItem.css"
import CareScale from "./CareScale";

function PlantItem({ name, cover, id, light, water }) {
    return (
        <div>
            <li className="lmj-plant-item" key={id}>
                <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
                {name}
                <div>
                    <CareScale careType='water' scaleValue={water} />
                    <CareScale careType='light' scaleValue={light} />
                </div>
            </li>
        </div>
    );

}




export default PlantItem;