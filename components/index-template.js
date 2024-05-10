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
          <Text style={styles.subHeader}>
            Your Trusted Tech Hub for Professional Cleaning Services
          </Text>
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
    paddingHorizontal: 40,
  },
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  heading: {
    color: "hsl(242, 100%, 32%)",
    fontSize: 25,
  },
  subHeader: {
    color: "#000",
    fontSize: 14,
    textAlign: "center",
  },
});
