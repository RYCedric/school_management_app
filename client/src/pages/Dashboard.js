import React, { useState } from "react";
import { GiDarkSquad, GiMoneyStack, GiPerson } from "react-icons/gi";
import { RiGroupLine } from "react-icons/ri";
import Card from "../components/Card";
import CalendarEvent from "../components/CalendarEvent";
import "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { tr } from "date-fns/locale";

const Dashboard = () => {
  const [state, setstate] = useState({
    earnings: {
      labels: ["0", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", ""],
      datasets: [
        {
          label: "Total Collections",
          data: [
            "0",
            "50000",
            "10000",
            "50000",
            "14000",
            "70000",
            "50000",
            "75000",
            "50000",
          ],
          backgroundColor: ["#ff0000"],
        },
        {
          label: "Fees Collection",
          data: [
            "0",
            "30000",
            "20000",
            "60000",
            "70000",
            "50000",
            "50000",
            "90000",
            "80000",
          ],
          backgroundColor: ["#417dfc"],
        },
      ],
    },
    expenses: {
      labels: ["Jan 2022", "Feb 2022", "Mar 2022"],
      datasets: [
        {
          label: "",
          data: [15000, 10000, 8000],
          backgroundColor: ["#40dfcd", "#417dfc", "#ffaa01"],
        },
      ],
    },
    students: {
      labels: ["Female Students", "Male Students"],
      datasets: [
        {
          label: "",
          data: ["4500", "10500"],
          backgroundColor: ["#304ffe", "#ffa601"],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: "bottom",
        },
      },
    },
  });

  return (
    <div className="dashboard">
      <div className="count">
        <Card
          logo={<GiPerson />}
          number="15000"
          title="Students"
          color="#3cb878"
          bg="#d1f3e0"
        />
        <Card
          logo={<GiDarkSquad />}
          number="2250"
          title="Teachers"
          color="#3f7afc"
          bg="#e1f1ff"
        />
        <Card
          logo={<RiGroupLine />}
          number="5690"
          title="Parents"
          color="#ffa001"
          bg="#fff2d8"
        />
        <Card
          logo={<GiMoneyStack />}
          number="$193000"
          title="Earnings"
          color="#ff0000"
          bg="#ffeaea"
        />
      </div>
      <div className="graphs">
        <div className="earnings">
          <h3>Earnings</h3>
          <Line data={state.earnings} options={state.options} />
        </div>
        <div className="expenses">
          <h3>Expenses</h3>
          <Bar
            data={state.expenses}
            height="190px"
            options={{
              responsive: true,
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
          />
        </div>
        <div className="students">
          <h3>Students</h3>
          <Doughnut data={state.students} options={state.options} />
        </div>
        <div className="eventCalendar">
          <h3>Events Calendar</h3>
          <CalendarEvent />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
