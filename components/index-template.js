import { Image, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import BrandIcon from "../assets/rubis-service-brand-icon.png";

const IndexTemplate = () => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image
          source={BrandIcon}
          style={{
            width: 80,
            height: 80,
          }}
          resizeMode='contain'
        />
        <View style={styles.header}>
          <Text style={styles.heading}>Rubis Services</Text>
          <Text style={styles.subHeader}>Coming Soon!</Text>
        </View>
      </View>
    </View>
  );
};

export default IndexTemplate;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    color: "hsl(242, 100%, 32%)",
    fontSize: 30,
  },
  subHeader: {
    color: "#000",
    fontSize: 18,
  }
});
