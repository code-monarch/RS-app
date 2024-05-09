import { useState } from "react";
import { Button, Text } from "react-native-paper";
import WaitlistForm from "./waitlist-form";
import { ScrollView, StyleSheet, View, Modal, Pressable } from "react-native";

const JoinWaitlist = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const show = () => {
    setIsModalVisible(true);
  };
  const hide = () => {
    setIsModalVisible(false);
  };
  return (
    <View>
      <Button onPress={show} style={styles.CTA} textColor='#fff'>
        Join wait list
      </Button>
      {/* Modal */}
      <Modal
        visible={isModalVisible}
        animationType='slide'
        onRequestClose={hide}
        transparent
        style={styles.modal}
      >
        <Pressable
          style={{ height: 100, backgroundColor: "#DDD", opacity: 0.5 }}
        />
        <View style={styles.main}>
          <ScrollView scrollEventThrottle={16}>
            <WaitlistForm toggleModal={hide} />
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
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 20,
    shadowColor: "#000",
  },
  fill: {
    flex: 1,
  },
  main: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
});
