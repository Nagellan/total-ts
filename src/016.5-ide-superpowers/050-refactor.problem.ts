const func = () => {
  // Refactor this to be its own function
  const randomPercentage = getRandomPercentage();
  console.log(randomPercentage);
};

function getRandomPercentage() {
  return `${getRandomFixedNumber(2)}%`;
}
function getRandomFixedNumber(fractionDigits: number) {
  return (Math.random() * 100).toFixed(fractionDigits);
}
