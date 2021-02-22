import {people,findPerson, addPerson} from "./db";

const resolvers = {
    Query: {
      people: () => people!,
      person: (_,{id}) => findPerson(id)
    },
    Mutation:{
      addPerson: (_,{name,age,gender})=>addPerson(name,age,gender)
    }
  };

export default resolvers;