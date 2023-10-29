export class TODOItem {
    constructor(id:string,title: string, description: string,dueDate:string) {
      this.id = 
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
    }
  
    public id: string;
    public title: string;
    public description: string;
    public dueDate?: string;
    public completed?: boolean;
  }