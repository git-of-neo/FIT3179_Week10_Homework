var box = "js/dot_chart.vg.json";
    vegaEmbed("#dot_chart", box, {actions: false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var bar = "js/bar_chart.vg.json";
    vegaEmbed("#bar_chart", bar, {actions: false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);