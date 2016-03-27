var React = require('react');
var transparentBg = require('../styles').transparentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var BarChart = require('react-d3/barchart').BarChart;

// var data = [{
//     label: 'somethingA',
//     values: [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]
// }];

var weekly_sales = [{
    values:[ {
        "x":"week1",
        "y":70
      },
      {
          "x":"week 2",
          "y":50
        },
        {
            "x":"week 3",
            "y":70
          },
          {
            "x":"week 4",
            "y":80
          }
      ]
}];

var Home = React.createClass({

  getDefaultProps: function() {
    return {
      width: 0,
      height: 0,
      offset: 0
    }
  },

  render: function(){
        return(
  <div>
      <BarChart
        data={weekly_sales}
        width={400}
        height={400}
        color="cornflowerblue"
    margin={{top: 10, bottom: 50, left: 150, right: 50}}/>
</div>
  )
  }
});
module.exports = Home;
