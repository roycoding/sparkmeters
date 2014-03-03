
            //----------------
            // Todo:
            // * Allow group data to be placed in html document
            // * Parameter passing from html tags (or sandwiched between tags)
            //-----------------------

            //Width and height, meter fill and background
            var w = 7;
            var h = w*5;
            var mfill = "yellowgreen"; //"silver";
            var mback = "whitesmoke";
            var most = 1.0
            var mid = 0.5
            var low = 0.25

            //Data
//            var dataset = [1,2,3,2,1];
            var dataset = [
                    {key: "Python", level : most},
                    {key: "D3" , level : low},
                    {key: "Linux" , level : most},
                    {key: "C++" , level : mid},
                    {key: "R" , level : low},
                    {key: "Inkscape" , level : mid},
                    {key: "matplotlib" , level : most},
                    {key: "pandas" , level : low},
                    {key: "bash" , level : mid},
                    {key: "HTML" , level : mid},
                    {key: "CSS" , level : mid},
                    {key: "LaTeX" , level : most},
                    {key: "JSON" , level : low},
                    {key: "numpy" , level : most},
                    {key: "scipy" , level : mid},
                    {key: "SQL" , level : low}
                    ];

            // Functions to handle grouped item data
            function keyf(d) { return d.key; }
            function levelf(d) { return d.level; }

            // Group of items with sparkmeters
            var sparkgroup = d3.select(".sparkmetergroup")
                .selectAll("span")
                .data(dataset)
                .enter()
                .append("span")
                .attr("class","sparkgroup");

            // Enter item text and create SVG containers
            var sparkspans = d3.selectAll(".sparkgroup")
                .data(dataset)
                .text(function(d,i) {if (i==0) {return d.key+" ";} else {return ", "+d.key+" ";} })
                .append("svg")
                .attr("width", w)
                .attr("height", h);

            // Draw meters filled to fill parameter
            sparkspans.append("rect")
                .attr("x", 0)
                .attr("y", 0)
                .attr("height", h)
                .attr("width", w)
                .attr("fill", mback);

            sparkspans.append("rect")
                .attr("x", 0)
                .attr("y", function(d) { return h - h*d.level; })
                .attr("height", function(d) { return h*d.level; })
                .attr("width", w)
                .attr("fill", mfill);

//            sparkspans.append("text")
//            .text(",");

            //-----------------------------------------
            // Single sparkmeters
            var sparksingle = d3.selectAll(".sparkmeter")
                .append("svg")
                .attr("width", w)
                .attr("height", h);

            // Draw quarter filled
            sparksingle.append("rect")
                .attr("x", 0)
                .attr("y", 0)
                .attr("height", h)
                .attr("width", w)
                .attr("fill", mback);

            sparksingle.append("rect")
                .attr("x", 0)
                .attr("y", h-h/4)
                .attr("height", h/4)
                .attr("width", w)
                .attr("fill", mfill);
           
