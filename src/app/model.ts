import { TodoItem } from "./todoitem";

export class Model {
  name: string;
  items: TodoItem[];

  constructor() {
    this.name ="Batuhan Kulfel";
    this.items = [
      { description: "kahvaltı", action: true },
      { description: "spor", action: true },
      { description: "alışveriş", action: false },
      { description: "akşam yemeği", action: false }
    ];
  }
}
