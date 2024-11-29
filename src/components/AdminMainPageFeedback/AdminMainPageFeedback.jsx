/** @jsxImportSource @emotion/react */ // aside css
import { useQuery } from "react-query";
import * as s from "./style";
import {
    PieChart,
    Pie,
    ResponsiveContainer,
    Legend,
    Cell,
} from "recharts";
import { useState } from "react";
import { getFeedbackCountRequest } from "../../apis/api/feedback";

function AdminMainPageFeedback(props) {
    const [feedbackCount, setfeedbackCount] = useState([]);
    const COLORS1 = ["#e9b78b", "#776858", "#ac8a68"];
    const COLORS2 = ["#7cc26a", "#a3ce80", "#407a3e"];
    const COLORS3 = ["#51829B", "#9BB0C1", "#85b1e2"];

    const feedbackCountQuery = useQuery(
        ["feedbackCountQuery"],
        getFeedbackCountRequest,
        {
            retry: 0,
            refetchOnWindowFocus: false,
            onSuccess: (response) => {
                console.log(response.data);
                setfeedbackCount(response.data);
            },
            onError: (error) => {
                console.log(error);
            },
        }
    );

    const data01 = [
        {
            name: "맛없음",
            value: feedbackCount[0]?.q1a1,
        },
        {
            name: "보통",
            value: feedbackCount[0]?.q1a2,
        },
        {
            name: "맛있음",
            value: feedbackCount[0]?.q1a3,
        },
    ];

    const data02 = [
        {
            name: "적음",
            value: feedbackCount[0]?.q2a1,
        },
        {
            name: "적당함",
            value: feedbackCount[0]?.q2a2,
        },
        {
            name: "많음",
            value: feedbackCount[0]?.q2a3,
        },
    ];

    const data03 = [
        {
            name: "불친절함",
            value: feedbackCount[0]?.q3a1,
        },
        {
            name: "보통",
            value: feedbackCount[0]?.q3a2,
        },
        {
            name: "친절함",
            value: feedbackCount[0]?.q3a3,
        },
    ];

    return (
        <div css={s.layout}>
                <ResponsiveContainer width="33%" height="100%" display="flex">
                    <PieChart width={500} height={250}>
                        <Pie
                            data={data01}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            innerRadius={50}
                            outerRadius={80}
                            fill="#758e97"
                            label
                        >
                            {data01.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS1[index % COLORS1.length]}
                                />
                            ))}
                        </Pie>
                        <Legend height={35} />
                    </PieChart>
                </ResponsiveContainer>
                <ResponsiveContainer width="33%" height="100%" display="flex">
                    <PieChart width={500} height={250}>
                        <Pie
                            data={data02}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            innerRadius={50}
                            outerRadius={80}
                            fill="#eba89c"
                            label
                        >
                            {data02.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS2[index % COLORS2.length]}
                                />
                            ))}
                        </Pie>
                        <Legend height={35} />
                    </PieChart>
                </ResponsiveContainer>
                <ResponsiveContainer width="33%" height="100%" display="flex">
                    <PieChart width={500} height={250}>
                        <Pie
                            data={data03}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            innerRadius={50}
                            outerRadius={80}
                            fill="#87cca1"
                            label
                        >
                            {data03.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS3[index % COLORS3.length]}
                                />
                            ))}
                        </Pie>
                        <Legend height={35} />
                    </PieChart>
                </ResponsiveContainer>
        </div>
    );
}

export default AdminMainPageFeedback;