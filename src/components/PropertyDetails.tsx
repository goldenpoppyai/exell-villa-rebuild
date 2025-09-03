import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Wifi, 
  Car, 
  Utensils, 
  Waves, 
  TreePalm, 
  Dumbbell, 
  Wind, 
  Shield,
  Users,
  Bed,
  Bath,
  Home,
  MapPin,
  Star
} from 'lucide-react';
import villaInterior from '@/assets/villa-interior.jpg';

const PropertyDetails = () => {
  const amenities = [
    { icon: Wifi, label: 'High-Speed WiFi', description: 'Fiber optic internet throughout' },
    { icon: Car, label: 'Private Parking', description: 'Secure garage for 4 vehicles' },
    { icon: Utensils, label: 'Gourmet Kitchen', description: 'Professional-grade appliances' },
    { icon: Waves, label: 'Infinity Pool', description: 'Heated with ocean views' },
    { icon: TreePalm, label: 'Private Garden', description: 'Tropical landscaping' },
    { icon: Dumbbell, label: 'Fitness Center', description: 'Fully equipped gym' },
    { icon: Wind, label: 'Climate Control', description: 'Central A/C throughout' },
    { icon: Shield, label: '24/7 Security', description: 'Casa de Campo protection' },
  ];

  const specifications = [
    { icon: Home, label: 'Living Space', value: '8,500 sq ft' },
    { icon: Bed, label: 'Bedrooms', value: '6 Master Suites' },
    { icon: Bath, label: 'Bathrooms', value: '6 Full + 3 Half' },
    { icon: Users, label: 'Max Guests', value: '12 People' },
    { icon: MapPin, label: 'Location', value: 'Cacique 31, Casa de Campo' },
    { icon: Star, label: 'Rating', value: '5 Stars Luxury' },
  ];

  return (
    <section id="property" className="py-24 bg-subtle-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Home className="w-4 h-4 text-primary" />
            <span className="text-primary font-body text-sm font-medium">Property Details</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Luxury Beyond Compare
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Villa Du Cacique represents the pinnacle of Caribbean luxury living, meticulously designed 
            to provide an unparalleled vacation experience in the heart of Casa de Campo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Property Image */}
          <div className="relative">
            <img 
              src={villaInterior} 
              alt="Villa Du Cacique Interior"
              className="w-full h-[600px] object-cover rounded-2xl luxury-shadow"
            />
            <div className="absolute top-6 left-6">
              <Badge className="bg-primary text-primary-foreground font-body font-semibold px-3 py-2">
                Premium Suite
              </Badge>
            </div>
          </div>

          {/* Specifications */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-3xl font-bold text-foreground mb-6">
                Property Specifications
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {specifications.map((spec, index) => (
                  <Card key={index} className="border-border/50 transition-luxury hover:shadow-card">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-2">
                        <spec.icon className="w-5 h-5 text-primary" />
                        <span className="font-body text-sm font-medium text-muted-foreground">
                          {spec.label}
                        </span>
                      </div>
                      <div className="font-heading text-xl font-semibold text-foreground">
                        {spec.value}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Amenities Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl font-bold text-foreground mb-4">
              World-Class Amenities
            </h3>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Every detail has been carefully curated to ensure your stay exceeds expectations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <Card key={index} className="border-border/50 transition-luxury hover:shadow-card group">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 luxury-gradient rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-luxury">
                    <amenity.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="font-heading text-lg font-semibold text-foreground">
                    {amenity.label}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="font-body text-sm text-muted-foreground">
                    {amenity.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;