import {people,findPerson, addPerson, deletePerson} from "./db";

const resolvers = {
    Query: {
      people: () => people!,
      person: (_,{id}) => findPerson(id)
    },
    Mutation:{
      addPerson: (_,{name,age,gender})=>addPerson(name,age,gender),
      deletePerson: (_,{id})=>deletePerson(id)
    }
  };

export default resolvers;