import { Link } from "react-router-dom";
import PageBanner from "@/components/PageBanner";
import SectionHeading from "@/components/SectionHeading";
import PortfolioCard from "@/components/PortfolioCard";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";
import p7 from "@/assets/portfolio-7.jpg";
import p8 from "@/assets/portfolio-8.jpg";

const projects = [
  { image: p1, title: "E-Commerce Platform" },
  { image: p2, title: "SaaS Analytics Dashboard" },
  { image: p3, title: "FinTech Mobile App" },
  { image: p4, title: "Healthcare Portal" },
  { image: p5, title: "EdTech Learning Platform" },
  { image: p6, title: "Food Delivery App" },
  { image: p7, title: "Real Estate Website" },
  { image: p8, title: "Fitness Tracker App" },
];

const Portfolio = () => (
  <main>
    <PageBanner title="Our Portfolio" breadcrumb="Portfolio" />

    <section className="py-20">
      <div className="section-container">
        <SectionHeading title="Our Work" subtitle="A showcase of projects we're proud of." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p) => (
            <PortfolioCard key={p.title} image={p.image} title={p.title} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/contact" className="btn-gradient text-sm">View All Projects →</Link>
        </div>
      </div>
    </section>
  </main>
);

export default Portfolio;
