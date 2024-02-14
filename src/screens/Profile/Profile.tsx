import { View } from "react-native";

import styles from './ProfileStyles';

import ImgProfile from '../../assets/images/photo.jpeg';
import { ImageProfile } from "../../components/ImageProfile/ImageProfile";
import { InfoProfile } from "../../components/InfoProfile/InfoProfile";

export default function Profile() {
  return (
    <View style={styles.appContainer}>
      <View>
        <ImageProfile img={ImgProfile} />
      </View>
      <View>
        <InfoProfile
          name="André Hidalgo Machado"
          linkedin="https://www.linkedin.com/in/andre-hidalgo-045781215"
          github="https://github.com/andrehidalgo93"
          email="andrehidalgomac@gmail.com"
        />
      </View>
    </View>
  )
}