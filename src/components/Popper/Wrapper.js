function Wrapper({ children, className }) {
  return (
    <div
      className={`w-full rounded-lg bg-[#fafafa] dark:bg-[#0b0e11] m-h-[500px] min-h-[200px] drop-shadow pt-2 pb-[10px] ${className}`}
    >
      {children}
    </div>
  );
}

export default Wrapper;
