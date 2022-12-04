function Header(){
    return (
        <div className="">
<h1>hi am Armel</h1>
        </div>
    )
}
function NavBar(){
    return (
        <div>
     <h2>thi is header</h2>
        </div>
    )
}

ReactDOM.render(
<div>
<NavBar/>
<Header />
</div>,
document.getElementById("root"))