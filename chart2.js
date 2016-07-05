google.charts.setOnLoadCallback(drawChart2);

function drawChart2() {
  var data = google.visualization.arrayToDataTable([
    ["Element", "Density", { role: "style" } ],
    ["Copper", 8.94, "#b87333"],
    ["Silver", 10.49, "silver"],
    ["Gold", 19.30, "gold"],
    ["Platinum", 21.45, "color: #e5e4e2"]
    ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
   { calc: "stringify",
   sourceColumn: 1,
   type: "string",
   role: "annotation" },
   2]);


  var options = {
    title: "Density of Precious Metals, in g/cm^3",
    height: 250,
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };
  var chart = new google.visualization.BarChart(document.getElementById("grafico2"));
  chart.draw(view, options);
}