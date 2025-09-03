import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Car, Plane, TreePalm } from 'lucide-react';

const LocationMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Get Mapbox token from environment variables
    const mapboxToken = import.meta.env.VITE_MAPBOX_TOKEN;
    
    if (!mapboxToken) {
      console.warn('Mapbox token not found. Please add VITE_MAPBOX_TOKEN to your environment variables.');
      return;
    }

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center: [-68.7073, 18.4509], // Casa de Campo coordinates
      zoom: 15,
      pitch: 45,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Add marker for the villa
    const marker = new mapboxgl.Marker({ color: '#B8860B' })
      .setLngLat([-68.7073, 18.4509])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
          .setHTML('<div style="padding: 10px; font-family: Inter, sans-serif;"><h3 style="margin: 0 0 5px 0; color: #B8860B; font-weight: 600;">Villa Du Cacique</h3><p style="margin: 0; color: #666;">Cacique 31, Casa de Campo Resort</p></div>')
      )
      .addTo(map.current);

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, []);

  const nearbyAttractions = [
    {
      icon: TreePalm,
      name: 'Teeth of the Dog Golf Course',
      distance: '0.5 miles',
      description: 'World-renowned Pete Dye championship course',
    },
    {
      icon: MapPin,
      name: 'Minitas Beach',
      distance: '1.2 miles',
      description: 'Private white sand beach exclusively for resort guests',
    },
    {
      icon: Car,
      name: 'Altos de Chavón',
      distance: '2.8 miles',
      description: 'Replica 16th-century Mediterranean village',
    },
    {
      icon: Plane,
      name: 'Casa de Campo Airport',
      distance: '3.5 miles',
      description: 'Private airport for charter flights',
    },
  ];

  return (
    <section id="location" className="py-24 bg-subtle-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-primary font-body text-sm font-medium">Prime Location</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Casa de Campo Paradise
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Located in the exclusive Casa de Campo resort in La Romana, Villa Du Cacique offers 
            unparalleled access to world-class amenities and the natural beauty of the Dominican Republic.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Map */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden border-border/50 luxury-shadow">
              <CardHeader className="pb-4">
                <CardTitle className="font-heading text-xl font-semibold text-foreground">
                  Villa Location & Surroundings
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div ref={mapContainer} className="h-[500px] w-full" />
                {!import.meta.env.VITE_MAPBOX_TOKEN && (
                  <div className="absolute inset-0 flex items-center justify-center bg-muted/50 backdrop-blur-sm">
                    <div className="text-center p-8 bg-background rounded-lg luxury-shadow max-w-md">
                      <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                        Map Integration
                      </h3>
                      <p className="font-body text-sm text-muted-foreground mb-4">
                        To display the interactive map, please add your Mapbox token to the environment variables.
                      </p>
                      <p className="font-body text-xs text-muted-foreground">
                        Get your free token at <span className="text-primary">mapbox.com</span>
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Nearby Attractions */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-8">
              Nearby Attractions
            </h3>
            <div className="space-y-4">
              {nearbyAttractions.map((attraction, index) => (
                <Card key={index} className="border-border/50 transition-luxury hover:shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 luxury-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                        <attraction.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-body font-semibold text-foreground">
                            {attraction.name}
                          </h4>
                          <span className="font-body text-sm text-primary font-medium">
                            {attraction.distance}
                          </span>
                        </div>
                        <p className="font-body text-sm text-muted-foreground">
                          {attraction.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Address Card */}
            <Card className="mt-8 border-primary/20 bg-primary/5">
              <CardHeader className="pb-3">
                <CardTitle className="font-heading text-lg text-foreground flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Villa Address</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="font-body font-semibold text-foreground">
                    Villa Du Cacique
                  </div>
                  <div className="font-body text-sm text-muted-foreground">
                    Cacique 31, Casa de Campo Resort<br />
                    La Romana 22000<br />
                    Dominican Republic
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;