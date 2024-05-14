import { useState } from "react";
import { Button } from "react-native-paper";
import RegisterForm from "./register-form";
import { ScrollView, StyleSheet, View, Modal, Pressable } from "react-native";

const Register = () => {
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
        Register
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
          onPress={hide}
          style={{ height: 100, backgroundColor: "#DDD", opacity: 0.5 }}
        />
        <View style={styles.main}>
          <ScrollView scrollEventThrottle={16}>
            <RegisterForm toggleModal={hide} />
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  CTA: {
    paddingHorizontal: 20,
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
