"use client";

type FormFieldProps = {
  type?: string;
  title: string;
  placeholder: string;
  isTextArea?: boolean;
  state: string;
  setState: (value: string) => void;
};

function FormField({
  type,
  title,
  state,
  setState,
  placeholder,
  isTextArea,
}: FormFieldProps) {
  return (
    <div className="flex flex-col items-start w-full my-4">
      <label htmlFor="" className="w-full text-sm text-gray-400">
        {title}
      </label>
      {isTextArea ? (
        <textarea
          placeholder={placeholder}
          value={state}
          required
          className=""
          onChange={(e) => setState(e.target.value)}
        />
      ) : (
        <input
          type={type || "text"}
          placeholder={placeholder}
          value={state}
          required
          className="w-full bg-gray-100 p-3 rounded-lg focus:outline-purple-500"
          onChange={(e) => setState(e.target.value)}
        />
      )}
    </div>
  );
}

export default FormField;
