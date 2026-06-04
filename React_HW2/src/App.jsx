import './App.css'
import Greeting from "./components/Greeting";
import ShoppingList from './components/ShoppingList';
import OrderStatus from './components/OrderStatus';

function App() {

  const products = ["Хлеб", "Молоко", "Яйца", "Сыр"];

  const orders = [
    { orderId: 123, status: "в пути" },
    { orderId: 321, status: "обработан" },
    { orderId: 213, status: "доставлен" },
  ];

  return (
    <div>
      <Greeting name="Dzintars" />
      <hr />
      <h2>Список покупок</h2>
      <ShoppingList items={products} />
      <hr />
      <h2>Статусы заказов</h2>
      {orders.map((order) => (
        <OrderStatus
          key={order.orderId}
          orderId={order.orderId}
          status={order.status}
        />
      ))}
    </div>
  );
}

export default App
