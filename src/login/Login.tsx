import { useState } from 'react';
import '../App.css';

//hi

const airports = [
  { code: 'LAX', name: 'Los Angeles International Airport' },
  { code: 'YVR', name: 'Vancouver International Airport' },
  { code: 'JFK', name: 'John F. Kennedy International Airport' },
  { code: 'ORD', name: "O'Hare International Airport" },
  { code: 'LHR', name: 'London Heathrow Airport' },
];

export default function Login() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedAirport, setSelectedAirport] = useState('');

  const filteredAirports = airports.filter(airport => 
    airport.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    airport.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <h1>Airdata</h1>
          <p>Log in to your account</p>
        </div>

        <div className="login-form">
          <div className="form-group">
            <label>Select Airport</label>
            <div className="dropdown-container">
              <input
                type="text"
                placeholder="Search airport..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setIsDropdownOpen(true);
                }}
                onClick={() => setIsDropdownOpen(true)}
              />
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  {filteredAirports.map((airport) => (
                    <div
                      key={airport.code}
                      className="dropdown-item"
                      onClick={() => {
                        setSelectedAirport(airport.code);
                        setSearchTerm(`${airport.code} - ${airport.name}`);
                        setIsDropdownOpen(false);
                      }}
                    >
                      <span className="airport-code">{airport.code}</span> - {airport.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="form-group">
            <label>Employee ID</label>
            <input type="text" placeholder="Enter your employee ID" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>

          <button className="login-button">Log In</button>
        </div>
      </div>
    </div>
  );
}