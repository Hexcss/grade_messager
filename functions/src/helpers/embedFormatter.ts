import { DiscordData } from "../interfaces/discord";

export const formatDataToEmbed = (data: DiscordData) => {
  const embed = {
    title: "📚 Student Submission Review",
    description: `Review results for [${data.student}'s submission](${data.repoURL}).`,
    color: data.testStatus === "Passed" ? 0x00ff00 : 0xff0000,
    author: {
      name: data.student,
      icon_url: data.avatarURL,
    },
    fields: [
      {
        name: "📁 Structure Check",
        value:
          data.structureCheck === "Passed"
            ? "No structural issues detected."
            : "Structural issues found.",
        inline: false,
      },
      {
        name: "📝 Test Status",
        value:
          data.testStatus === "Passed"
            ? "All tests passed successfully."
            : "Some tests failed.",
        inline: false,
      },
    ],
  };

  if (data.structureErrors.length > 0 && data.structureErrors[0] !== "") {
    embed.fields.push({
      name: "🚫 Structure Errors",
      value: data.structureErrors.join("\n"),
      inline: false,
    });
  }

  if (data.failedTests.length > 0 && data.failedTests.join("").trim() !== "") {
    embed.fields.push({
      name: "❌ Failed Tests",
      value: data.failedTests.join("\n"),
      inline: false,
    });
  }

  return embed;
};
