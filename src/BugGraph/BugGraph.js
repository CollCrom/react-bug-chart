import React, {Component} from 'react';
import { Chart, Axis, Series, Tooltip, Cursor, Line } from "react-charts";

class BugGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    lineChart = (
    <Chart
        data={[
        {
            label: "Series 1",
            data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
        }
        ]}>
        <Axis primary type="time" />
        <Axis type="linear" />
        <Series type={Line} />
    </Chart>
    )

    render() {
        return (
            <div className="graph">
                {this.lineChart}
            </div>
        )
    }
}

export default BugGraph;