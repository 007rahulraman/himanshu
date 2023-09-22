export const cleanApiResponse = (apiResponse) => {
  // Remove non-breaking spaces and other unwanted characters
  return apiResponse.replace(/[^\x20-\x7E]+/g, "");
};
