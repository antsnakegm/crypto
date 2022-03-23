{
	"name": "Code - OSS",

	// Image contents: https://github.com/microsoft/vscode-dev-containers/blob/master/repository-containers/images/github.com/microsoft/vscode/.devcontainer/base.Dockerfile
	"image": "mcr.microsoft.com/vscode/devcontainers/repos/microsoft/vscode:branch-main",
	"overrideCommand": false,
	"runArgs": [ "--init", "--security-opt", "seccomp=unconfined", "--shm-size=1g"],

	"settings": {
		"resmon.show.battery": false,
		"resmon.show.cpufreq": false
	},

	// noVNC, VNC
	"forwardPorts": [6080, 5901],
	"portsAttributes": {
		"6080": {
			"label": "VNC web client (noVNC)",
			"onAutoForward": "silent"
		},
		"5901": {
			"label": "VNC TCP port",
			"onAutoForward": "silent"
		}
	},

	"extensions": [
		"dbaeumer.vscode-eslint",
		"mutantdino.resourcemonitor"
	],

	// Optionally loads a cached yarn install for the repo
	"postCreateCommand": ".devcontainer/cache/restore-diff.sh",

	"remoteUser": "node",

	"hostRequirements": {
		"memory": "8gb"
	}
}
