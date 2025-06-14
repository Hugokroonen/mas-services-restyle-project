
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Bericht verzonden!",
      description: "Bedankt voor uw bericht. We nemen zo spoedig mogelijk contact met u op.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-rose-50">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600">
                Contact
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Een goede samenwerking is maatwerk. Bel of e-mail gerust en leg uw vraag of wens voor. 
              Ik kijk er naar uit om u van dienst te kunnen zijn!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-rose-500 to-purple-600 text-white">
                <CardTitle className="text-2xl">Neem Contact Op</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-medium">
                      Uw naam (vereist)
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2 border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-medium">
                      Uw e-mail adres (vereist)
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2 border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-gray-700 font-medium">
                      Onderwerp
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      className="mt-2 border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-medium">
                      Uw bericht
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="mt-2 border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700"
                  >
                    Verzenden
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Photo */}
            <div className="space-y-8">
              <Card className="shadow-lg border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Contactgegevens</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">E-mail</h4>
                        <p className="text-gray-600">info@mas-services.nl</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Telefoon</h4>
                        <p className="text-gray-600">06-36374035</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Adres</h4>
                        <p className="text-gray-600">
                          Oude Dijk 84<br />
                          5298 BE Liempde
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 overflow-hidden">
                <CardContent className="p-0">
                  <img 
                    src="/lovable-uploads/a29069a1-ae4b-4a1f-8c38-74ebd396084e.png" 
                    alt="MAS Services contact persoon" 
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="p-6 bg-gradient-to-br from-rose-50 to-purple-50">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">MAS Services</h4>
                    <p className="text-gray-600">
                      Professionele secretariële diensten in Liempde en omgeving. 
                      Persoonlijke service en kwaliteit staan bij ons voorop.
                    </p>
                  </div>
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

export default Contact;
