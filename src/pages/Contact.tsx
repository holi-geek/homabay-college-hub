import { useState, FormEvent } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    toast({ title: "Message sent!", description: "We'll get back to you soon." });
  };

  return (
    <Layout>
      <section className="hero-overlay section-padding text-center">
        <div className="container mx-auto">
          <AnimatedSection>
            <h1 className="text-4xl font-extrabold text-primary-foreground md:text-5xl">Contact Us</h1>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
              We'd love to hear from you. Reach out for admissions, inquiries, or partnerships.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto grid gap-10 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <AnimatedSection>
              <h2 className="text-2xl font-bold text-foreground">Get in Touch</h2>
              <p className="mt-2 text-muted-foreground">Visit us or send a message. We respond within 24 hours.</p>
            </AnimatedSection>

            {[
              { icon: Mail, label: "Email", value: "homabaycollegeforprofessionals@gmail.com", href: "mailto:homabaycollegeforprofessionals@gmail.com" },
              { icon: Phone, label: "Phone / WhatsApp", value: "+254-704194082", href: "tel:+254704194082" },
              { icon: MapPin, label: "Address", value: "1st Floor, Rodi C20, LR No. 820\nP.O. Box 90, Rodi Kopany (40326)\nHoma Bay County, Kenya" },
            ].map((c, i) => (
              <AnimatedSection key={c.label} delay={i * 0.1}>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <c.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="text-sm text-muted-foreground hover:text-primary whitespace-pre-line">{c.value}</a>
                    ) : (
                      <p className="text-sm text-muted-foreground whitespace-pre-line">{c.value}</p>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}

            {/* Map */}
            <AnimatedSection delay={0.3}>
              <div className="overflow-hidden rounded-xl border border-border">
                <iframe
                  title="Rodi Kopany Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.98!2d34.58!3d-0.74!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182b1c0e5e4e75e5%3A0x1!2sRodi+Kopany!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </AnimatedSection>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <AnimatedSection delay={0.15}>
              <Card className="card-elevated border-0">
                <CardContent className="p-8">
                  {submitted ? (
                    <div className="flex flex-col items-center py-12 text-center">
                      <CheckCircle className="h-16 w-16 text-secondary" />
                      <h3 className="mt-4 text-xl font-bold text-foreground">Thank You!</h3>
                      <p className="mt-2 text-muted-foreground">Your message has been received. We'll get back to you shortly.</p>
                      <Button className="mt-6" onClick={() => setSubmitted(false)}>Send Another Message</Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <h3 className="text-xl font-bold text-foreground">Send Us a Message</h3>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" placeholder="John Doe" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="john@example.com" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="+254 7XX XXX XXX" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="I'm interested in enrolling for..." rows={5} required />
                      </div>
                      <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                        <Send className="mr-2 h-4 w-4" /> Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
