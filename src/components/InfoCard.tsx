interface InfoCardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const InfoCard = ({ title, children, className = "" }: InfoCardProps) => {
  return (
    <div
      className={`rounded-xl border-black/10 border hover:-translate-y-1 transition-all ${className}`}
    >
      {title && (
        <h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4">{title}</h3>
      )}
      {children}
    </div>
  );
};
