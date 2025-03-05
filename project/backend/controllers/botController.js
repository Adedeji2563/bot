const Bot = require("../models/Bot");
const { exec } = require("child_process");

exports.deployBot = async (req, res) => {
  const { owner, token, script } = req.body;
  if (!owner || !token || !script) return res.status(400).send("Missing data");

  const bot = new Bot({ owner, token, script });
  await bot.save();

  exec(`pm2 start ${script} --name bot-${token}`, (err) => {
    if (err) return res.status(500).send("Failed to start bot");
    res.send("✅ Bot deployed successfully!");
  });
};

exports.stopBot = async (req, res) => {
  const { token } = req.body;
  exec(`pm2 stop bot-${token}`, (err) => {
    if (err) return res.status(500).send("Failed to stop bot");
    res.send("✅ Bot stopped successfully!");
  });
};
