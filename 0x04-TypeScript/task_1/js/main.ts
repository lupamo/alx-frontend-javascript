interface Teacher {
	firstName: string;
	lastName: string;
	fullTimeEmployee: boolean;
	location: string;
	yearsOfExperience?: number;
	[key: string]: any;
  }

interface Directors extends Teacher {
  numberOfReports: number;
}
  
  
  // Example usage:
  const teacher3: Teacher = {
	firstName: 'John',
	fullTimeEmployee: false,
	lastName: 'Doe',
	location: 'London',
	contract: false,
  };
  
  console.log(teacher3);
  