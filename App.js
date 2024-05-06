import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
import IndexTemplate from "./components/index-template";

const theme = {
  ...DefaultTheme,
  // Specify custom property in nested object
  colors: {
    ...DefaultTheme.colors,
  },
};

export default function App() {
  return (
    <>
      <PaperProvider theme={theme}>
        <IndexTemplate />
      </PaperProvider>
    </>
  );
}
