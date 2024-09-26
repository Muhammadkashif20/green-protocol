import Navbar from "./Components/Navbar"
import Header from "./Components/Header"
import Problems from "./Components/Problems"
import Solution from "./Components/Solution"
function App() {
  return (
    <>
      <div className="Container">
        <Navbar/>
        <Header/>
        <Problems/>
        <Solution/>
      </div>
    </>
  )
}

export default App
