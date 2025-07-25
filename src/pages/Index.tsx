import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, FileText, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuickContact from "@/components/QuickContact";

const Index = () => {
  const [currentService, setCurrentService] = useState(0);
  const serviceWords = [
    "notuleerservice",
    "administratieve diensten", 
    "secretariële diensten"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % serviceWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: Users,
      title: "Secretarieel",
      description: "Professionele secretariële ondersteuning en management assistentie voor uw bedrijf, vereniging of stichting.",
      link: "/secretarieel"
    },
    {
      icon: FileText,
      title: "Administratie",
      description: "Volledige administratieve ondersteuning voor uw boekhouding, facturering en projectadministratie.",
      link: "/administratie"
    },
    {
      icon: Calendar,
      title: "Notuleerservice",
      description: "Professioneel notuleren van vergaderingen, zowel op locatie als online via digitale platforms.",
      link: "/notuleerservice"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Prominent Image Header */}
      <section className="relative pt-16">
        <div className="relative h-[400px] w-full overflow-hidden">
          <img 
            src="/lovable-uploads/c35e2eb9-a079-4b03-b1e5-084fe286baba.png" 
            alt="Professional workspace"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
          
          {/* Content overlay */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl">
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  MAS <span className="text-rose-300">Services</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Content Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                {/* Dynamic rotating service text */}
                <div className="space-y-4">
                  <div className="text-2xl lg:text-3xl font-medium text-gray-900 leading-relaxed">
                    <span>Professionele </span>
                    <span className="text-rose-500 transition-all duration-500 font-semibold">
                      {serviceWords[currentService]}
                    </span>
                  </div>
                  <div className="text-xl lg:text-2xl text-gray-700 font-normal leading-relaxed">
                    Focus op uw core business terwijl de rest geregeld wordt.
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Link to="/contact" className="flex items-center gap-2">
                    Neem contact op
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <a href="#diensten">
                  <Button variant="outline" size="lg" className="border-2 border-rose-400 text-rose-500 hover:bg-rose-50 px-8 py-3 rounded-full transition-all duration-300 hover:shadow-md">
                    Bekijk diensten
                  </Button>
                </a>
              </div>
            </div>
            
            <div>
              <QuickContact />
            </div>
          </div>
        </div>
      </section>

      {/* Photo Section - Personal introduction */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-rose-50 rounded-3xl p-12 shadow-lg">
            <div className="w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full shadow-lg">
              <img 
                src="/lovable-uploads/2f02750c-4eaf-469e-b258-84c4a8850b73.png" 
                alt="Gidi Kroonen - MAS Services"
                className="w-full h-full object-cover object-[center_10%]"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Gidi Kroonen</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ervaren professional die u helpt met al uw administratieve en secretariële taken. 
              Samen zorgen we ervoor dat u zich kunt focussen op waar u het beste in bent.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="diensten" className="py-8 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Mijn diensten</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MAS Services biedt u professionele secretariële diensten, administratieve ondersteuning en notuleerservice in Boxtel
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-3 hover:scale-105 bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-rose-400 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Button variant="ghost" className="text-rose-500 hover:text-rose-600 font-medium group">
                    <Link to={service.link} className="flex items-center gap-2">
                      Meer informatie
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-14 bg-rose-400 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">
              Klaar om uw werk uit handen te geven?
            </h2>
            <p className="text-xl text-rose-100 leading-relaxed">
              Neem contact op en ontdek hoe MAS Services u kan helpen met professionele ondersteuning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" variant="secondary" className="bg-white text-rose-500 hover:bg-gray-50 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-subtle-pulse hover:animate-none">
                <Link to="/contact" className="flex items-center gap-2">
                  Neem contact op
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
