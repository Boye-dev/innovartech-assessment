import { create } from "zustand";

interface Task {
  id: number;
  title: string;
  status: string;
}

interface TaskStore {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (id: number) => void;
  updateTask: (id: number, updatedTask: Partial<Task>) => void;
}

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [
    { id: 1, title: "Start Assessment", status: "In Progress" },
    { id: 2, title: "Pass Assement", status: "Completed" },
    { id: 3, title: "Resume at office", status: "Not Started" },
  ],
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  removeTask: (id) =>
    set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),
  updateTask: (id, updatedTask) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task
      ),
    })),
}));
