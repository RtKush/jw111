import { Link } from "react-router-dom";

interface PageBannerProps {
  title: string;
  breadcrumb: string;
}

const PageBanner = ({ title, breadcrumb }: PageBannerProps) => (
  <section className="py-10 bg-background">
    <div className="section-container text-center">
      
      {/* Gradient Title */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
        {title}
      </h1>

      {/* Divider */}
      <div className="w-16 h-1 mx-auto bg-primary rounded-full mb-6"></div>

      {/* Breadcrumb */}
      <p className="text-sm sm:text-base text-muted-foreground">
        <Link 
          to="/" 
          className="hover:text-primary transition"
        >
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="font-medium text-foreground">
          {breadcrumb}
        </span>
      </p>

    </div>
  </section>
);

export default PageBanner;
