
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Video, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Notuleerservice = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-rose-50">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              <span className="text-transparent bg-clip-text bg-rose-500">
                Notuleerservice
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Goed notuleren is een vak apart. Het is van belang dat het verslag duidelijk is voor alle 
              partijen, ook voor degenen die niet bij de vergadering aanwezig waren.
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Introduction */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Iedereen moet het verslag gemakkelijk kunnen lezen en begrijpen. MAS Services heeft ruime 
                  ervaring in notuleren bij de meest uiteenlopende vergaderingen en branches. Of u nu een 
                  notulist zoekt voor terugkerende vergaderingen of op ad hoc basis, overdag of 's avonds, 
                  MAS Services is u graag van dienst.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Het verslag kan in de door u gewenste vorm worden aangeleverd, van actielijst tot uitvoerig 
                  verslag. Uiteraard wordt daarbij goed gecontroleerd op taalgebruik, spelling en grammatica.
                </p>
              </CardContent>
            </Card>

            {/* Online Meetings */}
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="shadow-xl border-0 overflow-hidden">
                <CardHeader className="bg-rose-400 text-white">
                  <div className="flex items-center gap-3">
                    <Video className="h-8 w-8" />
                    <CardTitle className="text-2xl">Online vergaderen</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Sinds de uitbraak van COVID-19 vinden veel vergaderingen online plaats. Uiteraard staat 
                    MAS Services ook hiermee graag voor u klaar.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Wilt u de vergadering wel door laten gaan, maar weet u niet hoe u een digitale vergadering 
                    moet organiseren en notuleren? Of wilt u alleen even oefenen?
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Het notuleren van een vergadering via WhatsApp, Zoom, Microsoft Teams of een andere 
                    vergadertool is prima mogelijk. Neem gerust contact op om de mogelijkheden van digitaal 
                    vergaderen te bespreken.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Users className="h-8 w-8 text-rose-500" />
                    <h3 className="text-2xl font-bold text-gray-900">Flexibele service</h3>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Terugkerende of ad-hoc vergaderingen</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Overdag of 's avonds beschikbaar</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Online en offline vergaderingen</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Verschillende rapportagevormen</span>
                    </div>
                  </div>

                  <div className="bg-rose-50 p-6 rounded-lg">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Wist u dat MAS Services u ook met andere werkzaamheden kan helpen? 
                      Ontdek de mogelijkheden in administratie en secretarieel!
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="border-rose-200 hover:border-rose-300">
                        <Link to="/administratie">Administratie</Link>
                      </Button>
                      <Button variant="outline" size="sm" className="border-rose-200 hover:border-rose-300">
                        <Link to="/secretarieel">Secretarieel</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA */}
            <Card className="shadow-lg border-0 bg-rose-400 text-white">
              <CardContent className="p-12 text-center">
                <h3 className="text-3xl font-bold mb-4">Professioneel notuleren nodig?</h3>
                <p className="text-xl text-rose-100 mb-8 leading-relaxed">
                  Laat uw vergaderingen professioneel notuleren door MAS Services. 
                  Neem contact op voor een vrijblijvende offerte.
                </p>
                <Button size="lg" variant="secondary" className="bg-white text-rose-400 hover:bg-gray-50 px-8 py-3">
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

      <Footer />
    </div>
  );
};

export default Notuleerservice;
