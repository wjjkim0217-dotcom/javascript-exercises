const getAge = function(person) {
  const endYear = person.yearOfDeath === undefined
    ? new Date().getFullYear()
    : person.yearOfDeath;
  return endYear - person.yearOfBirth;
};

const findTheOldest = function(people) {
  return people.reduce((oldest, person) =>
    getAge(person) > getAge(oldest) ? person : oldest
  );
};

// Do not edit below this line
module.exports = findTheOldest;
