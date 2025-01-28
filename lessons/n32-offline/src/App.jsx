import './App.css'
import UserProvider from "./providers/UserProvider.jsx";
import Home from "./components/Home.jsx";





function App() {

  //   prop drilling

  return (
    <UserProvider>
        <h1>WORKING</h1>
        <Home/>
    </UserProvider>
  )
}

export default App
