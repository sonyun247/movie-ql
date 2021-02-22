const jay = {
  name:"jay",
  age:18,
  gender:"male"
}

const resolvers = {
    Query: {
      jay: () => jay
    }
  };

export default resolvers;