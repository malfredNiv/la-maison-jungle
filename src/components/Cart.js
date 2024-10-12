import '../styles/Cart.css'
function Cart() {
        const monsteraPrix=8
        const lierrePrix=10
        const bouquetPrix=15
        return (<div className='lmj-cart'><ul>
        <li> Monstera : { monsteraPrix }</li>
        <li> Lierre : { lierrePrix } </li>
        <li> Bouquet de fleurs : { bouquetPrix } </li>
       </ul>
            <p> Total du panier: {monsteraPrix+lierrePrix+bouquetPrix}</p></div>)
        
}

export default Cart