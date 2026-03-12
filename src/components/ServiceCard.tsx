type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
};

export default function ServiceCard({ icon, title, description, delay = 0 }: ServiceCardProps) {
  return (
    <div
      className="group relative p-8 rounded-2xl bg-white border border-border-subtle hover:border-border-hover hover:bg-bg-card-hover transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_30px_rgba(109,227,209,0.12)] shadow-sm"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-start/5 to-accent-end/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-accent-start/15 to-accent-end/15 text-accent-dark mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="font-heading text-xl font-bold mb-3 text-text-primary">{title}</h3>
        <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
