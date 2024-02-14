import { Text, View } from "react-native";

import styles from "./SkillsStyles";

import ImgProfile from '../../assets/images/photo.jpeg';
import { ImageProfile } from "../../components/ImageProfile/ImageProfile";
import { SkillItem } from "../../components/SkillItem/SkillItem";


export default function Skills() {
  return (
    <View style={styles.appContainer}>
      <View>
        <ImageProfile img={ImgProfile} />
      </View>
      <View style={styles.group}>
        <Text style={styles.title}>Minhas habilidades</Text>
        <View>
          <SkillItem
            name="HTML"
            quantity={5}
          />
          <SkillItem
            name="CSS"
            quantity={5}
          />
          <SkillItem
            name="JavaScript"
            quantity={5}
          />
          <SkillItem
            name="React"
            quantity={4}
          />
          <SkillItem
            name="React Native"
            quantity={3}
          />
        </View>
      </View>
    </View>
  )
}