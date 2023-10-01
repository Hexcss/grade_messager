import * as express from "express";
import { formatDataToEmbed } from "../helpers/embedFormatter";
import { postToDiscord } from "../helpers/discord";
import { DiscordData } from "../interfaces/discord";

const router = express.Router();

router.post('/logJson', async (req, res) => {
  const data: DiscordData = req.body;
  const discordEmbed = formatDataToEmbed(data);
  await postToDiscord(discordEmbed);
  res.send("JSON received and logged.");
});

export default router;
