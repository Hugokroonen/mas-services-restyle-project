
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Privacy = () => {
  const privacyPoints = [
    "Duidelijk vermeldt voor welke doeleinden persoonsgegevens verwerkt worden (middels deze privacyverklaring);",
    "Allereerst vraagt om uitdrukkelijke toestemming om persoonsgegevens te mogen verwerken in gevallen waarin dit vereist is;",
    "Het verzamelen van persoonsgegevens beperkt tot de persoonsgegevens die uitsluitend nodig zijn voor de doeleinden waarvoor ze worden verwerkt;",
    "Gegevens niet doorgeeft aan derde partijen, tenzij dat nodig is om de gevraagde dienst te kunnen leveren of wanneer MAS Services daar wettelijk toe verplicht is;",
    "Wanneer gegevens gedeeld worden afspraken maakt met derde partijen om er o.a. voor te zorgen dat gegevens niet voor andere doeleinden worden gebruikt;",
    "Passende beveiligingsmaatregelen neemt om persoonsgegevens te beschermen en dat ook eisen van partijen die in opdracht van MAS Services persoonsgegevens verwerken;"
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-rose-500">
                Privacy
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Privacy is belangrijk. Lees hier hoe MAS Services omgaat met persoonlijke gegevens.
            </p>
          </div>

          <div className="space-y-8">
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Bij gebruik van deze website en het opnemen van contact middels de contactbutton worden 
                  bepaalde (persoons)gegevens achtergelaten. Deze gegevens worden door MAS Services zorgvuldig 
                  verwerkt en beveiligd. Uiteraard met inachtneming van de eisen uit de privacywetgeving (AVG).
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Dit houdt onder andere in dat MAS Services:
                </h3>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 overflow-hidden">
              <CardHeader className="bg-rose-400 text-white">
                <CardTitle className="text-2xl">Privacyprincipes</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  {privacyPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-rose-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-bold">{index + 1}</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-rose-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AVG compliance</h3>
                <p className="text-gray-700 leading-relaxed">
                  MAS Services houdt zich strikt aan de Algemene Verordening Gegevensbescherming (AVG). 
                  Alle processen zijn ontworpen om privacy te waarborgen en gegevens veilig te houden. 
                  Voor vragen over privacypraktijken kunt u altijd contact opnemen.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
