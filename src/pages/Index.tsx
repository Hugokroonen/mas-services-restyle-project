
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, FileText, Calendar, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-rose-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-100/20 to-purple-100/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  MAS <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600">Services</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Professionele secretariële diensten, administratieve ondersteuning en notuleerservice. 
                  Werk uit handen nemen waar u liever niet mee bezig bent.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link to="/contact" className="flex items-center gap-2">
                    Neem Contact Op
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-gray-300 hover:border-rose-300 px-8 py-3 rounded-full transition-all duration-300">
                  Bekijk Diensten
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">10+</div>
                  <div className="text-gray-600">Jaren Ervaring</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">50+</div>
                  <div className="text-gray-600">Tevreden Klanten</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/9ac688cd-d5ac-4222-9e9e-34632fb17888.png" 
                  alt="Professional workspace" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Onze Diensten</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MAS Services biedt u professionele secretariële diensten, administratieve ondersteuning 
              en notuleerservice. Focus op uw core business terwijl wij de rest regelen.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-rose-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Button variant="ghost" className="text-rose-600 hover:text-rose-700 font-medium group">
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
      <section className="py-20 bg-gradient-to-r from-rose-500 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">
              Klaar om uw werk uit handen te geven?
            </h2>
            <p className="text-xl text-rose-100 leading-relaxed">
              Neem contact op en ontdek hoe MAS Services u kan helpen met professionele ondersteuning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-50 px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
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
