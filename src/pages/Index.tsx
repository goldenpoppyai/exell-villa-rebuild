import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PropertyDetails from '@/components/PropertyDetails';
import LocationMap from '@/components/LocationMap';
import ContactForm from '@/components/ContactForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <PropertyDetails />
        <LocationMap />
        <ContactForm />
      </main>
      
      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="font-heading text-xl font-bold mb-4">Villa Du Cacique</h3>
              <p className="font-body text-secondary-foreground/80 text-sm leading-relaxed">
                Exell Dream Estate - Your gateway to luxury Caribbean living in the heart of Casa de Campo Resort.
              </p>
            </div>
            <div>
              <h4 className="font-body font-semibold mb-4">Contact</h4>
              <div className="space-y-2 font-body text-sm text-secondary-foreground/80">
                <div>Phone: +1 (809) 555-0123</div>
                <div>Email: info@exelldreamestate.com</div>
                <div>Casa de Campo, La Romana, DR</div>
              </div>
            </div>
            <div>
              <h4 className="font-body font-semibold mb-4">Experience</h4>
              <div className="space-y-2 font-body text-sm text-secondary-foreground/80">
                <div>6 Master Bedrooms</div>
                <div>9 Luxury Bathrooms</div>
                <div>Up to 12 Guests</div>
                <div>Starting at $2,500/night</div>
              </div>
            </div>
          </div>
          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
            <p className="font-body text-sm text-secondary-foreground/60">
              &copy; 2024 Exell Dream Estate. All rights reserved. Villa Du Cacique - Casa de Campo Resort.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
