
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, FileText, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  const [currentService, setCurrentService] = useState(0);
  const serviceWords = [
    { text: "Administratieve", color: "text-blue-400" },
    { text: "Secretariële", color: "text-purple-400" },
    { text: "Notuleer", color: "text-rose-400" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % serviceWords.length);
    }, 2000);
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  MAS <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400">Services</span>
                </h1>
                
                {/* Dynamic rotating title */}
                <div className="text-3xl lg:text-4xl font-bold text-gray-800 leading-relaxed">
                  <span className={`transition-all duration-500 ${serviceWords[currentService].color}`}>
                    {serviceWords[currentService].text}
                  </span>
                  <span className="text-gray-700"> diensten</span>
                  <br />
                  <span className="text-2xl lg:text-3xl text-gray-600 font-medium">
                    uit handen nemen waar u liever niet mee bezig bent
                  </span>
                </div>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Professionele secretariële diensten, administratieve ondersteuning en notuleerservice. 
                  Werk uit handen nemen waar u liever niet mee bezig bent.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-300 to-purple-400 hover:from-blue-400 hover:to-purple-500 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Link to="/contact" className="flex items-center gap-2">
                    Neem Contact Op
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-gray-300 hover:border-blue-300 px-8 py-3 rounded-full transition-all duration-300 hover:shadow-md">
                  Bekijk Diensten
                </Button>
              </div>

              <div className="pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">20+</div>
                  <div className="text-gray-600">Jaren Ervaring</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/lovable-uploads/9ac688cd-d5ac-4222-9e9e-34632fb17888.png" 
                  alt="Professional workspace" 
                  className="w-full h-[600px] object-cover"
                  style={{ 
                    objectPosition: '50% 50%', 
                    transform: 'scale(1.2)',
                    clipPath: 'inset(20% 0)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
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
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-3 hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-300 to-purple-400 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-6">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Button variant="ghost" className="text-blue-400 hover:text-blue-500 font-medium group">
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
      <section className="py-20 bg-gradient-to-r from-blue-300 to-purple-400 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">
              Klaar om uw werk uit handen te geven?
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Neem contact op en ontdek hoe MAS Services u kan helpen met professionele ondersteuning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-50 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
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
