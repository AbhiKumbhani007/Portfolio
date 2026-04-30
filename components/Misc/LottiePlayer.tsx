import { useLottie } from "lottie-react";
import animation from "../../constants/animations/home_illustration.json";

interface LottiePlayerProps {
  height?: number;
  width?: number;
}

export default function LottiePlayer({ height, width }: LottiePlayerProps) {
  const options = {
    animationData: animation,
    loop: true,
  };

  const style = {
    height,
    width,
  };

  const { View } = useLottie(options, style);

  return <>{View}</>;
}
