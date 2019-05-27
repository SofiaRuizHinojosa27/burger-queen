import React, {Component} from 'react';
import NoteForm from './NoteForm';



class Orders extends Component {
  constructor(props){
  super(props);
  this.state= {
  breakfast:[
    {itemId:1, item: "Cafe americano",price: 5},
    {itemId:2, item: "Cafe con leche",price: 7},
    {itemId:3, item: "Sandwich de jamón y queso",price: 10},
    {itemId:4, item: "Jugo de frutas natural", price: 7},
    {itemId:5, item: "Chilaquiles verdes o rojos", price: 10},
    {itemId:6, item: "Molletes", price: 12}
  ],
  mealFood:[
    {itemId:1, item: "Hamburguesa sencilla",price: 10},
    {itemId:2, item: "Papas a la francesa",price: 5},
    {itemId:3, item: "Aros de cebolla",price: 5},
    {itemId:4, item: "Refresco 500/ml",price: 7}
  ]
 };
}

render() {
  return(
    <div className="menuContainer">

      <div className="menuBreakfast">
      {this.state.breakfast.map(item =>{
      return(
          <div className="card-group" key={item.itemId}>
            <div className="card" key={item.itemId}>
              <div className="card-body">
               <h5 className="card-title" key={item.itemId}>{item.item}</h5>
               <p className="card-text">Precio ${item.price}</p>
               <button className="btn btn-primary" onClick= {()=> this.addNote(item.itemId)}>Agregar</button>
              </div>
            </div>
          </div>
          )
        })}
      </div>

      <div className="mealFood">
      {this.state.mealFood.map(item =>{
      return(
          <div className="card-group" key={item.itemId}>
            <div className="card" key={item.itemId}>
              <div className="card-body">
               <h5 className="card-title" key={item.itemI}>{item.item}</h5>
               <p className="card-text">Precio ${item.price}</p>
               <button className="btn btn-primary" onClick= {()=> this.addNote(item.itemId)}>Agregar</button>
              </div>
            </div>
          </div>
          )
        })}
      </div>

    </div>
  );
};
};

export default Orders;
