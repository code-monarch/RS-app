import {
  MD3LightTheme as DefaultTheme, PaperProvider,
} from "react-native-paper";
import IndexTemplate from "./components/index-template";
import { StyleSheet, View } from "react-native";
import JoinWaitlist from "./components/join-waitlist";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#A84700",
    secondary: "#5E2800",
  },
};

const App = () => {
  return (
    <>
      <PaperProvider theme={theme}>
        <View style={styles.container}>
          <IndexTemplate />
          <JoinWaitlist />
        </View>
      </PaperProvider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
  },
  fill: {
    flex: 1,
  },
});
