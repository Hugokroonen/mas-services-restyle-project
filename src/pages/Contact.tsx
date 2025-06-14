
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Bericht verzonden!",
      description: "Ik neem zo spoedig mogelijk contact met u op.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-rose-500">
                Contact
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Heeft u vragen over de diensten of wilt u een vrijblijvende offerte? 
              Ik help u graag verder. Neem gerust contact op!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Contact Form */}
            <div className="space-y-6">
              {/* Contact Form */}
              <Card className="shadow-xl border-0 h-fit">
                <CardHeader className="bg-rose-400 text-white">
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Send className="h-6 w-6" />
                    Stuur een bericht
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Naam *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="border-gray-300 focus:border-rose-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="border-gray-300 focus:border-rose-400"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefoon</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="border-gray-300 focus:border-rose-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Onderwerp</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="border-gray-300 focus:border-rose-400"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Bericht *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="border-gray-300 focus:border-rose-400"
                        placeholder="Vertel meer over uw project of vraag..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      disabled={isSubmitting}
                      className="w-full bg-rose-400 hover:bg-rose-500 text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      {isSubmitting ? (
                        "Versturen..."
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Verstuur bericht
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Why MAS Services */}
              <Card className="shadow-lg border-0 bg-rose-50 h-fit">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Waarom MAS Services?</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-rose-400" />
                      <span className="text-gray-700 text-sm">Ervaren professional</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-rose-400" />
                      <span className="text-gray-700 text-sm">Flexibele samenwerking</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-rose-400" />
                      <span className="text-gray-700 text-sm">Persoonlijke aanpak</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-rose-400" />
                      <span className="text-gray-700 text-sm">Snelle responstijd</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Photo and Contact Information */}
            <div className="space-y-6">
              <Card className="shadow-lg border-0 overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0">
                  <div className="w-full h-96 overflow-hidden">
                    <img 
                      src="/lovable-uploads/e706c6aa-ddc3-45b2-a8e3-0838040bbd0d.png" 
                      alt="Gidi Kroonen - MAS Services"
                      className="w-full h-full object-cover object-[center_20%]"
                    />
                  </div>
                  <div className="p-6 bg-rose-50">
                    <h4 className="font-bold text-gray-900 text-lg mb-2">MAS Services</h4>
                    <p className="text-gray-600">Gidi Kroonen</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 flex-1">
                <CardContent className="p-6 h-full flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Contactgegevens</h3>
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-rose-400 rounded-full flex items-center justify-center">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">E-mail</p>
                        <p className="text-gray-600">info@mas-services.nl</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-rose-400 rounded-full flex items-center justify-center">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Telefoon</p>
                        <p className="text-gray-600">06-36374035</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-rose-400 rounded-full flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Locatie</p>
                        <p className="text-gray-600">Boxtel</p>
                      </div>
                    </div>
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
