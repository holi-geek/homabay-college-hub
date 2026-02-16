import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import Layout from "@/components/Layout";
import { ShieldCheck, BookOpen, Users, Award, ArrowRight, CheckCircle, GraduationCap, Briefcase, Monitor } from "lucide-react";
import heroImage from "@/assets/hero-college.jpg";
import studentsImage from "@/assets/students-class.jpg";

const stats = [
  { label: "Courses Offered", value: "12", icon: BookOpen },
  { label: "Total Enrollment", value: "180", icon: Users },
  { label: "KNEC Examined", value: "100%", icon: Award },
  { label: "TVETA Licensed", value: "2025–2030", icon: ShieldCheck },
];

const featuredCourses = [
  { title: "Business Management", level: "Craft & Diploma", icon: Briefcase },
  { title: "Information Communication Technology", level: "Craft & Diploma", icon: Monitor },
  { title: "Human Resource Management", level: "Craft & Diploma", icon: Users },
  { title: "Social Work & Community Development", level: "Craft & Diploma", icon: GraduationCap },
];

const whyUs = [
  "Fully registered & licensed by TVETA (Certificate No. TVETA/PRIVATE/TVC/0227/2025)",
  "KNEC-examined artisan, craft, and diploma courses",
  "Affordable fees with flexible payment plans",
  "Experienced and qualified instructors",
  "Practical, hands-on training approach",
  "Convenient location in Rodi Kopany, Homa Bay County",
];

const Index = () => (
  <Layout>
    {/* SEO */}
    <title>Homabay College for Professional Studies | TVETA Licensed TVET College</title>
    <meta name="description" content="TVETA licensed TVET college in Homa Bay County, Kenya offering KNEC-examined artisan, craft, and diploma courses in Business, ICT, HR, Social Work and more." />

    {/* Hero */}
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <img src={heroImage} alt="Homabay College campus building" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 hero-overlay opacity-85" />
      <div className="container relative z-10 mx-auto px-4 py-20">
        <AnimatedSection>
          <span className="badge-accent mb-4 inline-block">TVETA Licensed · KNEC Examined</span>
          <h1 className="mb-4 max-w-3xl text-4xl font-extrabold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Homabay College for Professional Studies
          </h1>
          <p className="mb-8 max-w-xl text-lg text-primary-foreground/80 md:text-xl">
            Empowering Skills for Tomorrow's Professionals
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              <a href="https://wa.me/254704194082" target="_blank" rel="noopener noreferrer">
                Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              <Link to="/courses">View Courses</Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Stats */}
    <section className="relative -mt-16 z-10">
      <div className="container mx-auto px-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.1}>
              <Card className="card-elevated border-0">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <s.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{s.value}</p>
                    <p className="text-sm text-muted-foreground">{s.label}</p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimatedSection>
            <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Why Choose Us</span>
            <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">
              Your Gateway to a <span className="text-gradient">Professional Career</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              As a fully registered and licensed institution under the Technical and Vocational Education and Training Authority (TVETA), 
              we provide quality education that meets national standards and prepares students for the job market.
            </p>
            <ul className="mt-6 space-y-3">
              {whyUs.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <img src={studentsImage} alt="Students learning in classroom" className="rounded-xl shadow-lg" />
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Featured Courses */}
    <section className="section-padding section-alt">
      <div className="container mx-auto">
        <AnimatedSection className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Our Programs</span>
          <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">Featured Courses</h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            We offer 12 KNEC-examined programs across artisan, craft, and diploma levels.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredCourses.map((c, i) => (
            <AnimatedSection key={c.title} delay={i * 0.1}>
              <Card className="card-elevated border-0 h-full">
                <CardContent className="flex flex-col items-start p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                    <c.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.level}</p>
                  <Link to="/courses" className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline">
                    Learn More <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/courses">View All 12 Courses <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>

    {/* Testimonials */}
    <section className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Student Voices</span>
          <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">Success Stories</h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Hear from our students and graduates about their experience at Homabay College.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Faith Achieng",
              course: "Diploma in Business Management",
              quote: "The practical training I received here gave me the confidence to start my own business. The lecturers are supportive and the KNEC certification opened many doors for me.",
            },
            {
              name: "Kevin Otieno",
              course: "Craft in ICT",
              quote: "I chose Homabay College because of their TVETA license and affordable fees. The hands-on ICT training prepared me well for the job market. I now work as an IT support specialist.",
            },
            {
              name: "Grace Wambui",
              course: "Diploma in Human Resource Management",
              quote: "The flexible payment plans made it possible for me to pursue my diploma. The knowledge I gained here has been invaluable in my career growth in HR.",
            },
          ].map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <Card className="card-elevated border-0 h-full">
                <CardContent className="flex flex-col p-6">
                  <div className="mb-4 text-secondary text-3xl font-serif">"</div>
                  <p className="text-sm text-muted-foreground italic flex-1">{t.quote}</p>
                  <div className="mt-6 border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.course}</p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection>
          <div className="hero-overlay rounded-2xl p-10 text-center md:p-16">
            <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">Ready to Start Your Career?</h2>
            <p className="mx-auto mt-4 max-w-lg text-primary-foreground/80">
              Join 180+ students building their future at Homabay College for Professional Studies. Applications are open!
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                <a href="https://wa.me/254704194082" target="_blank" rel="noopener noreferrer">
                  Apply via WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default Index;
