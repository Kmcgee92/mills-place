import express from "express";
import path from "path";
import dotenv from "dotenv";
const app = express();

const __dirname = path.resolve();
dotenv.config();

// Have Node serve the files for our built React app
// ONLY IF env is production do you need to serve the build folder for same url
// if its dev you can just proxy and start both services and you can use a script if you want to start them at the same time, but either way they run seperate as far as I know.
if (process.env.NODE_ENV === "production") {
  // this is some prisma jargon might want to hold on to it
  // main()
  //   .catch((e) => {
  //     console.error(e);
  //     process.exit(1);
  //   })
  //   .finally(async () => {
  //     await prisma.$disconnect();
  //   });

  app.use(express.static(path.join(__dirname, "client", "build")));

  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
} else {
  // nothing... your just gonna listen to the ports and react is proxied to hit this.
}

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// heroku is going to set its own ports here so yea set the port env
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serving react on http://localhost:${port}`);
});
