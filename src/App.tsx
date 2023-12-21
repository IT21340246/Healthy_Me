import React from "react";
import { Navbar } from "./components/Navbar";
import "./App.css";
import HomePage from "./components/HomePage";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage
        cName="homepage"
        title="Live Healthy Live Long"
        para="Live Healthy, Live Long encapsulates the philosophy of prioritizing well-being to ensure a fulfilling and enduring life. 
         This approach emphasizes adopting a lifestyle centered around nutritious choices, regular physical activity, and mindful habits. 
         By focusing on maintaining good health, individuals not only enhance their physical vitality but also promote longevity. The concept underscores the interconnectedness of a healthy diet, consistent exercise, and overall wellness, emphasizing the profound impact these factors can have on the quality and length of one's life. Embracing this mantra encourages individuals to make sustainable lifestyle choices that contribute to a balanced and prolonged existence."
        homeimage="https://images.unsplash.com/photo-1591258370814-01609b341790?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        btn="Try membership"
        btnName="Try Now"
        url="/"
      />
      <Footer />
    </div>
  );
}

export default App;
