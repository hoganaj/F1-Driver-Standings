import React, { useState, useEffect } from 'react';
import './DriverStandings.css';

const DriverStandings = () => {
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    const fetchStandings = async () => {
      try {
        const response = await fetch('https://pitwall.redbullracing.com/api/stats/drivers/2023', {
          headers: {
            'X-API-KEY': process.env.REACT_APP_STANDINGS_API_KEY
          }
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("Fetched data:", data);
        setStandings(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchStandings();
  }, []);

  if (!Array.isArray(standings) || standings.length === 0) {
    return <p>Loading standings...</p>;
  }

  return (
    <div className="standings-container">
      <h2>Driver Standings</h2>
      <table className="standings-table">
        <thead>
          <tr>
            <th>Position</th>
            <th>Driver</th>
            <th>Team</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {standings.map((driver, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{`${driver.first_name} ${driver.last_name}`}</td>
              <td>{driver.season_team_name}</td>
              <td>{driver.season_points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DriverStandings;
