import { PaperProvider } from "react-native-paper";
import IndexTemplate from "./components/index-template";
import { StyleSheet, View } from "react-native";
import JoinWaitlist from "./components/join-waitlist";

const App = () => {
  return (
    <>
      <PaperProvider>
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
