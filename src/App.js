// ............................
// import Home from "./allpages/Home" ;
// import SignIn from "./allpages/SignIn";
// import SignUp from "./allpages/SignUp";
// import PageNot from "./allpages/PageNot";

import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./component/Home";
import Login from "./component/Login";
import ProtectedRoute from "./component/ProtectedRoute";
import SignUp from "./component/Signup";
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (
    <div className="bg-container2">
      <Container style = {{width: "500px", marginBottom:"50px"}}>
        <Row>
          <Col>
            <UserAuthContextProvider>
              <Router>
                <Routes>
                  <Route
                    exact
                    path="/home"
                    element={
                      <ProtectedRoute>
                        <Home />
                      </ProtectedRoute>
                    }
                  />
                  <Route exact path="/" element={<Login />} />
                  <Route exact path="/signup" element={<SignUp />} />
                  
                </Routes>
              </Router>
            </UserAuthContextProvider>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

{
  /**
    <Router>
    <Routes>
           <Route  path="/" element = {<Home />} />
           <Route  path="/signin" element = {<SignIn />} />
           <Route  path="/signup" element = {<SignUp />} />
           <Route  path="*" element = {<PageNot />} />
      
    </Routes>
  </Router> **/
}
