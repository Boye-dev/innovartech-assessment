import { Suspense } from "react";
import TaskTable from "@/components/TaskTable";
import TaskTableSkeleton from "@/components/TaskTableSkeleton";
import { Sidebar } from "@/components/Sidebar";
export default function Tasks() {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-4 md:p-8 overflow-auto">
        <h1 className="text-xl md:text-2xl font-bold mb-4 text-black">Tasks</h1>
        <Suspense fallback={<TaskTableSkeleton />}>
          <TaskTable />
        </Suspense>
      </main>
    </div>
  );
}
