export type Todo={
    id:number;
    todo:string;
};
export type TodoContextType={
    todo:Todo[];
    AddItem:(todoLabel:Todo)=>void;
    DeleteItem:(todoId:number)=>void;
}