import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";
// import IndexTemplate from "./components/index-template";
import { useState } from "react";
import Modal from "react-native-modal";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import BrandIcon from "./assets/rubis-service-brand-icon.png";

const theme = {
  ...DefaultTheme,
  // Specify custom property in nested object
  colors: {
    ...DefaultTheme.colors,
    //   colors: {
    //     ...DefaultTheme.colors,
    //     primary: "#5B5B00",
    //     secondary: "#5980BF",
    //   },
  },
};

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <>
      <PaperProvider theme={theme}>
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

          {/* Join Wait list */}
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
                  {/* Waitlist Form */}
                  <View style={styles.form}>
                    <Text variant='headlineMedium'> Join Waitlist </Text>
                    <View style={styles.formItems}>
                      <TextInput
                        mode='outlined'
                        label='Full Name'
                        //   placeholder='John doe'
                        textColor='#000'
                        outlineColor='#000'
                        activeOutlineColor='#000'
                        style={{ width: "100%" }}
                      />
                      <TextInput
                        mode='outlined'
                        label='Are you a Service provider/Vendor'
                        //   placeholder='Provider'
                        textColor='#000'
                        outlineColor='#000'
                        activeOutlineColor='#000'
                        style={{ width: "100%" }}
                      />
                      <TextInput
                        mode='outlined'
                        label='Email Address'
                        //   placeholder='jondoe@gmail.com'
                        textColor='#000'
                        outlineColor='#000'
                        activeOutlineColor='#000'
                        style={{ width: "100%" }}
                      />
                      <TextInput
                        mode='outlined'
                        label='Location Address'
                        //   placeholder='Wuse 2, Abuja'
                        textColor='#000'
                        outlineColor='#000'
                        activeOutlineColor='#000'
                        style={{ width: "100%" }}
                      />
                      <TextInput
                        mode='outlined'
                        label='Phone number'
                        //   placeholder='Phone number'
                        textColor='#000'
                        outlineColor='#000'
                        activeOutlineColor='#000'
                        style={{ width: "100%" }}
                      />
                    </View>

                    {/* Submit */}
                    <View style={{ width: "100%" }}>
                      <Button
                        onPress={() => toggleModal()}
                        style={styles.CTA}
                        textColor='#fff'
                      >
                        Submit
                      </Button>
                    </View>
                  </View>
                </ScrollView>
              </View>
            </Modal>
          </View>
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
  modal: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 20,
    shadowColor: "#000",
  },
  form: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    paddingTop: 40,
    paddingBottom: 30,
  },
  formItems: {
    display: "flex",
    minWidth: "100%",
    width: "100%",
    alignItems: "center",
    gap: 30,
  },
  CTA: {
    width: "100%",
    color: "hsl(211, 50%, 63%)",
    backgroundColor: "hsl(211, 50%, 63%)",
    borderRadius: 30,
  },
});
