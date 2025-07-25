
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const QuickContact = () => {
  return (
    <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-lg">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Direct contact</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-rose-400 rounded-lg flex items-center justify-center">
              <Phone className="h-4 w-4 text-white" />
            </div>
            <a href="tel:0636374035" className="text-gray-700 hover:text-rose-400 transition-colors">
              06-36374035
            </a>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-rose-400 rounded-lg flex items-center justify-center">
              <Mail className="h-4 w-4 text-white" />
            </div>
            <a href="mailto:info@mas-services.nl" className="text-gray-700 hover:text-rose-400 transition-colors">
              info@mas-services.nl
            </a>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-rose-400 rounded-lg flex items-center justify-center">
              <MapPin className="h-4 w-4 text-white" />
            </div>
            <span className="text-gray-700">Boxtel</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickContact;
