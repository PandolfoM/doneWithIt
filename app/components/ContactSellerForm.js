import React from "react";
import * as Notifications from "expo-notifications";
import { View, Keyboard, Alert } from "react-native";
import messagesApi from "../api/messages";
import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
} from "./forms";
import logger from "../utility/logger";

function ContactSellerForm({ listing }) {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const result = await messagesApi.send(message, listing.id);

    if (!result.ok) {
      logger.log("Error", result);
      return Alert.alert("Error", "Could not send the message");
    }

    resetForm();

    Notifications.scheduleNotificationAsync({
      content: {
        title: "Awesome!",
        body: "Your message was sent to the seller.",
      },
      trigger: null,
    });
  };

  return (
    <View>
      <Form initialValues={{ message: "" }} onSubmit={handleSubmit}>
        <FormField name="message" placeholder="Message" />
        <SubmitButton title="Contact Seller" />
      </Form>
    </View>
  );
}

export default ContactSellerForm;
