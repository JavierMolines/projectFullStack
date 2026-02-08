const reset = "\x1b[0m";
const red = "\x1b[31m";
const green = "\x1b[32m";
const yellow = "\x1b[33m";
const blue = "\x1b[34m";
const magenta = "\x1b[35m";
const cyan = "\x1b[36m";

const message = {
	red: (message: string) => {
		return `${red}${message}${reset}`;
	},
	green: (message: string) => {
		return `${green}${message}${reset}`;
	},
	yellow: (message: string) => {
		return `${yellow}${message}${reset}`;
	},
	blue: (message: string) => {
		return `${blue}${message}${reset}`;
	},
	magenta: (message: string) => {
		return `${magenta}${message}${reset}`;
	},
	cyan: (message: string) => {
		return `${cyan}${message}${reset}`;
	},
};

export { message };
