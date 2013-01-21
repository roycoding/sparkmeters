
            //----------------
            // Todo:
            // Rewrite as purely numerical based meter level. I.e. each item has an associated value (e.g. 0.75) and the meter is filled by that much.
            //-----------------------

            //Width and height, meter fill and background
            var w = 7;
            var h = w*5;
            var mfill = "silver";
            var mback = "whitesmoke";

            //Data
            //var dataset = [];

            // Full sparkmeters
            var sparkmost = d3.selectAll(".sparkmost")
                .append("svg")
                .attr("width", w)
                .attr("height", h);

            // Draw SVG bars
            sparkmost.append("rect")
                .attr("x", 0)
                .attr("y", 0)
                .attr("height", h)
                .attr("width", w)
                .attr("fill", mfill);

            //-----------------
            // Half sparkmeters
            var sparkmid = d3.selectAll(".sparkmid")
                .append("svg")
                .attr("width", w)
                .attr("height", h);

            // Draw half filled
            sparkmid.append("rect")
                .attr("x", 0)
                .attr("y", 0)
                .attr("height", h)
                .attr("width", w)
                .attr("fill", mback);

            sparkmid.append("rect")
                .attr("x", 0)
                .attr("y", h-h/2)
                .attr("height", h/2)
                .attr("width", w)
                .attr("fill", mfill);

            //--------------------
            // Quarter sparkmeters
            var sparklow = d3.selectAll(".sparklow")
                .append("svg")
                .attr("width", w)
                .attr("height", h);

            // Draw quarter filled
            sparklow.append("rect")
                .attr("x", 0)
                .attr("y", 0)
                .attr("height", h)
                .attr("width", w)
                .attr("fill", mback);

            sparklow.append("rect")
                .attr("x", 0)
                .attr("y", h-h/4)
                .attr("height", h/4)
                .attr("width", w)
                .attr("fill", mfill);
           
