import { Card, CardContent } from "@/components/ui/card";

const brands = [
  { id: 1, name: "Mercedes-Benz", logo: "🚗", count: 45 },
  { id: 2, name: "BMW", logo: "🚙", count: 38 },
  { id: 3, name: "Audi", logo: "🚗", count: 32 },
  { id: 4, name: "Toyota", logo: "🚙", count: 55 },
  { id: 5, name: "Honda", logo: "🚗", count: 41 },
  { id: 6, name: "Ford", logo: "🚙", count: 28 },
  { id: 7, name: "Nissan", logo: "🚗", count: 35 },
  { id: 8, name: "Hyundai", logo: "🚙", count: 29 }
];

const CarBrands = () => {
  return (
    <section className="py-20 bg-dark-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Popular <span className="text-gold">Brands</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Choose from our collection of premium vehicles from world-renowned manufacturers
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <Card key={brand.id} className="bg-background border-border hover:border-gold/30 transition-all duration-300 group cursor-pointer hover:shadow-gold/20 hover:shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {brand.logo}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{brand.name}</h3>
                <p className="text-sm text-gold">{brand.count} cars</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarBrands;
