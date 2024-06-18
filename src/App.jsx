
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import DisplayProducts from "./components/DisplayProducts";
import Header from "./components/Header";
import { CartContextProvider } from "./components/store/CartContext";
import  { UserProgressContextProvider } from "./components/store/UserProgress";

function App() {



  return (
    <>
      <UserProgressContextProvider>
        <CartContextProvider>
          <Header></Header>
          <DisplayProducts></DisplayProducts>
          <Cart></Cart>
          <Checkout></Checkout>
        </CartContextProvider>
      </UserProgressContextProvider>
    </>
  );
}

export default App;
