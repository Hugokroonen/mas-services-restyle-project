
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Administratie = () => {
  const services = [
    "Sorteren, coderen en inboeken van facturen/bonnetjes",
    "Geautomatiseerd verwerken van facturen/bonnetjes (AFAS, Twinfield, Exact)",
    "Data-entry",
    "Verzorgen van betalingen",
    "Verzorgen van facturering",
    "Debiteurenbewaking",
    "Personeelsadministratie",
    "Ledenadministratie voor vereniging, stichting of coöperatie"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-rose-50">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              <span className="text-transparent bg-clip-text bg-rose-500">
                Administratie
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Heeft uw boekhouder of financiële afdeling een helpende hand nodig? Of heeft u tijdelijk 
              behoefte aan financieel administratieve ondersteuning vanwege een drukke periode of in 
              verband met tijdelijke afwezigheid van uw boekhoudkundig medewerker?
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <Card className="shadow-lg border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Ondersteuning wanneer u het nodig heeft</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    MAS Services kan u van dienst zijn met allerlei administratieve werkzaamheden. 
                    Of u nu een drukke periode doormaakt of tijdelijk zonder uw vaste medewerker zit, 
                    ik spring bij wanneer het nodig is.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    MAS Services kan nog meer voor u betekenen dan alleen administratieve werkzaamheden. 
                    Bekijk ook mijn mogelijkheden voor secretariële ondersteuning en notuleerservice.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-rose-50">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Meer diensten</h3>
                  <p className="text-gray-600 mb-6">
                    Ontdek wat MAS Services nog meer voor u kan betekenen
                  </p>
                  <div className="flex flex-col gap-3">
                    <Button variant="outline" className="border-rose-200 hover:border-rose-300">
                      <Link to="/secretarieel" className="flex items-center gap-2">
                        Secretariële ondersteuning
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" className="border-rose-200 hover:border-rose-300">
                      <Link to="/notuleerservice" className="flex items-center gap-2">
                        Notuleerservice
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-xl border-0 overflow-hidden">
              <CardHeader className="bg-rose-400 text-white">
                <CardTitle className="text-2xl">Administratieve werkzaamheden</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">{service}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <Button size="lg" className="w-full bg-rose-400 hover:bg-rose-500">
                    <Link to="/contact" className="flex items-center gap-2">
                      Vraag een offerte aan
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Administratie;
