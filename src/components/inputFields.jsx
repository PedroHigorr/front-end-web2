'use client';

export default function InputField({ id, label, type = "text", value, onChange }) {
    return (
        <div className="relative py-2">
            <input
                id={id}
                className="block px-2.5 pb-1 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-cdark appearance-none focus:outline-none focus:ring-0 focus:border-cpurple peer"
                type={type}
                placeholder=" "
                value={value}
                onChange={onChange}
            />
            <label
                htmlFor={id}
                className="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-transparent px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
                {label}
            </label>
        </div>
    );
}