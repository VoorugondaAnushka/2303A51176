const axios = require("axios");

async function Log(stack, level, packageName, message, token = "") {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack,
        level,
        package: packageName,
        message,
      },
      token
        ? {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        : {}
    );

    return response.data;
  } catch (error) {
    console.error(error.response?.data || error.message);
  }
}

module.exports = Log;