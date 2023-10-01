import axios from "axios";

export const postToDiscord = async (embed: any) => {
  const webhookURL = process.env.DISCORD_WEBHOOK || "";
  try {
      await axios.post(webhookURL, {
          embeds: [embed]
      });
  } catch (error) {
      console.error("Error posting to Discord:", error);
  }
};
