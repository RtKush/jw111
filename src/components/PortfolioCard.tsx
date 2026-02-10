interface PortfolioCardProps {
  image: string;
  title: string;
}

const PortfolioCard = ({ image, title }: PortfolioCardProps) => (
  <div className="group card-hover rounded-2xl overflow-hidden bg-card shadow-lg border border-border">
    <div className="aspect-[4/3] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-foreground">{title}</h3>
    </div>
  </div>
);

export default PortfolioCard;
