const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

console.log(url)

 
  function init (){    
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((sampledata)=> {
        console.log(sampledata);
    
    //2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
//Use sample_values as the values for the bar chart.(xvalues)
//Use otu_ids as the labels for the bar chart.(yvalues)

//Use otu_labels as the hovertext for the chart.
//function  createBarchart(sample){
//function  createBarchart(sample_values,otu_ids,otu_labels){


      
      //create dropdown menu
    let dropdownMenu = d3.select("#selDataset");
    let names = sampledata.names;
    

    names.forEach(function(id){
        dropdownMenu.append("option").text(id).property("values");


    });
charts(names[0]);
buildmetadata(names[0]);



});
  }


    

  function charts(name){console.log(name)


    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((sampledata)=> {
        //console.log(sample)
        //console.log(sampledata);
        let samples = sampledata.samples;
        let subject = samples.filter(values => values.id==name )
        console.log(samples)
        let otu_ids= subject[0].otu_ids;
        console.log(otu_ids)
        console.log(subject[0])
        let sample_values = subject[0].sample_values;
        let otu_labels = subject[0].otu_labels;

//bar chart
        let data =[{
            type:'bar',
            x:sample_values.slice(0,10),
            y:otu_ids.slice(0,10).map(otu => `otu's:${otu}`),
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
    })
  
}

  function buildmetadata(sample){console.log(sample)
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => { 
    let metadata = data.metadata;
//filter data
    let resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      
        singlesample=resultArray[0]
       

        //return item.id = singlesample;
    
        // Getting a reference to the box on the page with the id property set to `Demographic Info`.

let metadataPanel = d3.select("#sample-metadata");
metadataPanel.html("");

for (key in singlesample) {
    // When appending to the demoInfo Box set the key to be in upper case.
    metadataPanel.append("h6").text(`${key.toUpperCase()}: ${singlesample[key]}`);
  };
})
};

    function optionChanged(value) {
        
    
        
            buildmetadata(value) 
      
        
        charts(value)
    console.log(value)
};
       

init();
    
