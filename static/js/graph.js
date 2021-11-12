$( document ).ready(function() {
    console.log( "ready!" );
    console.log('Funciona!');
    var serie_x = $('#serie_x').val();
    var serie_y = $('#serie_y').val();

    var serie_x = serie_x.split(',').map(function(item) {
        return parseInt(item, 10);
    });

    var serie_y = serie_y.split(',').map(function(item) {
        return parseInt(item, 10);
    });

    serie_x[0] = 10
    serie_y[0] = 10

    var data = []

    for (let index = 0; index < serie_x.length; index++) {
        const element_x = serie_x[index];
        const element_y = serie_y[index];

        data.push({'x':element_x,'y':element_y})
        
    }
    
    console.log('serie_x', serie_x);
    console.log('serie_y', serie_y);

    var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;


    var svg = d3.select("#my_dataviz")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

   //d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/2_TwoNum.csv", function(data) {

        // Add X axis
        var x = d3.scaleLinear()
            .domain([0, 10])
            .range([ 0, width ]);
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));
        
        // Add Y axis
        var y = d3.scaleLinear()
            .domain([0, 10])
            .range([ height, 0]);
        svg.append("g")
            .call(d3.axisLeft(y));

    
        svg.append('g')
        .selectAll("dot")
        .data(data)
        .enter()
        .append("circle")
            .attr("cx", function (d) { 
                console.log('valores de x',d.x);
                return x(d.x); } )
            .attr("cy", function (d) { return y(d.y); })
            .attr("r", 5)
            .style("fill", "#69b3a2")
        
    //})


    /* for (let index = 0; index < serie_x.length; index++) {
        const element = parseInt(serie_x[index].replace(',',''));
        console.log(element);       
    }*/
});


