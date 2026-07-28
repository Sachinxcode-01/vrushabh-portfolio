export const motionPresets = {
  durations: {
    fast: 0.25,
    normal: 0.45,
    slow: 0.7,
    entrance: 0.9,
  },
  easings: {
    power3Out: 'power3.out',
    power2InOut: 'power2.inOut',
    expoOut: 'expo.out',
  },
  framer: {
    fadeInUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    scaleUp: {
      initial: { opacity: 0, scale: 0.94 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  },
};
