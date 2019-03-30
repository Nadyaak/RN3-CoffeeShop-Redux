import { createStackNavigator } from "react-navigation";

// Component

import profile from "../Components/Profile/Profile";
import Login from "../Components/Login/index";

const MyStack = createStackNavigator(
  {
    Login: Login,
    Profile: profile
  },
  {
    initialRouteName: "Login",
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
