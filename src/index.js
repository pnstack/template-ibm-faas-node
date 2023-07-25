function main(args) {
  return {
    headers: {
      "Content-Type": "application/json",
    },
    statusCode: 200,
    body: {
      message: "Hello World!",
    },
  };
}

global.main = main;
