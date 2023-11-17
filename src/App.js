import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

// mordern react use functional component.
// no more class components.

function App() {
  // i can declare variables
  const name = "Faisal";
  // jsx renders data as text
  // we can't render objects to the page with react
  // boolean does not get rendered on the page
  // const bol  = true;

  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

// we can't render objects and booleans in jsx

export default App;
