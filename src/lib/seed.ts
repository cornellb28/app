const { PrismaClient } = require("@prisma/client");
const tracksData = require("../data/tracks.json");

const prisma = new PrismaClient();

async function main() {
  console.log("Starting Seeding...");

  for (const rec of tracksData) {
    await prisma.track.create({ data: rec });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnet());

export {};
