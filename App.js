import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div",
    {
        class: "parent"
    }, [React.createElement("div",
        {
            class: "child1"
        }, [React.createElement("h1",
            {
                className: "heading"
            }, "Hello World From React"), React.createElement("h2",
                {
                    className: "heading1"
                }, "Hello World From React")]),
    React.createElement("div",
        {
            class: "child2"
        }, [React.createElement("h1",
            {
                className: "heading"
            }, "Hello World From React"), React.createElement("h2",
                {
                    className: "heading1"
                }, "Hello World From React")])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);