const heading = React.createElement("div",
    {
        class: "parent"
    }, [React.createElement("div",
        {
            class: "child1"
        }, [React.createElement("h1",
            {
                class: "heading"
            }, "Hello World From React"), React.createElement("h2",
                {
                    class: "heading1"
                }, "Hello World From React")]),
    React.createElement("div",
        {
            class: "child2"
        }, [React.createElement("h1",
            {
                class: "heading"
            }, "Hello World From React"), React.createElement("h2",
                {
                    class: "heading1"
                }, "Hello World From React")])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);