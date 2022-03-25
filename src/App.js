import React from "react"
import './App.css';
import Body from './Components/Body';
import Navbar from "./Components/Navbar"
import Scroll from "./Components/Scroll"
import ErrorBoundary from "./Components/Error"
import 'tachyons'


function App() {
  
  const [ robot, changeRobot ] = React.useState([])
  const [ searchField, changeSearchField ] = React.useState("") 
  const searchChange = (event) => {
    changeSearchField(searchField => {
        return searchField = event.target.value
    })
  }
  const filteredRobots = robot.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase())
  })
React.useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => changeRobot(data))
}, [])

  return (
    <div className="tc">
      <Navbar secrchChange={searchChange}/>
      <Scroll>
        <ErrorBoundary>
          <Body robot = {filteredRobots}/>
        </ErrorBoundary>
      </Scroll>
    </div>
    
  );
}

export default App;
