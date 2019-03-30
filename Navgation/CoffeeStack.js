import { createStackNavigator } from "react-navigation";

// Component
import CoffeeList from "../Components/CoffeeList";
import CoffeeDetail from "../Components/CoffeeDetail";
import CoffeeCart from "../Components/CoffeeCart";
import Login from "../Components/Login";

const MyStack = createStackNavigator(
  {
    List: CoffeeList,
    Detail: CoffeeDetail,
    Cart: CoffeeCart
  },
  {
    initialRouteName: "List",
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
