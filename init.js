const { spawn } = require("node:child_process");
const PORTS = require("./config.json").PORTS;
const targetScript = "test:live";

console.log("test script start!**************\n");

const Users = [
	"Users",
	spawn(`npm`, [
		"run",
		targetScript,
		`--ENVS=${JSON.stringify(PORTS)}`,
		"--prefix",
		"Users",
	]),
];

[Users].forEach(([proc, name]) => {
	proc.stderr.on("data", (e) => console.error(`${name}:  ` + e.toString()));
	proc.stdout.on("data", (e) => console.log(`${name}:  ` + e.toString()));
});
