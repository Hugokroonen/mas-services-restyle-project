
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Secretarieel = () => {
  const services = [
    "Tijdelijke vervanging van uw secretaresse of administratief medewerker",
    "Secretariaat van bestuur, stichting of vereniging",
    "Afhandeling van inkomende post/e-mails",
    "Redigeren van teksten en tekstverwerking",
    "Schrijven van zakelijke correspondentie",
    "Organiseren van vergaderingen/bijeenkomsten/evenementen",
    "PowerPoint presentaties maken en het bijhouden van uw website",
    "Verzorgen attenties voor medewerkers of relaties (bijv. kerstpakketten)",
    "Optreden als gastvrouw"
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
                Secretarieel
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Bent u op zoek naar secretariële ondersteuning en/of management assistentie voor uw 
              bedrijf, vereniging of stichting? Dan bent u bij MAS Services aan het juiste adres.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="shadow-xl border-0 overflow-hidden">
              <CardHeader className="bg-rose-400 text-white">
                <CardTitle className="text-2xl">Mijn secretariële diensten</CardTitle>
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
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="shadow-lg border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Uitdagende opdrachten</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Heeft u een andere uitdagende opdracht? MAS Services gaat graag voor u aan de slag. 
                    Ontdek ook wat MAS Services kan betekenen voor uw administratie of vergaderingen!
                  </p>
                  <div className="flex gap-4">
                    <Button className="bg-rose-400 hover:bg-rose-500">
                      <Link to="/administratie" className="flex items-center gap-2">
                        Administratie
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" className="border-rose-200 hover:border-rose-300">
                      <Link to="/notuleerservice" className="flex items-center gap-2">
                        Vergaderingen
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-rose-50">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Neem contact op</h3>
                  <p className="text-gray-600 mb-6">
                    Klaar om uw secretariële taken uit handen te geven? 
                    Laten we een gesprek plannen over uw behoeften.
                  </p>
                  <Button size="lg" className="bg-rose-400 hover:bg-rose-500">
                    <Link to="/contact" className="flex items-center gap-2">
                      Contact opnemen
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Secretarieel;
