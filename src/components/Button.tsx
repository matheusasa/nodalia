import Link from 'next/link';

type ButtonProps = {
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
};

export default function Button({ href, variant = 'primary', children, className = '', type = 'button', onClick }: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 cursor-pointer';

  const variants = {
    primary: 'px-8 py-3.5 bg-gradient-to-br from-accent-start to-accent-dark text-white shadow-[0_0_25px_rgba(109,227,209,0.3)] hover:shadow-[0_0_40px_rgba(109,227,209,0.5)] hover:-translate-y-0.5',
    secondary: 'px-8 py-3.5 bg-bg-tertiary text-text-primary border border-border-subtle hover:border-border-hover hover:bg-bg-card-hover hover:-translate-y-0.5',
    outline: 'px-8 py-3.5 border border-border-subtle text-text-primary hover:border-accent-start hover:text-accent-dark hover:-translate-y-0.5',
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }

  return <button type={type} onClick={onClick} className={classes}>{children}</button>;
}
