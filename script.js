let numberOfSeries = prompt("Neshta seryal so'rgansiz??","");

console.log(numberOfSeries);

let seriosODB = {
  count : numberOfSeries,
  series : null,
  actors : {},
  genres : [],
  privat : false
};

let lastWatchSeries = prompt('Oxirgi korgan serialingiz??','');
let value = +prompt('Nechi baho berasiz','');

series = {
    seriesName : lastWatchSeries,
    seriesValue : value
};

console.log(series.seriesName+":"+series.seriesValue);