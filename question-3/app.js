import os from "os";
import fs from "fs/promises";

console.log("Free Memory:", os.freemem());
console.log("Total CPU Cores:", os.cpus().length);

async function run() {
  try {
    await fs.writeFile("data.txt", "Hello World");
    await fs.writeFile("Readme.md", "## This is first line in Readme");

    const data = await fs.readFile("data.txt", "utf-8");
    console.log(data);

    await fs.appendFile("data.txt", "\nThis is second line");
    await fs.unlink("Readme.md");
  } catch (error) {
    console.error(error.message);
  }
}

run();
