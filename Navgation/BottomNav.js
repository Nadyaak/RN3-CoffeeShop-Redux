import { createBottomTabNavigator } from "react-navigation";
import CoffeeStack from "./CoffeeStack";
import LoginStack from "./AuthStack";
import OrderStack from "./OrderStack";
import { Icon } from "native-base";
import React from "react";

const BottomTab = createBottomTabNavigator(
  {
    Login: LoginStack,
    Coffee: CoffeeStack,
    Order: OrderStack
  },

  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const routName = navigation.state.routeName;
        // console.log(navigation.state.routeName);
        // console.log(routName);
        let iconName = "";
        let iconType = "";
        if (routName === "Coffee") {
          iconName = "coffee";
          iconType = "FontAwesome";
        } else if (routName === "Login") {
          iconName = "user";
          iconType = "FontAwesome";
        } else if (routName === "Order") {
          iconName = "shopping-cart";
          iconType = "FontAwesome";
        }
        return (
          <Icon name={iconName} type={iconType} style={{ color: tintColor }} />
        );
      }
    }),
    tabBarOptions: {
      showLabel: false,
      style: { backgroundColor: "rgb(20, 90, 100)" },
      activeTintColor: "#b8cdd0",
      inactiveTintColor: "white"
    }
  }
);

export default BottomTab;

// switch (routName) {
//   case "Login":
//     iconName = "account";
//     iconType = "MaterialCommunityIcons";
//     break;
//   case "Coffee":
//     iconName = "coffee";
//     iconType = "MaterialCommunityIcons";
//     break;
//   case "Order":
//     iconName = "cart";
//     iconType = "MaterialCommunityIcons";
//     break;
//   default:
//     iconName = "account";
//     iconType = "MaterialCommunityIcons";
// }
