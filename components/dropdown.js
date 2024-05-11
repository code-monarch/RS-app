import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useTheme } from "react-native-paper";

const Dropdown = () => {
  const [user, setUser] = useState();
  const theme = useTheme();

  return (
    <View style={styles.pickerContainer}>
      <Picker
        selectedValue={user}
        onValueChange={(itemValue, itemIndex) => setUser(itemValue)}
        label='Are you a Service provider/Vendor'
        style={{
          backgroundColor: theme.colors.background,
          color: theme.colors.inverseSurface,
        }}
      >
        <Picker.Item label='Service provider' value='provider' />
        <Picker.Item label='User' value='user' />
      </Picker>
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  pickerContainer: {
    width: "100%",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 5,
    padding: 1,
  },
});
