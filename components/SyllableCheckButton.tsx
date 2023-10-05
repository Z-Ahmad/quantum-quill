import React from 'react'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import { TbTallymarks } from "react-icons/tb";

export default function SyllableCheckButton() {
  const {pending} = useFormStatus()

  return (
    <div>
      <button
        type="submit"
        className="group flex items-center justify-center gap-2 h-[3rem] w-[15rem] bg-gray-500 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-105 hover:bg-green-500 active:scale-105  disabled:scale-100 disabled:bg-opacity-65"
        disabled={pending}
      >
        {pending ? (
          <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
        ) : (
          <>
            Check Syllable Counts <TbTallymarks />
          </>
        )}
      </button>
    </div>
  );
}
