function* generateDate() {
  const date = new Date();
  yield [date.getMonth() + 1, date.getDate()];
}

const dateGenerator = generateDate();
const [month, day] = dateGenerator.next().value;
