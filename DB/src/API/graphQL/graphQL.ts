import { Application } from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

//schemas
const schema = buildSchema(`
type Query {
  check: String
}
`);

//resolvers
const resolvers = {
	check: "USERS graphql is ready",
	Query: {},
	Mutation: {},
};

//apply APIS

export default function applyGraphQl(app: Application, path: string): void {
	app.use(
		path,
		graphqlHTTP({
			schema: schema,
			rootValue: resolvers,
			graphiql: true,
			pretty: true,
		})
	);
}
