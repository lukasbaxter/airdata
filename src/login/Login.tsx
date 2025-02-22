import React, { useState } from 'react';
import { ref, set } from "firebase/database";
import { database } from '../firebaseConfig';

interface Airport {
  code: string;
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  departures: string[];
  arrivals: string[];
  gates: string[];
  runway: string[];
  taxi: string[];
  airplanes: string[];
}

// Sample data for demonstration purposes
const sampleAirports: Airport[] = [
  {
    code: 'LAX',
    name: 'Los Angeles International Airport',
    location: { lat: 33.9416, lng: -118.4085 },
    departures: ['AA100', 'UA200', 'DL300'],
    arrivals: ['BA400', 'AF500'],
    gates: ['A1', 'B2', 'C3'],
    runway: ['Runway 24L', 'Runway 24R'],
    taxi: ['Taxiway Alpha', 'Taxiway Bravo'],
    airplanes: ['Boeing 747', 'Airbus A380'],
  },
  {
    code: 'YVR',
    name: 'Vancouver International Airport',
    location: { lat: 49.1951, lng: -123.1779 },
    departures: ['AC101', 'WS202'],
    arrivals: ['AC303', 'WS404'],
    gates: ['D4', 'E5'],
    runway: ['Runway 08R', 'Runway 08L'],
    taxi: ['Taxiway Charlie'],
    airplanes: ['Boeing 777', 'Airbus A320'],
  },
  {
    code: 'JFK',
    name: 'John F. Kennedy International Airport',
    location: { lat: 40.6413, lng: -73.7781 },
    departures: ['DL110', 'AA220'],
    arrivals: ['BA330', 'AF440'],
    gates: ['F6', 'G7'],
    runway: ['Runway 04L', 'Runway 04R'],
    taxi: ['Taxiway Delta'],
    airplanes: ['Boeing 737', 'Airbus A330'],
  },
  // ... add more airports as needed
];

const AirportDashboard: React.FC = () => {
  const [message, setMessage] = useState('');

  // Function to store sample airports data into Firebase Realtime Database
  const handleStoreAirports = async () => {
    // Convert the array to an object keyed by airport code
    const airportsObject = sampleAirports.reduce((acc, airport) => {
      acc[airport.code] = airport;
      return acc;
    }, {} as Record<string, Airport>);

    try {
      await set(ref(database, 'airports'), airportsObject);
      setMessage('Airports data stored successfully!');
      console.log("Airports stored successfully!");
    } catch (error) {
      setMessage('Error storing airports data.');
      console.error("Error storing airports data:", error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Airport Dashboard</h1>
      <button onClick={handleStoreAirports}>Store Airports Data</button>
      {message && <p>{message}</p>}
      {/* Here you could add more functionality (like fetching or displaying the data) */}
    </div>
  );
};

export default AirportDashboard;
