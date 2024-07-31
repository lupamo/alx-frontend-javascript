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

interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

interface IStudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}
  
  // Interface for the StudentClass methods
interface IStudentClass {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements IStudentClass {
	private firstName: string;
	private lastName: string;
  
	constructor(firstName: string, lastName: string) implements IStudentConstructor {
	  this.firstName = firstName;
	  this.lastName = lastName;
	}
  
	workOnHomework(): string {
	  return "Currently working";
	}
  
	displayName(): string {
	  return this.firstName;
	}
  }
  