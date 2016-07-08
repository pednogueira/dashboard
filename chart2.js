google.charts.setOnLoadCallback(drawChart2);

function drawChart2() {
  var data = google.visualization.arrayToDataTable([
    ['Genre', 'Fantasy & Sci Fi', 'Romance', 'Mystery/Crime', 'General',
    'Western', 'Literature', { role: 'annotation' } ],
    ['2010', 10, 24, 20, 32, 18, 5, ''],
    ['2020', 16, 22, 23, 30, 16, 9, ''],
    ['2030', 28, 19, 29, 30, 12, 13, '']
    ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
   { calc: "stringify",
   sourceColumn: 1,
   type: "string",
   role: "annotation" },
   2]);
  var options = {
    width: 450,
    height: 200,
    legend: { position: 'top', maxLines: 3 },
    bar: { groupWidth: '20%' },
    isStacked: true
  };
  var chart = new google.visualization.BarChart(document.getElementById("grafico2"));
  chart.draw(view, options);
}