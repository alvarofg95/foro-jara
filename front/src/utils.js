export const formattedDate = dateString => {
  const dateArray = dateString.split('-');
  return `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`;
};
