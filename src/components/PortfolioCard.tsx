interface PortfolioCardProps {
  image: string;
  title: string;
}

const PortfolioCard = ({ image, title }: PortfolioCardProps) => (
  <div className="group transition-all duration-300 hover:-translate-y-2">
    
    {/* Image Card */}
    <div className="rounded-2xl overflow-hidden shadow-lg border border-border bg-card">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
    </div>

    {/* Title Below Image (Separate from Card) */}
    <div className="mt-4 text-center">
      <h3 className="text-lg font-semibold text-foreground">
        {title}
      </h3>
    </div>

  </div>
);

export default PortfolioCard;
