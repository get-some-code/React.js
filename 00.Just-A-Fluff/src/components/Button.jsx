export default function Button({ buttonText = "default", click }) {
    return (
        <button
            onClick={click}
            className="px-6 py-2 text-white rounded-lg bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 active:scale-95 transition-all font-semibold shadow-lg">
            {buttonText}
        </button>

    );
};