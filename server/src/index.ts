import { createApp } from "./app.js";

const port = Number(process.env.PORT ?? 8787);
createApp().listen(port, () => {
  console.log(`信息库 MCP server: http://localhost:${port}/mcp`);
});
