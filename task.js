export class Task {
    constructor(id, description, status) {
      this.id = id;
      this.description = description;
      this.status = status;
    }
  
    toString() {
      return `Task ID: ${this.id}\nDescription: ${this.description}\nStatus: ${this.status}`;
    }
  }