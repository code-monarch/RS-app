import { useState } from "react";
import { Button } from "react-native-paper";
import WaitlistForm from "./waitlist-form";
import { ScrollView, StyleSheet, View } from "react-native";
import Modal from "react-native-modal";

const JoinWaitlist = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <View>
      <Button onPress={toggleModal} style={styles.CTA} textColor='#fff'>
        Click Here To Join Wait list
      </Button>

      {/* Modal */}
      <Modal
        isVisible={isModalVisible}
        onBackButtonPress={() => setIsModalVisible(false)}
        // onBackdropPress={() => setIsModalVisible(false)}
        onSwipeComplete={() => setIsModalVisible(false)}
        style={styles.modal}
      >
        <View style={{ flex: 1 }}>
          <ScrollView scrollEventThrottle={16}>
            <WaitlistForm toggleModal={toggleModal} />
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

export default JoinWaitlist;

const styles = StyleSheet.create({
  CTA: {
    color: "#fff",
    backgroundColor: "hsl(211, 50%, 63%)",
    borderRadius: 30,
  },
  modal: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 20,
    shadowColor: "#000",
  },
});
