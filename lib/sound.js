export const playLikeSound = (type) => {
  if (typeof window === "undefined") return;

  let src = "/assets/sound/mixkit-classic-click-1117.wav";

  if (type === "unlike") {
    src = "/assets/sound/mixkit-mouse-click-close-1113.wav";
  }

  const audio = new Audio(src);
  audio.volume = 0.5;
  audio.play();
};
