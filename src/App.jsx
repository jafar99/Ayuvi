
import './App.css'
import Benefit from './component/Benefit'
import Blog from './component/Blog'
import Content from './component/Content'
import Experts from './component/Experts'
import Homepage from './component/Homepage'
import Report from './component/Report'

function App() {


  return (
    <>
      <Homepage/>
      {/* <Benefit/> */}
      <Content/>  
      <Report/>
      <Blog/>
      <Experts/>
    </>
  )
}

export default App
