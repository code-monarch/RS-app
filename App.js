import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import IndexTemplate from "./components/index-template";
import { View } from "react-native";

const theme = {
  ...DefaultTheme,
  // Specify custom property in nested object
  colors: {
    ...DefaultTheme.colors,
    //   colors: {
    //     ...DefaultTheme.colors,
    //     primary: "#5B5B00",
    //     secondary: "#5980BF",
    //   },
  },
};

export default function App() {
  return (
    <>
      <PaperProvider theme={theme}>
        <View>
          <IndexTemplate />
        </View>
      </PaperProvider>
    </>
  );
}
