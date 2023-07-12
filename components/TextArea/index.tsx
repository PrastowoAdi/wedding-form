import React, { forwardRef, TextareaHTMLAttributes, useMemo } from "react";

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  value?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, InputProps>(
  ({ label, value, ...children }, ref) => {
    const renderMain = useMemo(() => {
      return (
        <div className="relative w-full mb-3">
          <label
            className="block mb-2 text-xs font-bold uppercase text-slate-600"
            htmlFor="grid-password"
          >
            {label}
          </label>
          <textarea
            value={value}
            className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-slate-300 text-slate-600 focus:outline-none focus:ring"
            ref={ref}
            {...children}
          />
        </div>
      );
    }, [label, value, ref, children]);
    return renderMain;
  }
);

TextArea.displayName = "TextArea";
export default TextArea;
