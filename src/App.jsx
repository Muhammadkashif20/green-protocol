import Navbar from "./Components/Navbar"
import Header from "./Components/Header"
import Problems from "./Components/Problems"
import Solution from "./Components/Solution"
import BusinessModel from "./Components/BusinessModel"
import Example from "./Components/Example"
import ProfitDistribution from './Components/ProfitDistribution'
import Footer from "./Components/Footer"
function App() {
  return (
    <>
      <div className="Container">
        <Navbar/>
        <Header/>
        <Problems/>
        <Solution/>
        <BusinessModel/>
        <Example/>
        <ProfitDistribution/>
        <Footer/>
      </div>
    </>
  )
}

export default App
