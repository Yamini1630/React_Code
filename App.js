//<div>
   // <div id="child">
     //   <h1></h1>
   // </div>
//</div>



const heading=React.createElement("h1",{},React.createElement("div",{id:"parent"},[React.createElement("h1",{},"H1 tag"),
    React.createElement("h2",{},"H2 tag")]));



    const root=ReactDOM.createRoot(document.getElementById("root"))
    root.render(heading);