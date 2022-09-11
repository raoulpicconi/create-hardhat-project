const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const prompts = require("prompts");
const { copyFolderSync, rmdirRecursiveSync, colors } = require("./utils.js");

async function createProject(projectName) {
  const templatesDir = path.join(__dirname, "..", "template");
  copyFolderSync(templatesDir, projectName, [
    path.join(templatesDir, "node_modules"),
  ]);
  rmdirRecursiveSync(path.join(projectName, ".git"));
}

async function main(projectName) {
  if (!projectName) {
    projectName = (
      await prompts({
        type: "text",
        message: "Enter name of your project",
        name: "projectName",
        initial: "my-project",
      })
    ).projectName;
  }

  projectName = projectName.toLowerCase().replace(/ |_/g, "-");

  console.log(`\n${colors.green(">>")} Creating your folder structure...`);

  if (fs.existsSync(path.join(process.cwd(), projectName))) {
    console.log("\x1b[31m", "project with the same name already exist");
    process.exit(0);
  } else {
    await createProject(projectName);
  }

  console.log(`${colors.green(">")} Successfully created ${projectName}`);
  process.chdir(`${projectName}`);
  console.log(`${colors.green(">>")}Installing dependency...`);
  execSync("npm install", (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
  console.log(`${colors.green(">")}Successfully installed!`);
  console.log(`\n${colors.green(">>")} \`cd ${projectName}\` to get started! ✨
  \n\n${colors.cyan(
    "If you appreciate this project, give this repository a ⭐ on Github:"
  )}\n
  https://github.com/AGGINGI_LA_PATH`);
}

module.exports = { main };
