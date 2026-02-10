import { Link } from "react-router-dom";

interface GradientCardProps {
  title: string;
  description?: string;
  buttonText: string;
  buttonTo: string;
}

const GradientCard = ({ title, description, buttonText, buttonTo }: GradientCardProps) => (
  <div className="gradient-bg rounded-3xl p-8 md:p-10 text-primary-foreground">
    <h3 className="text-2xl font-bold mb-3">{title}</h3>
    {description && <p className="opacity-80 mb-6 leading-relaxed">{description}</p>}
    <Link
      to={buttonTo}
      className="inline-block bg-card text-foreground px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
    >
      {buttonText}
    </Link>
  </div>
);

export default GradientCard;
