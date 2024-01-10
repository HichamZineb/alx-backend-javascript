// Define interfaces with a brand property
interface MajorCredits {
  credits: number;
  __brand: 'MajorCredits'; // Unique brand property
}

interface MinorCredits {
  credits: number;
  __brand: 'MinorCredits'; // Unique brand property
}

// Functions to sum major and minor credits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits, __brand: 'MajorCredits' };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits, __brand: 'MinorCredits' };
}

// Example usage:
const majorSubject1: MajorCredits = { credits: 3, __brand: 'MajorCredits' };
const majorSubject2: MajorCredits = { credits: 4, __brand: 'MajorCredits' };

const minorSubject1: MinorCredits = { credits: 2, __brand: 'MinorCredits' };
const minorSubject2: MinorCredits = { credits: 1, __brand: 'MinorCredits' };

const totalMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
const totalMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);

console.log('Total Major Credits:', totalMajorCredits);
console.log('Total Minor Credits:', totalMinorCredits);
