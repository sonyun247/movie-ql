import {people,findPerson} from "./db";

const resolvers = {
    Query: {
      people: () => people!,
      person: (_,{id}) => findPerson(id)
    }
  };

export default resolvers;