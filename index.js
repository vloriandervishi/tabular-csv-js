async function getData() {
  const response = await fetch("test.csv");
  const data = await response.json();
  return data;
}
