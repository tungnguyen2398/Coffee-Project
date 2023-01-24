import React, {useContext } from "react";
import {Cart} from "../../../Context"
import { Link, useParams } from "react-router-dom";
import itemData from "../data/itemData";

const Content = () => {
  const {cart, setCart} = useContext(Cart)
  
  const handleClick = (item) => {
    let isPresent = false
    cart.forEach((product) => {
      if(item.id === product.id)
      isPresent = true
    })
    if (isPresent)
    return;
    setCart(prevCart => [...prevCart, item]);
  }
  

  const hotcoffees = itemData.drink.hotcoffees.map((item) => {
    return (
      <div key={item.id} onClick={() => {handleClick(item)}} className="cursor-pointer">
        <img src={item.img} />
        <p>{item.name}</p>
      </div>
    );
  });
  const hotteas = itemData.drink.hotteas.map((item) => {
    return (
      <div key={item.id} onClick={() => {handleClick(item)}} className="cursor-pointer">
        <img src={item.img} />
        <p>{item.name}</p>
      </div>
    );
  });
  const hotdrinks = itemData.drink.hotdrinks.map((item) => {
    return (
      <div key={item.id} onClick={() => {handleClick(item)}} className="cursor-pointer">
        <img src={item.img} />
        <p>{item.name}</p>
      </div>
    );
  });
  const coldcoffees = itemData.drink.coldcoffees.map((item) => {
    return (
      <div key={item.id} onClick={() => {handleClick(item)}} className="cursor-pointer">
        <img src={item.img} />
        <p>{item.name}</p>
      </div>
    );
  });
  const coldteas = itemData.drink.coldteas.map((item) => {
    return (
      <div key={item.id} onClick={() => {handleClick(item)}} className="cursor-pointer">
        <img src={item.img} />
        <p>{item.name}</p>
      </div>
    );
  });
  const colddrinks = itemData.drink.colddrinks.map((item) => {
    return (
      <div key={item.id} onClick={() => {handleClick(item)}} className="cursor-pointer">
        <img src={item.img} />
        <p>{item.name}</p>
      </div>
    );
  });

  const hotbreakfast = itemData.food.hotbreakfast.map((item) => {
    return (
      <div key={item.id} onClick={() => {handleClick(item)}} className="cursor-pointer">
        <img src={item.img} />
        <p>{item.name}</p>
      </div>
    );
  });
  const bakery = itemData.food.bakery.map((item) => {
    return (
      <div key={item.id} onClick={() => {handleClick(item)}} className="cursor-pointer">
        <img src={item.img} />
        <p>{item.name}</p>
      </div>
    );
  });
  const lunch = itemData.food.lunch.map((item) => {
    return (
      <div key={item.id} onClick={() => {handleClick(item)}} className="cursor-pointer">
        <img src={item.img} />
        <p>{item.name}</p>
      </div>
    );
  });
  const snack = itemData.food.snack.map((item) => {
    return (
      <div key={item.id} onClick={() => {handleClick(item)}} className="cursor-pointer">
        <img src={item.img} />
        <p>{item.name}</p>
      </div>
    );
  });
  const yogurt = itemData.food.yogurt.map((item) => {
    return (
      <div key={item.id} onClick={() => {handleClick(item)}} className="cursor-pointer">
        <img src={item.img} />
        <p>{item.name}</p>
      </div>
    );
  });

  const switchItem = () => {
    switch (itemId) {
      case "1":
        return "Hot Coffees";
      case "2":
        return "Hot Teas";
      case "3":
        return "Hot Drinks";
      case "4":
        return "Cold Coffees";
      case "5":
        return "Cold Teas";
      case "6":
        return "Cold Drinks";
      case "7":
        return "Hot Breakfast";
      case "8":
        return "Bakery";
      case "9":
        return "Lunch";
      case "10":
        return "Snack";
      case "11":
        return "Yogurt";
      default:
        return null;
    }
  };

  const switchItem2 = () => {
    switch(itemId) {
      case "7":
      case "8":
      case "9":
      case "10":
      case "11":
      return "Food";
      default:
        return "Drinks"
    }
  }

  const { itemId } = useParams();
  return (
    <div className="w-3/4">
      <div>
      <div className='ml-32'>
            <p className='text-2xl font-bold mb-12'><Link className="gray" to="/shop">Shop</Link> / {switchItem2()}</p>
            <div>
                <p className='text-2xl font-bold'>{switchItem()}</p>
                <hr className=' w-[750px]'/>           
            </div>
        </div>
      <div className="flex flex-wrap min-w-4/5 ml-20 text-center">
        {(() => {
          switch (itemId) {
            case "1":
              return hotcoffees;
            case "2":
              return hotteas;
            case "3":
              return hotdrinks;
            case "4":
              return coldcoffees;
            case "5":
              return coldteas;
            case "6":
              return colddrinks;
            case "7":
              return hotbreakfast;
            case "8":
              return bakery;
            case "9":
              return lunch;
            case "10":
              return snack;
            case "11":
              return yogurt;
            default:
              return null;
          }
        })()}
      </div>
      </div>
      
    </div>
  );
};
 
export default Content;
