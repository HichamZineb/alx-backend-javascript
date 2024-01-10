
// Given interface Teacher
interface Teacher {
  firstName: string;
  lastName: string;
  location: string;
  fullTimeEmployee: boolean;
}

// Write an interface named Directors that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example usage
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
