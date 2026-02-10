import { Link } from "react-router-dom";

interface PageBannerProps {
  title: string;
  breadcrumb: string;
}

const PageBanner = ({ title, breadcrumb }: PageBannerProps) => (
  <section className="gradient-bg py-20">
    <div className="section-container text-center text-primary-foreground">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">{title}</h1>
      <p className="text-sm opacity-80">
        <Link to="/" className="hover:underline">Home</Link> / {breadcrumb}
      </p>
    </div>
  </section>
);

export default PageBanner;
