import { useState, useEffect } from "react";

export default function UserService({
    id,
    userName,
    serviceSelected,
    serviceStatus = "waiting",
    buttonText = "Serve",
    onRemove,
    onServe,
}) {
    const [localStatus, setLocalStatus] = useState(serviceStatus);
    const [localButton, setLocalButton] = useState(buttonText);

    useEffect(() => {
        setLocalStatus(serviceStatus);
    }, [serviceStatus]);

    useEffect(() => {
        setLocalButton(buttonText ?? "Serve");
    }, [buttonText]);

    const handleServe = () => {
        if (localButton === "Serve") {
            setLocalButton("Complete");
            setLocalStatus("serving");
            onServe?.(id, "serving");
            return;
        }

        if (localButton === "Complete") {
            setLocalButton("");
            setLocalStatus("completed");
            onServe?.(id, "completed");
            return;
        }
    };

    return (
        <div className="w-full bg-[#111] border border-white/10 rounded-lg p-4 flex items-start justify-between">
            <div>
                <h1 className="text-lg font-semibold text-white">{userName}</h1>
                <p className="text-sm text-gray-300 mt-1">Service: {serviceSelected}</p>
                <p
                    className={`text-sm mt-2 ${localStatus === "waiting"
                        ? "text-yellow-400"
                        : localStatus === "completed"
                            ? "text-blue-400"
                            : localStatus === "served" || localStatus === "serving"
                                ? "text-green-400"
                                : "text-gray-400"
                        }`}
                >
                    {localStatus}
                </p>
            </div>
            <div className="flex items-center gap-2">
                {localButton ? (
                    <button
                        className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-1 rounded-md"
                        onClick={handleServe}
                    >
                        {localButton}
                    </button>
                ) : (
                    <div className="text-sm text-gray-400 px-4 py-1 rounded-md">Done</div>
                )}
                <button
                    className="bg-red-500 hover:bg-red-600 p-2 rounded-md flex items-center justify-center"
                    onClick={() => onRemove?.(id)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-white"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M9 3h6l1 1h5v2h-1v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6H3V4h5l1-1Zm1 5v10h2V8h-2Zm4 0v10h2V8h-2Z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
