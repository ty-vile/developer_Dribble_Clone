"use client";
import { useCallback, useRef, ReactNode } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

function Modal({ children }: { children: ReactNode }) {
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.push("/");
  }, [router]);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === overlay.current && onDismiss) {
        console.log(e, overlay);
        onDismiss();
      }
    },
    [onDismiss, overlay]
  );

  return (
    <div
      ref={overlay}
      className="fixed z-100 top-0 left-0 bg-black/80 h-screen w-screen"
      onClick={handleClick}
    >
      <button
        type="button"
        onClick={onDismiss}
        className="absolute top-4 right-8 bg-purple-500 p-4 opacity-100 rounded-full hover:scale-95 transition-fast"
      >
        <Image
          src="/close.svg"
          width={17}
          height={17}
          alt="Close modal button"
        />
      </button>
      <div
        ref={wrapper}
        className="flex justify-start items-center flex-col absolute h-[92%] w-full bottom-0 bg-white rounded-t-3xl lg:px-40 px-8 pt-14 pb-72 overflow-auto;"
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
