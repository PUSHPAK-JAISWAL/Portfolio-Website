import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Certification {
  name: string;
  issuer: string;
  date?: string;
  count?: number;
  url?: string;
}

const certifications: Certification[] = [
  {
    name:"Advanced Java",
    issuer:"GeeksforGeeks",
    url:"https://www.linkedin.com/in/pushpak-jaiswal/details/certifications/1761530405427/single-media-viewer/?profileId=ACoAAFG2ZQ0BB0ZckxrYxTcpwDchZ5LuWiTjR5o",
  },
  {
    name:"Data Base Management System",
    issuer:"NPTEL",
    url:"https://www.linkedin.com/in/pushpak-jaiswal/details/certifications/1759649348692/single-media-viewer/?profileId=ACoAAFG2ZQ0BB0ZckxrYxTcpwDchZ5LuWiTjR5o",
  },
  {
    name:"Python for Data Science",
    issuer:"NPTEL",
    url:"https://www.linkedin.com/in/pushpak-jaiswal/details/certifications/1759649071379/single-media-viewer/?profileId=ACoAAFG2ZQ0BB0ZckxrYxTcpwDchZ5LuWiTjR5o",
  },
  {
    name:"Joy of Computing using Python",
    issuer:"NPTEL",
    url:"https://www.linkedin.com/in/pushpak-jaiswal/details/certifications/1747754462305/single-media-viewer/?profileId=ACoAAFG2ZQ0BB0ZckxrYxTcpwDchZ5LuWiTjR5o",
  },
  {
    name:"Design and Analysis of Algorithm",
    issuer:"NPTEL",
    url:"https://www.linkedin.com/in/pushpak-jaiswal/details/certifications/1743950142831/single-media-viewer/?profileId=ACoAAFG2ZQ0BB0ZckxrYxTcpwDchZ5LuWiTjR5o",
  },
  {
    name:"C Training",
    issuer:"Spoken Tutorial",
    url:"https://www.linkedin.com/in/pushpak-jaiswal/details/certifications/1740544782721/single-media-viewer/?profileId=ACoAAFG2ZQ0BB0ZckxrYxTcpwDchZ5LuWiTjR5o",
  },
  {
    name:"CPP Training",
    issuer:"Spoken Tutorial",
    url:"https://www.linkedin.com/in/pushpak-jaiswal/details/certifications/1740544947861/single-media-viewer/?profileId=ACoAAFG2ZQ0BB0ZckxrYxTcpwDchZ5LuWiTjR5o",
  },
  {
    name:"Advanced SQL",
    issuer:"Kaggle",
    url:"https://www.linkedin.com/in/pushpak-jaiswal/details/certifications/1734247331872/single-media-viewer/?profileId=ACoAAFG2ZQ0BB0ZckxrYxTcpwDchZ5LuWiTjR5o",
  },
  {
    name:"Data Visualization",
    issuer:"Kaggle",
    url:"https://www.linkedin.com/in/pushpak-jaiswal/details/certifications/1733739393702/single-media-viewer/?profileId=ACoAAFG2ZQ0BB0ZckxrYxTcpwDchZ5LuWiTjR5o",
  },
  {
    name:"Feature Engineering",
    issuer:"Kaggle",
    url:"https://www.linkedin.com/in/pushpak-jaiswal/details/certifications/1734080346382/single-media-viewer/?profileId=ACoAAFG2ZQ0BB0ZckxrYxTcpwDchZ5LuWiTjR5o",
  },
  {
    name:"Intermediate Machine Learning",
    issuer:"Kaggle",
    url:"https://www.linkedin.com/in/pushpak-jaiswal/details/certifications/1733676638818/single-media-viewer/?profileId=ACoAAFG2ZQ0BB0ZckxrYxTcpwDchZ5LuWiTjR5o",
  },
  {
    name:"Intro to Deep Learning",
    issuer:"Kaggle",
    url:"https://www.linkedin.com/in/pushpak-jaiswal/details/certifications/1734332276033/single-media-viewer/?profileId=ACoAAFG2ZQ0BB0ZckxrYxTcpwDchZ5LuWiTjR5o",
  },
  {
    name:"Intro to SQL",
    issuer:"Kaggle",
    url:"https://www.linkedin.com/in/pushpak-jaiswal/details/certifications/1734244515942/single-media-viewer/?profileId=ACoAAFG2ZQ0BB0ZckxrYxTcpwDchZ5LuWiTjR5o",
  },
  {
    name:"Intro to Machine Learning",
    issuer:"Kaggle",
    url:"https://www.linkedin.com/in/pushpak-jaiswal/details/certifications/1732527657092/single-media-viewer/?profileId=ACoAAFG2ZQ0BB0ZckxrYxTcpwDchZ5LuWiTjR5o",
  },
  {
    name:"Intro to Programming",
    issuer:"Kaggle",
    url:"https://www.linkedin.com/in/pushpak-jaiswal/details/certifications/1732426361958/single-media-viewer/?profileId=ACoAAFG2ZQ0BB0ZckxrYxTcpwDchZ5LuWiTjR5o",
  },
  {
    name:"Pandas",
    issuer:"Kaggle",
    url:"https://www.linkedin.com/in/pushpak-jaiswal/details/certifications/1732642476691/single-media-viewer/?profileId=ACoAAFG2ZQ0BB0ZckxrYxTcpwDchZ5LuWiTjR5o",
  },
  {
    name:"Programming in Java",
    issuer:"NPTEL",
    url:"https://www.linkedin.com/in/pushpak-jaiswal/details/certifications/1732696955382/single-media-viewer/?profileId=ACoAAFG2ZQ0BB0ZckxrYxTcpwDchZ5LuWiTjR5o",
  },
  {
    name:"Python",
    issuer:"Kaggle",
    url:"https://www.linkedin.com/in/pushpak-jaiswal/details/certifications/1732463542430/single-media-viewer/?profileId=ACoAAFG2ZQ0BB0ZckxrYxTcpwDchZ5LuWiTjR5o",
  },
  {
    name:"CSS (BASIC)",
    issuer:"Hackerrank",
    url:"https://www.linkedin.com/in/pushpak-jaiswal/details/certifications/1730724757081/single-media-viewer/?profileId=ACoAAFG2ZQ0BB0ZckxrYxTcpwDchZ5LuWiTjR5o",
  },
  {
    name:"GFG160",
    issuer:"GeeksforGeeks",
    url:"https://www.linkedin.com/in/pushpak-jaiswal/details/certifications/1758118248453/single-media-viewer/?profileId=ACoAAFG2ZQ0BB0ZckxrYxTcpwDchZ5LuWiTjR5o",
  },
  {
    name:"JAVA WITH DSA AND SYSTEM DESIGN 2.0",
    issuer:"PWSkills",
    url:"https://www.linkedin.com/in/pushpak-jaiswal/details/certifications/1727785497452/single-media-viewer/?profileId=ACoAAFG2ZQ0BB0ZckxrYxTcpwDchZ5LuWiTjR5o",
  },
  {
    name:"Java (Basic)",
    issuer:"Hackerrank",
    url:"https://www.linkedin.com/in/pushpak-jaiswal/details/certifications/1730650525816/single-media-viewer/?profileId=ACoAAFG2ZQ0BB0ZckxrYxTcpwDchZ5LuWiTjR5o",
  },
  {
    name:"JavaScript (Intermediate)",
    issuer:"Hackerrank",
    url:"https://www.linkedin.com/in/pushpak-jaiswal/details/certifications/1730724613008/single-media-viewer/?profileId=ACoAAFG2ZQ0BB0ZckxrYxTcpwDchZ5LuWiTjR5o",
  },
  {
    name:"Problem Solving (Basic)",
    issuer:"Hackerrank",
    url:"https://www.linkedin.com/in/pushpak-jaiswal/details/certifications/1730650634617/single-media-viewer/?profileId=ACoAAFG2ZQ0BB0ZckxrYxTcpwDchZ5LuWiTjR5o",
  },
  {
    name:"Problem Solving through Programming in C",
    issuer:"NPTEL",
    url:"https://www.linkedin.com/in/pushpak-jaiswal/details/certifications/1727785332237/single-media-viewer/?profileId=ACoAAFG2ZQ0BB0ZckxrYxTcpwDchZ5LuWiTjR5o",
  },
  {
    name:"Python (BASIC)",
    issuer:"Hackerrank",
    url:"https://www.linkedin.com/in/pushpak-jaiswal/details/certifications/1730708122654/single-media-viewer/?profileId=ACoAAFG2ZQ0BB0ZckxrYxTcpwDchZ5LuWiTjR5o",
  },
  {
    name:"Rest API (Intermediate)",
    issuer:"Hackerrank",
    url:"https://www.linkedin.com/in/pushpak-jaiswal/details/certifications/1730651162618/single-media-viewer/?profileId=ACoAAFG2ZQ0BB0ZckxrYxTcpwDchZ5LuWiTjR5o",
  },
  {
    name:"SQL (BASIC)",
    issuer:"Hackerrank",
    url:"https://www.linkedin.com/in/pushpak-jaiswal/details/certifications/1730650705986/single-media-viewer/?profileId=ACoAAFG2ZQ0BB0ZckxrYxTcpwDchZ5LuWiTjR5o",
  },
  {
    name:"SQL (INTERMEDIATE)",
    issuer:"Hackerrank",
    url:"https://www.linkedin.com/in/pushpak-jaiswal/details/certifications/1730650842701/single-media-viewer/?profileId=ACoAAFG2ZQ0BB0ZckxrYxTcpwDchZ5LuWiTjR5o",
  }
];

const Certifications = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="gradient-text">Certifications</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="p-6 card-hover flex flex-col animate-scale-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1 line-clamp-2">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  {cert.date && (
                    <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>
                  )}
                </div>
              </div>

              {cert.count && (
                <Badge variant="secondary" className="mb-4 w-fit">
                  {cert.count} {cert.count === 1 ? 'Certificate' : 'Certificates'}
                </Badge>
              )}

              {cert.url && (
                <Button variant="outline" size="sm" asChild className="mt-auto">
                  <a href={cert.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View
                  </a>
                </Button>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Total: 27+ Professional Certifications across multiple platforms
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
