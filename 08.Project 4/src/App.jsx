import Form from "./components/Form";
import UserService from "./components/UserService";
import { useState } from "react";

export default function App() {
  const [queue, setQueue] = useState([]);

  // called by Form when user clicks "Add Customer"
  const handleAddCustomer = ({ name, service }) => {
    if (!name?.trim() || !service) return;

    const newItem = {
      id: Date.now(),
      name: name.trim(),
      service,
      status: "waiting",
    };

    // add to bottom
    setQueue((prev) => [...prev, newItem]);
  };

  const handleRemoveCustomer = (id) => {
    setQueue((prevQueue) => prevQueue.filter((item) => item.id !== id));
  };
  const handleServe = (id, newStatus) => {
    setQueue((prevQueue) =>
      prevQueue.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="py-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-blue-500 drop-shadow-lg">
          Queue Management System
        </h1>
        <p className="mt-3 text-center text-slate-300">Manage your customers efficiently</p>
      </header>

      <main className="flex gap-10 pl-24 mt-10">
        <div className="w-80">
          <div className="h-[45vh] bg-[#0e0e10] rounded-2xl shadow-inner shadow-black/50 p-6">
            <div className="mt-4">
              <Form onAddCustomer={handleAddCustomer} />
            </div>
          </div>
        </div>

        <div className="w-[60rem]">
          <div className="bg-[#0e0e10] rounded-2xl shadow-inner shadow-black/50 p-6 h-[45vh] overflow-y-auto space-y-4">

            {queue.length === 0 ? (
              <p className="text-sm text-gray-400">No customers yet.</p>
            ) : (
              queue.map((c) => (
                <UserService
                  key={c.id}
                  id={c.id}
                  userName={c.name}
                  serviceSelected={c.service}
                  serviceStatus={c.status}
                  onRemove={handleRemoveCustomer}
                  onServe={handleServe}
                />
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
