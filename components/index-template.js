import { useState } from "react";
import Modal from "react-native-modal";
import { Image, StyleSheet, View } from "react-native";
import { Text, Button } from "react-native-paper";
import BrandIcon from "../assets/rubis-service-brand-icon.png";
import WaitlistForm from "./waitlist-form";

const IndexTemplate = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image
          source={BrandIcon}
          style={{
            width: 80,
            height: 80,
            resizeMode: "contain",
          }}
        />
        <View style={styles.header}>
          <Text style={styles.heading}>Rubis Services</Text>
          <Text style={styles.subHeader}>Coming Soon!</Text>
        </View>
      </View>

      {/* Join Waitlist */}
      <View>
        <Button onPress={toggleModal} style={styles.CTA} textColor='#fff'>
          Click Here To Join Waitlist
        </Button>

        {/* Modal */}
        <Modal isVisible={isModalVisible} style={styles.modal}>
          <View>
            <WaitlistForm toggleModal={toggleModal} />
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default IndexTemplate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
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
    marginTop: "20px",
    fontSize: 30,
    marginBottom: "200px",
  },
  subHeader: {
    color: "#000",
    marginTop: "20px",
    fontSize: 18,
  },
  CTA: {
    color: "#fff",
    backgroundColor: "hsl(211, 50%, 63%)",
    borderRadius: 30,
  },
  modal: {
    backgroundColor: "#fff",
    height: "100px",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    padding: 25,
    shadowColor: "#000",
  },
});
