import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Fuel, Users, Gauge } from "lucide-react";
import { Link } from "react-router-dom";

const featuredCars = [
  {
    id: 1,
    name: "Mercedes-Benz C-Class",
    brand: "Mercedes-Benz",
    year: 2023,
    location: "New York",
    rate: 89,
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=400&h=300&fit=crop",
    mileage: "32 MPG",
    withDriver: true,
    availability: "Available"
  },
  {
    id: 2,
    name: "BMW X5",
    brand: "BMW",
    year: 2023,
    location: "Los Angeles",
    rate: 120,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop",
    mileage: "28 MPG",
    withDriver: false,
    availability: "Available"
  },
  {
    id: 3,
    name: "Audi A4",
    brand: "Audi",
    year: 2022,
    location: "Chicago",
    rate: 75,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop",
    mileage: "35 MPG",
    withDriver: true,
    availability: "Available"
  },
  {
    id: 4,
    name: "Tesla Model S",
    brand: "Tesla",
    year: 2023,
    location: "Miami",
    rate: 110,
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=300&fit=crop",
    mileage: "Electric",
    withDriver: false,
    availability: "Rented"
  }
];

const FeaturedCars = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured <span className="text-gold">Cars</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Discover our hand-picked selection of premium vehicles available for rent
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredCars.map((car) => (
            <Card key={car.id} className="bg-dark-surface border-border hover:border-gold/30 transition-all duration-300 group overflow-hidden hover:shadow-gold/20 hover:shadow-xl">
              <div className="relative">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge 
                  className={`absolute top-3 left-3 ${
                    car.availability === 'Available' 
                      ? 'bg-green-600 hover:bg-green-700' 
                      : 'bg-red-600 hover:bg-red-700'
                  }`}
                >
                  {car.availability}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-foreground mb-2">{car.name}</h3>
                <p className="text-text-secondary text-sm mb-4">{car.year} • {car.brand}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-text-secondary">
                    <MapPin className="w-4 h-4 mr-2 text-gold" />
                    {car.location}
                  </div>
                  <div className="flex items-center text-sm text-text-secondary">
                    <Fuel className="w-4 h-4 mr-2 text-gold" />
                    {car.mileage}
                  </div>
                  <div className="flex items-center text-sm text-text-secondary">
                    <Users className="w-4 h-4 mr-2 text-gold" />
                    {car.withDriver ? 'With Driver' : 'Self Drive'}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold text-gold">
                    ${car.rate}<span className="text-sm text-text-secondary">/day</span>
                  </div>
                  <Button size="sm" variant="premium" disabled={car.availability === 'Rented'}>
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/cars">
            <Button size="lg" variant="outline" className="hover:bg-gold hover:text-primary-foreground hover:border-gold">
              View All Cars
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
