export const people = [
    {
      id:1,
      name:"jay",
      age:18,
      gender:"male"
    },
    {
      id:2,
      name:"jayTwo",
      age:18,
      gender:"male"
    },
    {
      id:3,
      name:"three",
      age:18,
      gender:"male"
    },
    {
      id:4,
      name:"four",
      age:18,
      gender:"male"
    },
    {
      id:5,
      name:"five",
      age:18,
      gender:"male"
    },
  ]

  export const findPerson = id =>{
      const filteredPeople =  people.filter(person => person.id === id);
      return filteredPeople[0];
  }

  export const addPerson = (name,age,gender) => {
      const newPerson = {
          id: people.length +1,
          name,
          age,
          gender
      };
      people.push(newPerson);
      return newPerson;
  }

  