import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, FileText } from "lucide-react";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${import.meta.env.BASE_URL}resume.pdf`;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="gradient-text">Resume</span>
        </h2>

        <Card className="p-8 text-center card-hover">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-primary/10">
              <FileText className="w-12 h-12 text-primary" />
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Download My Resume</h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Get a detailed overview of my experience, education, and technical skills.
          </p>

          <Button onClick={handleDownload} size="lg" className="gap-2">
            <Download className="w-5 h-5" />
            Download Resume (PDF)
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default Resume;
