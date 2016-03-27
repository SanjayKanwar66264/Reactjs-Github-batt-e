var React = require('react');
var rd3 = require('react-d3');
var ScatterChart = rd3.ScatterChart;


var weeklySales = [
      {
        "week":1,
        "sales":90
      },
      {
        "week":2,
        "sales":76
      },
      {
        "week":3,
        "sales":67

      },
      {
        "week":4,
        "sales":80
      }
]

var Sales = React.createClass({
    render: function(){
        // return(<ScatterChart
        //           data={weeklySales}
        //           width={500}
        //           height={200}
        //           fill={'#3182bd'}
        //           title='RBI Sales Chart'
        //         />)
        return(<div>Testasfsafasfsdf</div>);
    }
})

exports.modules = Sales;
