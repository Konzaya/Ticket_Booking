import { useState } from "react";
import viteLogo from "/vite.svg";
import Heading from "./components/Heading";
import BusSearch from "./components/BusSearch";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { locations } from "./utils";
import BusLayout from "./components/BusLayout";
import BookingForm from "./components/BookingForm";

function App() {
  const [searchState, setSearchState] = useState({
    from: locations[0],
    to: locations[2],
    date: "",
  });

  const [selectedSeats, setSelectedSeats] = useState([]);

  return (
    <div>
      <Heading />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <BusSearch
                searchState={searchState}
                setSearchState={setSearchState}
              />
            }
          />
          <Route
            path="/bus/:id"
            element={
              <BusLayout
                selectedSeats={selectedSeats}
                setSelectedSeats={setSelectedSeats}
              />
            }
          />
          <Route
            path="/bus/book"
            element={
              <BookingForm
                selectedSeats={selectedSeats}
                setSelectedSeats={setSelectedSeats}
                searchState={searchState}
                
                setSearchState={setSearchState}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
