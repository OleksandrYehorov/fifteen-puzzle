export const vibrate: typeof navigator.vibrate = (pattern) => {
  if ('vibrate' in navigator) {
    return navigator.vibrate(pattern);
  }

  return false;
};
