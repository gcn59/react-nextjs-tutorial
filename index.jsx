const root = ReactDOM.createRoot(document.getElementById('root'))

function App() {
    const verbList = [null, "eating", "dead"]
    return(
        <>
        {
            verbList.map((verb)=> (
                <Header key={verbList.indexOf(verb)} verb={verb}/>
            ))
        }
        <footer>2023 Gabriel C.</footer>
        </>
    )
}

function Header({verb}) {
    return(<h1>🚀 It's {verb ? verb : "live"} !</h1>)
}

root.render(<App />)