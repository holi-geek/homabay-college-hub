import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, FileText, Calendar, MapPin } from "lucide-react";
import certImage from "@/assets/certificate-placeholder.jpg";

const details = [
  { icon: FileText, label: "Certificate No.", value: "TVETA/PRIVATE/TVC/0227/2025" },
  { icon: Calendar, label: "Registered", value: "06 November 2025" },
  { icon: Calendar, label: "Valid Until", value: "05 November 2030" },
  { icon: MapPin, label: "Location", value: "Rodi Kopany, Homa Bay County" },
];

const Accreditation = () => (
  <Layout>
    <section className="hero-overlay section-padding text-center">
      <div className="container mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl font-extrabold text-primary-foreground md:text-5xl">Accreditation</h1>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Fully registered and licensed by TVETA for training purposes.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <AnimatedSection>
          <Card className="card-elevated border-0 overflow-hidden">
            <div className="hero-overlay p-6 text-center">
              <ShieldCheck className="mx-auto h-12 w-12 text-primary-foreground" />
              <h2 className="mt-3 text-xl font-bold text-primary-foreground">TVETA Registered & Licensed</h2>
            </div>
            <CardContent className="p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {details.map((d) => (
                  <div key={d.label} className="flex items-start gap-3">
                    <d.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{d.label}</p>
                      <p className="text-sm font-semibold text-foreground">{d.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-lg bg-muted p-6">
                <h3 className="font-semibold text-foreground">Legal Basis</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Registered under the <strong>TVET Act Cap 210A, Section 20(1)</strong>. Licensed to offer 
                  KNEC-examined artisan, craft, and diploma courses. The training license must be displayed 
                  at the institution premises at all times as per regulatory requirements.
                </p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-10">
          <h3 className="mb-4 text-center text-lg font-semibold text-foreground">Certificate of Registration</h3>
          <div className="overflow-hidden rounded-xl border border-border shadow-sm">
            <img src={certImage} alt="TVETA Certificate of Registration" className="w-full" />
          </div>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Official TVETA Registration Certificate — Homabay College for Professional Studies
          </p>
        </AnimatedSection>
      </div>
    </section>
  </Layout>
);

export default Accreditation;
