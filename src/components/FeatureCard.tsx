import { type LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}



const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
  <div className="bg-card rounded-2xl p-6 shadow-lg card-hover border border-border group">
    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
      <Icon className="text-primary-foreground" size={24} />
    </div>
    <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
    <span className="text-sm font-semibold text-primary group-hover:underline cursor-pointer">
      Discover now →
    </span>
  </div>
);

export default FeatureCard;
