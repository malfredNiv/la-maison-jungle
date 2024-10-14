import './App.css';
import React from 'react';
import Cart from './Cart';
import Banner from './Banner';
import ShoppingList from './ShoppingList';
import Footer from './Footer';
import leaf from '../assets/leaf.png'
function App() {
   return <>
               <Banner>
                     <img src={leaf} alt='La maison jungle' />
                     <h1 className='lmj-title'>La maison jungle</h1>
               </Banner>
               
               <ShoppingList />
               
               <Cart />

               <Footer />
   </>;


}

export default App;
