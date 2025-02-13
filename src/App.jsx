
import Homepage from "./homepage/homepage"
import { BrowserRouter,Routes,Route } from "react-router"
import Admin from "./admin/Admin"
import LoginPage from "./loginpage/loginPage"
import { PrivateRoute1 } from "./PrivateRouts/PrivateRoute"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage/>}/>
        <Route  path="/admin/:uid" element={
          <PrivateRoute1>
            <Admin/>
          </PrivateRoute1>}/>
        <Route path="/login/" element={<LoginPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
