type StampCardProps = {
  src: string;
  className?: string;
};

export function StampCard({ src, className }: StampCardProps) {
  return (
    <div
      className={`absolute top-0 w-40 h-52 bg-[#d9c5a3] p-3 shadow-sm ${className}`}
      style={{
        WebkitMaskImage: `
          radial-gradient(circle at 0% 14%, transparent 6px, white 6px),
          radial-gradient(circle at 100% 14%, transparent 6px, white 6px),
          radial-gradient(circle at 0% 50%, transparent 6px, white 6px),
          radial-gradient(circle at 100% 50%, transparent 6px, white 6px),
          radial-gradient(circle at 0% 86%, transparent 6px, white 6px),
          radial-gradient(circle at 100% 86%, transparent 6px, white 6px)
        `,
        WebkitMaskComposite: "source-in",
      }}
    >
      <img src={src} alt='' className='w-full h-full object-cover' />

      {/* Grain overlay */}
      <div
        className='absolute inset-0 opacity-10 mix-blend-multiply pointer-events-none'
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 150 150' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
