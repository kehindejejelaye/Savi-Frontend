export const togglePasswordType = (currentType, setType) => {
  setType(currentType === "password" ? "text" : "password");
};

export const checkFreq = (freq) => {
  switch (freq) {
    case 0:
      return "Daily";
    case 1:
      return "Weekly";
    case 2:
      return "Monthly";
    default:
      return "Daily";
  }
};