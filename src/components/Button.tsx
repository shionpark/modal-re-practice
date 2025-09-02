import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick: () => void;
}

function Button({ children, onClick, ...props }: ButtonProps) {
  return (
    <button
      className="cursor-pointer rounded-xl border border-gray-300 bg-gray-200 px-4 py-3 text-black hover:border-blue-500"
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
