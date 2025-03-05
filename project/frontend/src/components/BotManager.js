import React, { useState, useEffect } from "react";
import axios from "axios";

const BotManager = () => {
  const [bots, setBots] = useState([]);
  const [token, setToken] = useState("");
  const [script, setScript] = useState("");

  useEffect(() => {
    fetchBots();
  }, []);

  const fetchBots = async () => {
    try {
      const response = await axios.get("https://web3-obgn.onrender.com/bots");
      setBots(response.data);
    } catch (error) {
      console.error("Error fetching bots:", error);
    }
  };

  const deployBot = async () => {
    try {
      await axios.post("https://web3-obgn.onrender.com/bots/deploy", {
        token,
        script,
      });
      alert("Bot Deployed!");
      fetchBots();
    } catch (error) {
      console.error("Error deploying bot:", error);
    }
  };

  const stopBot = async (token) => {
    try {
      await axios.post("https://web3-obgn.onrender.com/bots/stop", { token });
      alert("Bot Stopped!");
      fetchBots();
    } catch (error) {
      console.error("Error stopping bot:", error);
    }
  };

  return (
    <div>
      <h2>Manage Your Bots</h2>
      <input
        type="text"
        placeholder="Bot Token"
        onChange={(e) => setToken(e.target.value)}
      />
      <input
        type="text"
        placeholder="Script Path"
        onChange={(e) => setScript(e.target.value)}
      />
      <button onClick={deployBot}>Deploy Bot</button>

      <h3>Deployed Bots</h3>
      <ul>
        {bots.map((bot) => (
          <li key={bot.token}>
            {bot.token} - {bot.status}
            <button onClick={() => stopBot(bot.token)}>Stop</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BotManager;
