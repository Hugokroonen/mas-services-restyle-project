
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
    "Administratieve diensten",
    "Secretarieel",
    "Notuleerservice"
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
      description: "Volledige administratieve ondersteuning voor uw boekhouding, facturering en financiële administratie.",
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
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  MAS <span className="text-blue-600">Services</span>
                </h1>
                
                {/* Dynamic rotating service text */}
                <div className="text-2xl lg:text-3xl font-medium text-gray-700 leading-relaxed min-h-[40px] flex items-center">
                  <span className="text-blue-600 transition-all duration-500">
                    {serviceWords[currentService]}
                  </span>
                </div>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Professionele secretariële diensten, administratieve ondersteuning en notuleerservice. 
                  Focus op uw core business terwijl ik de rest regel.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Link to="/contact" className="flex items-center gap-2">
                    Neem Contact Op
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-gray-300 hover:border-blue-600 px-8 py-3 rounded-full transition-all duration-300 hover:shadow-md">
                  Bekijk Diensten
                </Button>
              </div>
            </div>
            
            <div className="space-y-6">
              <QuickContact />
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <div className="text-4xl mb-2">📸</div>
                      <div className="text-sm">Professional Photo</div>
                      <div className="text-xs">Placeholder</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Section - Space for your personal photo */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-100 rounded-3xl p-12 shadow-lg">
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center">
              <div className="text-gray-500 text-center">
                <div className="text-2xl mb-1">👤</div>
                <div className="text-xs">Uw foto</div>
              </div>
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
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Mijn Diensten</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MAS Services biedt u professionele secretariële diensten, administratieve ondersteuning 
              en notuleerservice. Focus op uw core business terwijl ik de rest regel.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-3 hover:scale-105 bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-700 font-medium group">
                    <Link to={service.link} className="flex items-center gap-2">
                      Meer Informatie
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
      <section className="py-20 bg-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">
              Klaar om uw werk uit handen te geven?
            </h2>
            <p className="text-xl text-emerald-100 leading-relaxed">
              Neem contact op en ontdek hoe MAS Services u kan helpen met professionele ondersteuning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-gray-50 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Link to="/contact" className="flex items-center gap-2">
                  Neem Contact Op
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
