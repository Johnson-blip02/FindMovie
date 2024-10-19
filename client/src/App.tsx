import Footer from "./components/Footer";
import Header from "./components/Header";
import AppRoutes from "./router/route";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {" "}
      {/* This makes sure the app takes the full height */}
      <Header />
      <div className="flex-grow">
        {" "}
        {/* This allows HomePage to fill the available space */}
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
