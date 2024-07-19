import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
const BookingForm = ({
  searchState,
  setsearchState,
  selectedSeats,
  setselectedSeats,
}) => {
  const navigate = useNavigate();
  return (
    <div className="text-center">
      <h5>
        {searchState.from} To {searchState.to}
      </h5>
      <h5>Date: {searchState.date}</h5>
      <br />
      <h5>Please fill below details</h5>

      {selectedSeats.map((data) => (
        <div>
          <div className="my-3">Seat No: {data} </div>
          <Form.Group className="d-flex justify-content-center">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              className="ms-2 mb-3 width-300"
              placeholder="Name"
              type="text"
            />
          </Form.Group>

          <Form.Group className="d-flex justify-content-center">
            <Form.Label>Age:</Form.Label>
            <Form.Control
              className="ms-2 mb-3 width-300"
              placeholder="Age"
              type="number"
            />
          </Form.Group>
        </div>
      ))}
      <Button
        onClick={() => {
          alert("your ticket booked successfully");
          setSearchState({
            from: locations[0],
            to: locations[2],
            date: "",
          });
          setselectedSeats([]);
          navigate("/");
        }}
        variant="success"
      >
        Pay Now
      </Button>
    </div>
  );
};

export default BookingForm;
