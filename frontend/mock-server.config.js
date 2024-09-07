/** @type {import('mock-config-server').MockServerConfig} */
const mockServerConfig = {
  rest: {
    baseUrl: "/api",
    dataBase: "./db/productsDataBase.json",
    configs: [
      {
        path: "/user",
        method: "get",
        routes: [{ data: { emoji: "🦁", name: "Nursultan" } }]
      }
    ]
  }
};

export default mockServerConfig;
