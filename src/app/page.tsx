import { Metadata } from "next";
import { TodoList } from "@/components/TodoList";

export const metadata: Metadata = {
  title: "Todo List App",
  description: "A simple todo list application with optimistic updates",
  openGraph: {
    title: "Todo List App",
    description: "A simple todo list application with optimistic updates",
    type: "website",
    locale: "en_US",
    siteName: "Todo List App",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-2">
      <div className="max-w-2xl mx-auto px-4">
        <TodoList />
      </div>
    </div>
  );
}
