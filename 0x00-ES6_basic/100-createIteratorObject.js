export default function createIteratorObject(report) {
  const { allEmployees } = report;

  const employeeIterator = {
    employees: [],
    currentIdx: 0,

    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (this.currentIdx < this.employees.length) {
        const value = this.employees[this.currentIdx];
        this.currentIdx += 1;
        return { value, done: false };
      }
      return { done: true };
    },
  };

  if (!allEmployees || typeof allEmployees !== 'object') {
    throw new Error('Invalid report object structure');
  }

  for (const department of Object.values(allEmployees)) {
    employeeIterator.employees.push(...department);
  }

  return employeeIterator;
}
