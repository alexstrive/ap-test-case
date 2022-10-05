// Require the framework and instantiate it
import fastify from "fastify";
import localData from "./data.json" assert { type: "json" };
import cors from "@fastify/cors";

const f = fastify({ logger: true });

await f.register(cors);

// Declare a route
f.get("/", async (request, reply) => {
  return localData;
});

try {
  await f.listen({ port: 3000 });
} catch (err) {
  f.log.error(err);
  process.exit(1);
}
