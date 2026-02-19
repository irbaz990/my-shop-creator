import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import uvAbout from "@/assets/uv-about.jpg";
import uvHero from "@/assets/uv-hero.jpg";

const values = [
  { title: "Authenticity", desc: "Every piece we drop is a reflection of real street culture — no gimmicks, no trends." },
  { title: "Quality", desc: "Premium materials, meticulous construction. Clothes that last as long as your style." },
  { title: "Community", desc: "We're not just a brand — we're a movement. Built with and for the culture." },
  { title: "Sustainability", desc: "Responsibly sourced materials. Ethical manufacturing. Fashion with a conscience." },
];

const team = [
  { name: "Jordan Vibe", role: "Founder & Creative Director" },
  { name: "Alex Chen", role: "Head of Design" },
  { name: "Sam Rivers", role: "Brand Director" },
  { name: "Riley Cross", role: "Head of Community" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <div className="relative pt-16 h-[60vh] min-h-[400px] overflow-hidden">
        <img src={uvAbout} alt="About UrbanVibe" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative h-full flex flex-col justify-end pb-12">
          <div className="container">
            <p className="text-accent text-xs tracking-[0.35em] uppercase font-body mb-3">Our Story</p>
            <h1 className="font-display text-6xl md:text-8xl leading-none">
              BUILT FOR<br />THE CULTURE
            </h1>
          </div>
        </div>
      </div>

      {/* Story */}
      <section className="container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-accent text-xs tracking-[0.35em] uppercase font-body mb-4">2020 — Present</p>
            <h2 className="font-display text-5xl mb-6 leading-none">
              FROM BROOKLYN<br />TO EVERYWHERE
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                UrbanVibe started in 2020 in a small Brooklyn apartment. Our founder Jordan, frustrated by streetwear brands that talked culture but didn't live it, decided to create something real.
              </p>
              <p>
                What started as 50 hoodies sold out of a car trunk became one of the fastest-growing streetwear brands in North America — because we never stopped listening to the community.
              </p>
              <p>
                Today, UrbanVibe is worn by skaters, artists, athletes, and everyone in between. We don't define who wears us — we let the streets do that.
              </p>
            </div>
          </div>
          <div className="aspect-square bg-card overflow-hidden">
            <img src={uvHero} alt="UrbanVibe street" className="w-full h-full object-cover object-top" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-card border-y border-border py-20">
        <div className="container">
          <p className="text-accent text-xs tracking-[0.35em] uppercase font-body mb-4 text-center">What We Stand For</p>
          <h2 className="font-display text-5xl text-center mb-12">OUR VALUES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-6 border border-border hover:border-accent transition-all group">
                <div className="w-8 h-0.5 bg-accent mb-4 group-hover:w-16 transition-all duration-300" />
                <h3 className="font-display text-2xl mb-3">{v.title.toUpperCase()}</h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container py-20">
        <p className="text-accent text-xs tracking-[0.35em] uppercase font-body mb-4">The Crew</p>
        <h2 className="font-display text-5xl mb-12 leading-none">MEET THE TEAM</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.name} className="group">
              <div className="aspect-square bg-secondary mb-4 overflow-hidden flex items-center justify-center group-hover:ring-1 group-hover:ring-accent transition-all">
                <span className="font-display text-5xl text-muted-foreground group-hover:text-accent transition-colors">
                  {member.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-display text-xl">{member.name.toUpperCase()}</h3>
              <p className="text-muted-foreground text-xs font-body tracking-wide">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-20">
        <div className="container text-center">
          <h2 className="font-display text-6xl mb-6">JOIN THE MOVEMENT</h2>
          <p className="text-muted-foreground font-body mb-8 max-w-md mx-auto">
            Be part of something bigger. Shop the collection and wear what the culture creates.
          </p>
          <Link
            to="/shop"
            className="gradient-accent text-accent-foreground px-10 py-4 font-display text-lg tracking-widest inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            SHOP NOW <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
