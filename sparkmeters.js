           //----------------
            // Todo:
            // * Allow group data to be placed in html document
            // * Parameter passing from html tags (or sandwiched between tags)
            //-----------------------

            //Width and height, meter fill and background
            var w = 7;
            var h = w*5;
            var mfill = "silver";//"yellowgreen";
            var mback = "whitesmoke";
            var most = 1.0;
            var mid = 0.5;
            var low = 0.25;

            //Data
            var dataset = JSON.parse(document.getElementById('meterdata').value);
            // Convert quoted JSON values to numeric values.
            for (var i = 0; i < dataset.length; i++) {
                if(dataset[i].level == "low"){dataset[i].level = low;}
                if(dataset[i].level == "mid"){dataset[i].level = mid;}
                if(dataset[i].level == "most"){dataset[i].level = most;}
                }

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
                .text(function(d,i) {if (i==0) {return d.key+"\u00A0";} else {return ", "+d.key+"\u00A0";} })
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
            var sfills = document.getElementsByClassName('sparkmeter');

            var sparksingle = d3.selectAll(".sparkmeter")
                .data(sfills)
                .append("svg")
                .attr("width", w)
                .attr("height", h);

            // Draw single meter up to specified fraction
            sparksingle.append("rect")
                .attr("x", 0)
                .attr("y", 0)
                .attr("height", h)
                .attr("width", w)
                .attr("fill", mback);

            sparksingle.append("rect")
                .attr("x", 0)
                .attr("y", function(d) { return h - h*parseFloat(d.attributes[0].value); })
                .attr("height", function(d) { return h*parseFloat(d.attributes[0].value); })
                .attr("width", w)
                .attr("fill", mfill);
           
