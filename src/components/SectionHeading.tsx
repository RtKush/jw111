interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  gradient?: boolean;
  center?: boolean;
}

const SectionHeading = ({ title, subtitle, gradient = false, center = true }: SectionHeadingProps) => (
  <div className={`mb-12 ${center ? "text-center" : ""}`}>
    <h2 className={`text-3xl sm:text-4xl font-extrabold ${gradient ? "gradient-text" : "text-foreground"}`}>
      {title}
    </h2>
    {subtitle && <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

export default SectionHeading;
