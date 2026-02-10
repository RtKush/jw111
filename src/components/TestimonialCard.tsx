import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  designation: string;
  avatar: string;
}

const TestimonialCard = ({ quote, name, designation, avatar }: TestimonialCardProps) => (
  <div className="bg-card rounded-2xl p-6 shadow-lg border border-border card-hover">
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} className="fill-primary text-primary" />
      ))}
    </div>
    <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">"{quote}"</p>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-primary-foreground font-bold text-sm">
        {avatar}
      </div>
      <div>
        <p className="font-semibold text-sm text-foreground">{name}</p>
        <p className="text-xs text-muted-foreground">{designation}</p>
      </div>
    </div>
  </div>
);

export default TestimonialCard;
