import { Text, View, TouchableOpacity } from "react-native";
import * as Clipboard from 'expo-clipboard';

import { Feather } from '@expo/vector-icons';

import styles from "./InfoProfileStyles";

type InfoProfileProps = {
  name: string;
  linkedin: string;
  github: string;
  email: string;
}

export function InfoProfile({ name, linkedin, github, email }: InfoProfileProps) {  

  function handleCopyButton(text: string) {
    Clipboard.setStringAsync(text);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <View>
        <TouchableOpacity
          style={styles.pressable}
          activeOpacity={0.7}
          onPress={() => handleCopyButton(linkedin)}
        >
          <View style={styles.link}>
            <Feather
              name="linkedin"
              size={24}
              color="white"
            />

            <Text style={styles.text}>{linkedin}</Text>
          </View>
          <Feather
            name="copy"
            size={18}
            color="#D3D3D3"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.pressable}
          activeOpacity={0.7}
          onPress={() => handleCopyButton(github)}
        >
          <View style={styles.link}>
            <Feather
              name="github"
              size={24}
              color="white"
            />

            <Text style={styles.text}>{github}</Text>
          </View>
          <Feather
            name="copy"
            size={18}
            color="#D3D3D3"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.pressable}
          activeOpacity={0.7}
          onPress={() => handleCopyButton(email)}
        >
          <View style={styles.link}>
            <Feather
              name="mail"
              size={24}
              color="white"
            />

            <Text style={styles.text}>{email}</Text>
          </View>
          <Feather
            name="copy"
            size={18}
            color="#D3D3D3"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}