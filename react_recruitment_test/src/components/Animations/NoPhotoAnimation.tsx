import React, { FC, useRef } from "react";
import { Lottie, ReactLottieConfig } from "@crello/react-lottie";
import { AnimationItem } from "lottie-web";
import { noPhoto } from "../../assets/images";

export const NoPhoto: FC<{ height?: string }> = () => {
  const animRef = useRef<AnimationItem>({} as AnimationItem);
  const defaultOptions: ReactLottieConfig = {
    animationData: noPhoto,
    loop: true,
    autoplay: false,
  };

  return (
    <Lottie animationRef={animRef} config={defaultOptions} width={"200px"} />
  );
};
