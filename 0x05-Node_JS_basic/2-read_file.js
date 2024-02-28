const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');
    const students = lines.map(line => line.split(',')).filter(student => student.length === 4);

    const studentsCount = students.length;
    console.log(`Number of students: ${studentsCount}`);

    const fields = {};
    students.forEach(student => {
      const field = student[3].trim();
      if (!fields[field]) fields[field] = [];
      fields[field].push(student[0]);
    });

    Object.entries(fields).forEach(([field, names]) => {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    });
  } catch (err) {
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;
