import React from "react";
import App from "./App";
import { AppProviders } from "./AppProviders";
import { View,Text } from "react-native";

export default () => (
   <AppProviders>
    <App/>
    </AppProviders>
    // <>
    // <View>
    //   <Text>EE</Text>
    // </View>
    // </>
);
