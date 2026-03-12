type SectionTitleProps = {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export default function SectionTitle({ subtitle, title, description, centered = true }: SectionTitleProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <span className="inline-block text-sm font-semibold uppercase tracking-widest gradient-text mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className={`text-text-secondary text-lg leading-relaxed ${centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
