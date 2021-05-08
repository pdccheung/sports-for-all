import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom"
import ProductPage from "./pages/ProductPage"

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route exact path='/' component={HomePage} />
          <Route path='/product/:id' component={ProductPage} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
