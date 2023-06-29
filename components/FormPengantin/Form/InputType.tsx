import { InputHTMLAttributes, useMemo } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
function InputType(props: InputProps) {
  const { label, ...children } = props;
  const renderMain = useMemo(() => {
    return (
      <div className="relative w-full mb-3">
        <label
          className="block mb-2 text-xs font-bold uppercase text-slate-600"
          htmlFor="grid-password"
        >
          {label}
        </label>
        <input
          className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-slate-300 text-slate-600 focus:outline-none focus:ring"
          {...children}
        />
      </div>
    );
  }, []);
  return renderMain;
}

export default InputType;
