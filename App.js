

{/* <div id="parent">
       <div id="child1">
         <h1>heading H1</h1>
         <h2>heading H2</h2>
       </div>
       <div id="child2">
         <h1>heading H1</h1>
         <h2>heading H2</h2>
       </div>
   </div> 
*/}

const heading=React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child1"},
        [React.createElement("h1",{},"heading H1"),
            React.createElement("h2",{},"heading H2")]
        ),
        React.createElement("div",{id:"child2"},
            [React.createElement("h1",{},"child2 heading H2"),
                React.createElement("h2",{},"child 2 heading H2")]
            )
    ]
)
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);