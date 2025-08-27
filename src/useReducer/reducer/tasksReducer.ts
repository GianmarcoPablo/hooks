
interface Todo {
   id: number;
   text: string;
   completed: boolean;
}

interface TaskState {
   todos: Todo[],
   length: number,
   completed: number,
   pending: number
}


export type TaskAction =
   | { type: "ADD_TODO", payload: string }
   | { type: "TOGGLE_TODO", payload: number }
   | { type: "DELETE_TODO", payload: number }

export const getTasksInitialState = (): TaskState => {
   const localStorageState = localStorage.getItem("tasks-state")

   if (!localStorageState) {
      return {
         todos: [],
         completed: 0,
         pending: 0,
         length: 0
      }
   }

   return JSON.parse(localStorageState)
}

export const taskReducer = (state: TaskState, action: TaskAction): TaskState => {

   switch (action.type) {
      case "ADD_TODO": {
         const newTodo: Todo = {
            id: Date.now(),
            completed: false,
            text: action.payload
         }

         return {
            ...state,
            todos: [...state.todos, newTodo],
            length: state.todos.length + 1,
            completed: state.completed, // no cambia
            pending: state.pending + 1, // aumenta en 1
         }
      }
      case "DELETE_TODO": {

         const updatedTodos = state.todos.filter(todo => todo.id !== action.payload)

         return {
            ...state,
            todos: updatedTodos,
            length: updatedTodos.length,
            completed: updatedTodos.filter(todo => todo.completed).length,
            pending: updatedTodos.filter(todo => !todo.completed).length,
         }
      }
      case "TOGGLE_TODO": {

         const updatedTodos = state.todos.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)

         return {
            ...state,
            todos: updatedTodos,
            length: updatedTodos.length,
            completed: updatedTodos.filter(todo => todo.completed).length,
            pending: updatedTodos.filter(todo => !todo.completed).length,
         }
      }
      default:
         return state
   }

   return state
}
