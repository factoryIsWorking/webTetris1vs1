import config from "./config.json";

const options = {
	swaggerDefinition: {
		openapi: "3.0.0",
		info: {
			title: "Users API server with Swagger!",
			version: "v1",
			description: "A REST API using swagger and express.",
		},
		servers: [
			{
				url: `http://localhost:${config.USERS}`,
			},
		],
	},
	apis: [],
};

export default options;
