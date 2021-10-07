require("dotenv").config();

module.exports = {
  client: {
    includes: ["./src/**/*.{tsx,ts}"],
    tagName: "gql",
    name: "backend",
    service: {
      url: process.env.BACKEND_GRAPHQL_URL,
    },
  },
};
