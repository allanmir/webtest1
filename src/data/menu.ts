import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  {
    id: 1,
    restaurantId: 1,
    name: "Margherita Pizza",
    description: "Fresh tomatoes, mozzarella, basil",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&q=80",
    category: "Pizza"
  },
  {
    id: 2,
    restaurantId: 1,
    name: "Pepperoni Pizza",
    description: "Pepperoni, cheese, tomato sauce",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80",
    category: "Pizza"
  },
  {
    id: 3,
    restaurantId: 2,
    name: "Classic Burger",
    description: "Beef patty, lettuce, tomato, cheese",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80",
    category: "Burgers"
  },
  {
    id: 4,
    restaurantId: 3,
    name: "California Roll",
    description: "Crab, avocado, cucumber",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&q=80",
    category: "Sushi"
  },
  {
    id: 5,
    restaurantId: 4,
    name: "Cappuccino",
    description: "Rich espresso with steamed milk foam",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80",
    category: "Coffee"
  },
  {
    id: 6,
    restaurantId: 4,
    name: "Chocolate Cake",
    description: "Rich chocolate layer cake",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80",
    category: "Desserts"
  },
  {
    id: 7,
    restaurantId: 5,
    name: "Greek Salad",
    description: "Fresh vegetables, olives, feta cheese",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80",
    category: "Salads"
  },
  {
    id: 8,
    restaurantId: 6,
    name: "Ribeye Steak",
    description: "Premium cut, grilled to perfection",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80",
    category: "Meat"
  },
  {
    id: 9,
    restaurantId: 7,
    name: "Club Sandwich",
    description: "Triple-decker with turkey, bacon, lettuce",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1567234669003-dce7a7a88821?auto=format&fit=crop&q=80",
    category: "Sandwiches"
  }
];