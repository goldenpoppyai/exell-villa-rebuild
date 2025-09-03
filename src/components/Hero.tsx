import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Bed, Bath, Users, Calendar } from 'lucide-react';
import villaHero from '@/assets/villa-hero.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={villaHero} 
          alt="Villa Du Cacique - Luxury Estate"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-overlay-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-primary font-body text-sm font-medium">Casa de Campo, La Romana</span>
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            Villa Du <span className="text-primary-glow">Cacique</span>
          </h1>
          
          <p className="font-body text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience luxury living in this stunning 6-bedroom Mediterranean masterpiece, featuring breathtaking ocean views and world-class amenities in the prestigious Casa de Campo resort.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="luxury-gradient text-primary-foreground font-body font-semibold px-8 py-4 text-lg transition-luxury hover:scale-105 glow-shadow">
              Book Your Stay
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 font-body font-semibold px-8 py-4 text-lg transition-luxury">
              Virtual Tour
            </Button>
          </div>
        </div>

        {/* Property Quick Info Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 text-center transition-luxury hover:bg-white/15">
            <Bed className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="font-heading text-2xl font-bold text-white mb-1">6</div>
            <div className="font-body text-white/80 text-sm">Bedrooms</div>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 text-center transition-luxury hover:bg-white/15">
            <Bath className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="font-heading text-2xl font-bold text-white mb-1">9</div>
            <div className="font-body text-white/80 text-sm">Bathrooms</div>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 text-center transition-luxury hover:bg-white/15">
            <Users className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="font-heading text-2xl font-bold text-white mb-1">12</div>
            <div className="font-body text-white/80 text-sm">Guests</div>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 text-center transition-luxury hover:bg-white/15">
            <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="font-heading text-2xl font-bold text-white mb-1">$2,500</div>
            <div className="font-body text-white/80 text-sm">Per Night</div>
          </Card>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;