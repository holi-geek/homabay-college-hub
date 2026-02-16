import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, ArrowRight } from "lucide-react";

const courses = [
  { name: "Storekeeping", level: "Artisan", exam: "KNEC", maxEnroll: 15 },
  { name: "Office Administration", level: "Artisan", exam: "KNEC", maxEnroll: 15 },
  { name: "Business Management", level: "Craft", exam: "KNEC", maxEnroll: 15 },
  { name: "Business Management", level: "Diploma", exam: "KNEC", maxEnroll: 15 },
  { name: "Human Resource Management", level: "Craft", exam: "KNEC", maxEnroll: 15 },
  { name: "Human Resource Management", level: "Diploma", exam: "KNEC", maxEnroll: 15 },
  { name: "Social Work & Community Development", level: "Craft", exam: "KNEC", maxEnroll: 15 },
  { name: "Social Work & Community Development", level: "Diploma", exam: "KNEC", maxEnroll: 15 },
  { name: "Supply Chain Management", level: "Craft", exam: "KNEC", maxEnroll: 15 },
  { name: "Supply Chain Management", level: "Diploma", exam: "KNEC", maxEnroll: 15 },
  { name: "Information Communication Technology", level: "Craft", exam: "KNEC", maxEnroll: 15 },
  { name: "Information Communication Technology", level: "Diploma", exam: "KNEC", maxEnroll: 15 },
];

const levelColor: Record<string, string> = {
  Artisan: "bg-accent/20 text-accent-foreground",
  Craft: "bg-primary/10 text-primary",
  Diploma: "bg-secondary/10 text-secondary",
};

const Courses = () => (
  <Layout>
    <section className="hero-overlay section-padding text-center">
      <div className="container mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl font-extrabold text-primary-foreground md:text-5xl">Our Courses</h1>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            12 KNEC-examined programmes at artisan, craft, and diploma levels.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto">
        {/* Legend */}
        <AnimatedSection className="mb-8 flex flex-wrap items-center gap-3">
          <span className="text-sm font-medium text-muted-foreground">Levels:</span>
          {["Artisan", "Craft", "Diploma"].map((l) => (
            <Badge key={l} variant="outline" className={`${levelColor[l]} border-0`}>{l}</Badge>
          ))}
        </AnimatedSection>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c, i) => (
            <AnimatedSection key={`${c.name}-${c.level}`} delay={i * 0.05}>
              <Card className="card-elevated border-0 h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-base font-semibold text-foreground">{c.name}</CardTitle>
                    <Badge className={`${levelColor[c.level]} border-0 shrink-0`}>{c.level}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex items-center justify-between pt-0">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><BookOpen className="h-3.5 w-3.5" /> {c.exam}</span>
                    <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> Max {c.maxEnroll}</span>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-12 text-center">
          <p className="text-muted-foreground">Interested in enrolling? Get in touch today.</p>
          <Button asChild size="lg" className="mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <a href="https://wa.me/254704194082" target="_blank" rel="noopener noreferrer">
              Apply Now <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default Courses;
