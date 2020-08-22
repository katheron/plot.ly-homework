// Use d3.json() to fetch data from JSON file
// Incoming data is internally referred to as incomingData
d3.json("data/sam.json").then((incomingData) => {
    function filterOTUs(individual) {
      return individual.sample_values(10);
    }
  
    // Use filter() to pass the function as its argument
    var filteredOTUs = incomingData.filter(filterOTUs);
  
    //  Check to make sure your are filtering your OTUs.
    console.log(filterOTUs);
  
    // Use the map method with the arrow function to return all the filtered OTUs.
    var titles = filteredOTUs.map(OTUs =>  OTUs.title);
  
    // Use the map method with the arrow function to return all the filtered sample_values.
    var ratings = filteredOTUs.map(OTUs => OTUs.sample_values);
  
    // Check your filtered metascores.
    console.log(ratings);
  
    // Create your trace.
    var trace = {
      x: sample_values,
      y: otu_ids,
      type: "bar"
    };
  
    // Create the data array for our plot
    var data = [trace];
  
    // Define the plot layout
    var layout = {
      title: "Top 10 OTUs",
      xaxis: { title: "OTUs" },
      yaxis: { title: "Top 10 OTUs"}
    };
  
    // Plot the chart to a div tag with id "bar-plot"
    Plotly.newPlot("bar-plot", data, layout);
  });
  