document.addEventListener("DOMContentLoaded", () => {
  async function getData() {
    const response = await fetch("./ZonAnn.Ts+dSST.csv");
    const table = await response.text();
    const row = table.split("\n").splice(1);
    const array = [];
    row.forEach((rws) => {
      const rows = rws.split(",");
      const year = rows[0];
      const temp = rows[1];
      // get array of objects and push to array to data set array on chart.js
      //console.log(year, temp);
      array.push({
        year: year,
        temp: temp,
      });
    });
    getChart(array);
  }

  getData();
  async function getChart(data) {
    new Chart(document.getElementById("canvas"), {
      type: "bar",
      data: {
        labels: data.map((row) => row.year),
        datasets: [
          {
            label: "Acquisitions by year",
            data: data.map((row) => row.temp),
          },
        ],
      },
    });
  }
});
//import Chart from "chart.js/auto";
