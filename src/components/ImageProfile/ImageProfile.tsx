import { Image, ImageProps } from "react-native";
import styles from "./ImageProfileStyles";

type ImageProfileProps = {
  img: ImageProps
}

export function ImageProfile({ img }: ImageProfileProps) {
  return (
    <Image
      source={img}
      style={styles.container}
    />
  );
}