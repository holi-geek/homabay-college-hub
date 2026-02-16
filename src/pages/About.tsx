import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Target, Eye, MapPin, Award } from "lucide-react";
import studentsImage from "@/assets/students-class.jpg";

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="hero-overlay section-padding text-center">
      <div className="container mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl font-extrabold text-primary-foreground md:text-5xl">About Our College</h1>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Building a skilled workforce for Homa Bay County and beyond since our founding.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Mission / Vision */}
    <section className="section-padding">
      <div className="container mx-auto grid gap-8 md:grid-cols-2">
        <AnimatedSection>
          <Card className="card-elevated border-0 h-full">
            <CardContent className="p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Our Mission</h2>
              <p className="mt-3 text-muted-foreground">
                To provide accessible, quality technical and vocational education that equips students with practical skills, 
                professional competencies, and ethical values needed to thrive in the modern job market and contribute meaningfully to society.
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <Card className="card-elevated border-0 h-full">
            <CardContent className="p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                <Eye className="h-6 w-6 text-secondary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Our Vision</h2>
              <p className="mt-3 text-muted-foreground">
                To be a leading centre of excellence in technical and vocational education in the Lake Region, 
                producing skilled professionals who drive economic growth and community development across Kenya.
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>

    {/* About Content */}
    <section className="section-padding section-alt">
      <div className="container mx-auto grid items-center gap-12 lg:grid-cols-2">
        <AnimatedSection>
          <img src={studentsImage} alt="Students learning at Homabay College" className="rounded-xl shadow-lg" />
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <h2 className="text-3xl font-bold text-foreground">Who We Are</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Homabay College for Professional Studies is a private Technical and Vocational Education and Training (TVET) institution 
            located in Rodi Kopany, Homa Bay County. We are fully registered and licensed by the Technical and Vocational Education 
            and Training Authority (TVETA) under the TVET Act Cap 210A, Section 20(1).
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Our certificate of registration (No. TVETA/PRIVATE/TVC/0227/2025) was issued on 6th November 2025 and is valid through 
            5th November 2030. We are licensed to offer KNEC-examined artisan, craft, and diploma programmes across business, 
            technology, and social sciences.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <ShieldCheck className="h-4 w-4" /> TVETA Registered
            </div>
            <div className="flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary">
              <Award className="h-4 w-4" /> KNEC Examined
            </div>
            <div className="flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 text-sm font-medium text-accent-foreground">
              <MapPin className="h-4 w-4" /> Rodi Kopany
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default About;
