import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Booking Request Submitted!",
      description: "We'll contact you within 24 hours to confirm your reservation.",
    });
    
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (809) 555-0123',
      href: 'tel:+18095550123',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'reservations@exelldreamestate.com',
      href: 'mailto:reservations@exelldreamestate.com',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Cacique 31, Casa de Campo Resort, La Romana, DR',
      href: '#location',
    },
    {
      icon: Clock,
      label: 'Office Hours',
      value: 'Mon-Sun: 8:00 AM - 10:00 PM (EST)',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Send className="w-4 h-4 text-primary" />
            <span className="text-primary font-body text-sm font-medium">Get in Touch</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Reserve Your Stay
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to experience luxury like never before? Contact us to check availability 
            and secure your dates at Villa Du Cacique.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-8">
              Contact Information
            </h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 luxury-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-body font-medium text-foreground mb-1">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a 
                        href={item.href}
                        className="font-body text-sm text-muted-foreground hover:text-primary transition-smooth"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="font-body text-sm text-muted-foreground">
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Pricing Info */}
            <Card className="mt-8 border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="font-heading text-lg text-foreground">
                  Starting Rate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="font-heading text-3xl font-bold text-primary mb-2">
                  $2,500
                  <span className="text-lg font-normal text-muted-foreground">/night</span>
                </div>
                <p className="font-body text-sm text-muted-foreground">
                  Rates vary by season and availability. Minimum 3-night stay required.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Reservation Form */}
          <div className="lg:col-span-2">
            <Card className="border-border/50 luxury-shadow">
              <CardHeader>
                <CardTitle className="font-heading text-2xl font-bold text-foreground">
                  Request Reservation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="font-body font-medium">
                        First Name *
                      </Label>
                      <Input 
                        id="firstName" 
                        required 
                        className="font-body"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="font-body font-medium">
                        Last Name *
                      </Label>
                      <Input 
                        id="lastName" 
                        required 
                        className="font-body"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-body font-medium">
                        Email Address *
                      </Label>
                      <Input 
                        id="email" 
                        type="email" 
                        required 
                        className="font-body"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-body font-medium">
                        Phone Number
                      </Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        className="font-body"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label className="font-body font-medium">Check-in Date *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-body font-normal",
                              !checkIn && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {checkIn ? format(checkIn, "MMM dd, yyyy") : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={checkIn}
                            onSelect={setCheckIn}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <Label className="font-body font-medium">Check-out Date *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-body font-normal",
                              !checkOut && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {checkOut ? format(checkOut, "MMM dd, yyyy") : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={checkOut}
                            onSelect={setCheckOut}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="guests" className="font-body font-medium">
                        Number of Guests *
                      </Label>
                      <Select required>
                        <SelectTrigger className="font-body">
                          <SelectValue placeholder="Select guests" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} {num === 1 ? 'Guest' : 'Guests'}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-body font-medium">
                      Special Requests or Message
                    </Label>
                    <Textarea 
                      id="message"
                      rows={4}
                      className="font-body"
                      placeholder="Let us know about any special requirements, dietary restrictions, or preferences..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full luxury-gradient text-primary-foreground font-body font-semibold py-6 text-lg transition-luxury hover:scale-[1.02] glow-shadow"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                        Processing Request...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Submit Reservation Request
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;