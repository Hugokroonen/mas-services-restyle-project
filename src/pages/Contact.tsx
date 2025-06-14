
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Bericht verzonden!",
      description: "Bedankt voor uw bericht. Ik neem zo spoedig mogelijk contact met u op.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
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
              <span className="text-transparent bg-clip-text bg-rose-300">
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
            <Card className="shadow-xl border-0 transform hover:scale-105 transition-transform duration-300">
              <CardHeader className="bg-rose-300 text-white rounded-t-lg">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Send className="h-6 w-6" />
                  Neem contact op
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700 font-medium flex items-center gap-2">
                      Uw naam (vereist)
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="transition-all duration-200 border-gray-300 focus:border-rose-300 focus:ring-rose-300 hover:border-gray-400"
                      placeholder="Voer uw naam in..."
                    />
                  </div>

                  <div className="space-y-2">
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
                      className="transition-all duration-200 border-gray-300 focus:border-rose-300 focus:ring-rose-300 hover:border-gray-400"
                      placeholder="voorbeeld@email.nl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-gray-700 font-medium">
                      Onderwerp
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      className="transition-all duration-200 border-gray-300 focus:border-rose-300 focus:ring-rose-300 hover:border-gray-400"
                      placeholder="Waar kan ik u mee helpen?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-700 font-medium">
                      Uw bericht
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="transition-all duration-200 border-gray-300 focus:border-rose-300 focus:ring-rose-300 hover:border-gray-400 resize-none"
                      placeholder="Beschrijf uw vraag of wens..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full bg-rose-300 hover:bg-rose-400 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Verzenden...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Verzenden
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Photo */}
            <div className="space-y-8">
              <Card className="shadow-lg border-0 transform hover:scale-105 transition-transform duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Contactgegevens</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-rose-300 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">E-mail</h4>
                        <p className="text-gray-600 hover:text-rose-300 transition-colors cursor-pointer">info@mas-services.nl</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-rose-300 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Telefoon</h4>
                        <p className="text-gray-600 hover:text-rose-300 transition-colors cursor-pointer">06-36374035</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-rose-300 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Adres</h4>
                        <p className="text-gray-600">
                          Weikespad 5<br />
                          5283 NA Boxtel
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0">
                  <div className="w-full h-64 bg-rose-100 flex items-center justify-center">
                    <div className="w-32 h-32 bg-rose-200 rounded-full flex items-center justify-center">
                      <span className="text-rose-400 text-sm">Foto placeholder</span>
                    </div>
                  </div>
                  <div className="p-6 bg-rose-50">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">MAS Services</h4>
                    <p className="text-gray-600">
                      Professionele secretariële diensten in Boxtel en omgeving. 
                      Persoonlijke service en kwaliteit staan bij mij voorop.
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
