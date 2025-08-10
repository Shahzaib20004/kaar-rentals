import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Truck, Users, Zap, Crown, Compass } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Sedan",
    icon: Car,
    description: "Comfortable & fuel efficient",
    count: 45
  },
  {
    id: 2,
    name: "SUV",
    icon: Truck,
    description: "Spacious family vehicles",
    count: 38
  },
  {
    id: 3,
    name: "Luxury",
    icon: Crown,
    description: "Premium experience",
    count: 22
  },
  {
    id: 4,
    name: "Electric",
    icon: Zap,
    description: "Eco-friendly options",
    count: 15
  },
  {
    id: 5,
    name: "Minivan",
    icon: Users,
    description: "Group transportation",
    count: 12
  },
  {
    id: 6,
    name: "Sports",
    icon: Compass,
    description: "High performance",
    count: 8
  }
];

const CarCategories = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Choose Your Perfect <span className="text-gold">Category</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            From economical sedans to luxury SUVs, find the perfect vehicle for every occasion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.id} className="bg-dark-surface border-border hover:border-gold/30 transition-all duration-300 group hover:shadow-gold/20 hover:shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{category.name}</h3>
                  <p className="text-text-secondary mb-4">{category.description}</p>
                  <div className="text-gold font-medium mb-6">{category.count} vehicles available</div>
                  <Button variant="outline" className="w-full hover:bg-gold hover:text-primary-foreground hover:border-gold">
                    View {category.name}s
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CarCategories;
