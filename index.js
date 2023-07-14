getData(); // calls getData() function

async function getData() {
  const response = await fetch("./ZonAnn.Ts+dSST.csv");
  const table = await response.text();
  const row = table.split("\n").splice(1);
  row.forEach((rws) => {
    const rows = rws.split(",");
    const year = rows[0];
    const temp = rows[1];
    console.log(year, temp);
  });
}
