import { View, StyleSheet, Pressable } from "react-native";
import { TextInput, Text, Button } from "react-native-paper";

const WaitlistForm = ({ toggleModal }) => {
  return (
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
      <Pressable style={{ width: "100%" }} onPress={toggleModal}>
        <Button onPress={toggleModal} style={styles.CTA} textColor='#fff'>
          Submit
        </Button>
      </Pressable>
    </View>
  );
};

export default WaitlistForm;

const styles = StyleSheet.create({
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
