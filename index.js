const page=(
    <div className="body">
    <header className="header">
<img src="data:image/png;base64,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" alt="react logo" />
<h1 className="facts">ReactFacts</h1>
    <h3 className="project">React Course-Project1</h3>
</header>
<h1 className="fun">Fun facts about React</h1>
    <ul>
    <li>was first realsed in 2013</li>
    <li>was originally created by jordan walke</li>
    <li>has well over 100k stars on github</li>
    <li>is mantained by facebook</li>
    <li>powers thousands of apps,including mobile apps</li>
    </ul>
</div>
)
console.log(page)
ReactDOM.render(
page,
document.getElementById("root"))