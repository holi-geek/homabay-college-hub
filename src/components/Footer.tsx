import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-foreground text-primary-foreground">
    <div className="container mx-auto grid gap-10 px-4 py-12 md:grid-cols-3 lg:grid-cols-4">
      <div>
        <div className="mb-4 flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <GraduationCap className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-sm font-bold">HOMABAY COLLEGE</span>
        </div>
        <p className="text-sm text-primary-foreground/70">
          Empowering Skills for Tomorrow's Professionals. Licensed by TVETA — Certificate No. TVETA/PRIVATE/TVC/0227/2025.
        </p>
      </div>

      <div>
        <h4 className="mb-3 text-sm font-semibold">Quick Links</h4>
        <ul className="space-y-2 text-sm text-primary-foreground/70">
          {["About Us", "Courses", "Accreditation", "Contact"].map((l) => (
            <li key={l}>
              <Link to={`/${l.toLowerCase().replace(" ", "-").replace("about-us", "about")}`} className="transition-colors hover:text-primary-foreground">
                {l}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="mb-3 text-sm font-semibold">Contact Info</h4>
        <ul className="space-y-2 text-sm text-primary-foreground/70">
          <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0" /> homabaycollegeforprofessionals@gmail.com</li>
          <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" /> +254-704194082</li>
          <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /> 1st Floor, Rodi C20, LR No. 820, Rodi Kopany, Homa Bay County</li>
        </ul>
      </div>

      <div>
        <h4 className="mb-3 text-sm font-semibold">Accreditation</h4>
        <p className="text-sm text-primary-foreground/70">
          Registered &amp; licensed by the Technical and Vocational Education and Training Authority (TVETA) under TVET Act Cap 210A.
        </p>
        <span className="badge-accent mt-3 inline-block">TVETA Licensed</span>
      </div>
    </div>

    <div className="border-t border-primary-foreground/10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-primary-foreground/50 sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Homabay College for Professional Studies. All rights reserved.</p>
        <p>P.O. Box 90, Rodi Kopany (40326)</p>
      </div>
    </div>
  </footer>
);

export default Footer;
