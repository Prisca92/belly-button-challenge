const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

console.log(url)

 
  function init (){    
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((sampledata)=> {
        console.log(sampledata);
    sample="940"
    createBarchart(sample)
    //2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
//Use sample_values as the values for the bar chart.(xvalues)
//Use otu_ids as the labels for the bar chart.(yvalues)

//Use otu_labels as the hovertext for the chart.
//function  createBarchart(sample){
//function  createBarchart(sample_values,otu_ids,otu_labels){


      });
      //create dropdown menu
    let dropdownMenu = d3.select("#selDataset");
    let names = sampledata.names;
    

    names.foreach(function(id){
        dropdownMenu.append("option").text(id).property("values");


    });
chartvalues(names[0]);
metadata(names[0]);




  }


     d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((sampledata)=> {
//console.log(sample)
//console.log(sampledata);
let samples = sampledata.samples[0];
//console.log(samples)
let otu_ids= id[0].otu_ids;
//console.log(otu_ids)
let sample_values = id[0].sample_values;
let otu_labels =id[0].otu_labels;

  function charts( sample_values,otu_labels,otu_ids ){
    d3.json(url).then(function(sampledata){

//bar chart
        let data =[{
            type:'bar',
            x:sample_values,
            y:otu_ids,
            text:otu_labels,
            orientation:'h',
        }];


           //bubble chart 
             let bubble_data =[{
                 x: otu_ids,
                y:sample_values,
                text:otu_labels,
                mode:'markers',
                marker:{
                    color:otu_ids,
                    colorscale:'',
                    size: sample_values
                    }
            
            
            
                }];



        
        
        
        
        let chart_format = {
        title:"Top 10 OTUs",
        height:400,
        width:300
    
        };
    
    

    let bubble_format ={
        title:"OTU Values",
        height:500,
        width:1000
            
        


    };
//display charts
    Plotly.newPlot('bar',data,chart_format);
    Plotly.newPlot('bubble',bubble_data,bubble_format);

    init();





//3.Create a bubble chart that displays each sample.
//Use otu_ids for the x values.

//Use sample_values for the y values.

//Use sample_values for the marker size.

//Use otu_ids for the marker colors.

//Use otu_labels for the text values.

    //function optionChanged(value) {
       // d3.json(url).then(function(sampledata) { 

       // var metadata = sampledata.metadata.filter(data => data.id ==value);
            //console.log(metadata);
       // var samples =sampledata.samples.filter(data =>data.id ==value);
            //console.log(samples);
        //createBarchart(samples[0]

       // }
       // )
    //}
//4. Display the sample metadata, i.e., an individual's demographic information.

//5.Display each key-value pair from the metadata JSON object somewhere on the page.

//6. Update all the plots when a new sample


    
