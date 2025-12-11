import { useState } from "react";

export default function Form({ onAddCustomer }) {
    const [name, setName] = useState("");
    const [service, setService] = useState("");

    const handleAdd = () => {
        if (!name.trim() || !service) return;
        onAddCustomer?.({ name: name.trim(), service });
        setName("");
        setService("");
    };

    return (
        <div className="w-full max-w-xs">
            <div className="bg-[#111114] border border-white/6 rounded-2xl p-6 shadow-[0_18px_30px_rgba(0,0,0,0.6)]">
                <h2 className="text-xl font-semibold text-indigo-400 mb-4">Add to Queue</h2>

                <input
                    type="text"
                    value={name}
                    placeholder="Customer Name"
                    className="w-full mb-3 px-3 py-2 bg-transparent border border-white/10 rounded-md text-sm placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    onChange={(e) => setName(e.target.value)}
                />

                <div className="relative mb-4">
                    <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="appearance-none w-full px-3 py-2 bg-[#111114] border border-white/10 rounded-md text-sm text-white/90 focus:outline-none focus:ring-2 focus:ring-indigo-500 [color-scheme:dark]"
                    >
                        <option value="">Select Service</option>
                        <option value="consultancy">Consultancy</option>
                        <option value="payment">Payment</option>
                        <option value="support">Support</option>
                    </select>

                    <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                            <path d="M6 9l6 6 6-6" stroke="white" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                </div>

                <button
                    onClick={handleAdd}
                    className="w-full flex items-center justify-center gap-3 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-md shadow"
                    type="button"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-none" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="10" cy="8" r="3" />
                        <path d="M10 14c-3 0-5 2-5 4v1h10v-1c0-2-2-4-5-4z" />
                        <path d="M19 6h-2V4h-2v2h-2v2h2v2h2V8h2V6z" fill="currentColor" transform="scale(1.4) translate(-5 -3)" />
                    </svg>

                    <span className="text-sm font-medium">Add Customer</span>
                </button>
            </div>
        </div>
    );
}
