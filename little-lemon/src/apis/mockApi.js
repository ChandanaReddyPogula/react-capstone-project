export const fetchAPI = (date) => {
  // Simulate different slots per day
  const availableTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

  console.log("Mock fetchAPI called with date:", date);

  return availableTimes;
};

export const submitAPI = (formData) => {
  console.log("Mock submitAPI received data:", formData);
  return true; // Always succeeds
};
