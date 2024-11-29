import React from "react";
import {
    Bar,
    CartesianGrid,
    ComposedChart,
    Legend,
    Line,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

function AdminSalesChart({
    sales,
    month,
    keyName,
    dataKey,
    barColor,
    lineColor,
}) {
    return (
        <ResponsiveContainer width="100%" height="90%">
            <ComposedChart data={sales}>
                <XAxis dataKey={month} />
                <YAxis
                    width={100}
                    tickCount={7}
                    type="number"
                    domain={[0, "auto"]}
                    allowDecimals={false}
                />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#f5f5f5" />
                <Bar
                    dataKey={dataKey}
                    barSize={20}
                    name={keyName}
                    fill={barColor}
                />
                <Line
                    type="monotone"
                    dataKey={dataKey}
                    stroke={lineColor}
                    legendType="none"
                />
            </ComposedChart>
        </ResponsiveContainer>
    );
}

export default AdminSalesChart;