import { Text, View } from "react-native";

import { Feather } from '@expo/vector-icons';

import styles from "./SkillItemStyles";

type SkillItemProps = {
  name: string;
  quantity: number;
}

export function SkillItem({ name, quantity }: SkillItemProps) {  
  let stars = [];
  for (let index = 0; index < quantity; index++) {
    stars.push(<Feather name="star" size={24} color="yellow" key={index} />);
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <View style={styles.boxStars}>
        {stars}
      </View>
    </View>
  );
}