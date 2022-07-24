const { spawn } = require("node:child_process");
const config = require("./config.json");
const targetScript = "test:live";

console.log("test script start!**************\n");

const Users = spawn(`npm`, [
	"run",
	targetScript,
	`--ENVS=${JSON.stringify(config)}`,
	"--prefix",
	"Users",
]);

[[Users, "Users"]].forEach(([proc, name]) => {
	proc.stderr.on("data", (e) => console.error(`${name}:  ` + e.toString()));
	proc.stdout.on("data", (e) => console.log(`${name}:  ` + e.toString()));
});
