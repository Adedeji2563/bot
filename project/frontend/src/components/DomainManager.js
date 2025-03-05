import React, { useState, useEffect } from "react";
import axios from "axios";

const DomainManager = () => {
  const [domains, setDomains] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [domain, setDomain] = useState("");

  useEffect(() => {
    fetchDomains();
  }, []);

  const fetchDomains = async () => {
    try {
      const response = await axios.get("https://web3-obgn.onrender.com/domains");
      setDomains(response.data);
    } catch (error) {
      console.error("Error fetching domains:", error);
    }
  };

  const addDomain = async () => {
    try {
      await axios.post("https://web3-obgn.onrender.com/domains/add", {
        email,
        password,
        domain,
      });
      alert("Domain Assigned!");
      fetchDomains();
    } catch (error) {
      console.error("Error assigning domain:", error);
    }
  };

  return (
    <div>
      <h2>Assign Domains</h2>
      <input
        type="email"
        placeholder="User Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Create Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Domain Name"
        onChange={(e) => setDomain(e.target.value)}
      />
      <button onClick={addDomain}>Assign Domain</button>

      <h3>Assigned Domains</h3>
      <ul>
        {domains.map((dom) => (
          <li key={dom.domain}>{dom.domain} - {dom.user}</li>
        ))}
      </ul>
    </div>
  );
};

export default DomainManager;
