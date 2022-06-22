  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];

const oldEnough = people.filter(person => person.age >= 21);
                                //Greater than equal to 21 (as a reminder).
console.log(oldEnough);

// Result: [ { name: 'Michael', age: 23 } ]

//My solution to show 'Paul' in the terminal:
const paul = people.filter(person => person.age >= 18)
console.log(paul);

//Result: [ { name: 'Michael', age: 23 }, { name: 'Paul', age: 18 } ]

//Teacher's code for showing 'Paul' in terminal (with some small changes):
const paul2 = people.filter(p => p.name === 'Paul') //[0] If I want to access the object itself, I could simply append [0] to the end up here to get the first and only element in the resulting array. 
console.log(paul2);

//Result: [ { name: 'Paul', age: 18 } ]

// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];


// const candidates = students.filter(student => {
//   let strongSkills = student.skills.filter(skills => skills.yrsExperience >= 5); //This filter will return an array of only those skills in which the student has at leaast five years of experience.
//   return strongSkills.length > 0; 

// })

const has5yearsExp = skill => skill.yrsExperience >= 5;
const hasStrongSkills = student => student.skills.filter(has5yearsExp).length > 0; 
const candidates = students.filter(hasStrongSkills);
console.log(candidates);