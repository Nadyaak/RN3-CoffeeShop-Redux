import { createStackNavigator } from "react-navigation";

// Component
import OrderHistory from "../Components/OrderHistory/OrderHistory";
import CoffeeCart from "../Components/CoffeeCart";
const MyStack = createStackNavigator(
  {
    Cart: CoffeeCart,
    Order: OrderHistory
  },
  {
    initialRouteName: "Cart",
    cardStyle: {
      backgroundColor: "rgb(20, 90, 100)"
    },
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "rgb(20, 90, 100)"
      },
      headerTextStyle: {
        fontWeight: "bold"
      }
    }
  }
);
//const AppContainer = createAppContainer(MyStack);

export default MyStack;
