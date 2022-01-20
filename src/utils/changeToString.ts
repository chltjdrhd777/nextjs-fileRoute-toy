export const changeToString = (data: { [key: string]: any }) => {
  for (let key of Object.keys(data)) {
    data[key] = String(data[key]);
  }
  return data;
};
