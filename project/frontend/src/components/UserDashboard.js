import React, { useState, useEffect } from "react";
import axios from "axios";

const UserDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://web3-obgn.onrender.com/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div>
      <h2>User Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Domain</th>
            <th>RAM</th>
            <th>CPU</th>
            <th>Storage</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.email}>
              <td>{user.email}</td>
              <td>{user.domain}</td>
              <td>{user.ram} MB</td>
              <td>{user.cpu}%</td>
              <td>{user.storage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDashboard;
