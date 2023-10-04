import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { GiScrollQuill } from "react-icons/gi";

export default function LineGenerationButton() {
  const { pending } = useFormStatus();

  return (
    <div>
      <button
        type="submit"
        className="group flex items-center justify-center gap-2 h-[3rem] w-[15rem] bg-blue-500 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-blue-800 active:scale-105  disabled:scale-100 disabled:bg-opacity-65"
        disabled={pending}
      >
        {pending ? (
          <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
        ) : (
          <>
            Generate Line 1 <GiScrollQuill />
          </>
        )}
      </button>
    </div>
  );
}
