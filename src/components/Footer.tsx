import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleSocialClick = (platform) => {
    const socialLinks = {
      instagram: "https://instagram.com/kaar.rentals",
      facebook: "https://facebook.com/kaar.rentals", 
      whatsapp: "https://wa.me/923090017510",
      tiktok: "https://tiktok.com/@kaar.rentals"
    };
    
    window.open(socialLinks[platform], '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-dark-elevated border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">K</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Kaar.Rentals</h1>
                <p className="text-xs text-text-secondary">Premium Car Experience</p>
              </div>
            </Link>
            <p className="text-text-secondary">
              Your trusted partner for premium car rentals. Experience luxury and reliability with our extensive fleet.
            </p>
            <div className="flex space-x-3">
              <Button 
                size="icon" 
                variant="ghost" 
                className="text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-200 hover:scale-105"
                onClick={() => handleSocialClick('instagram')}
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost" 
                className="text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-200 hover:scale-105"
                onClick={() => handleSocialClick('facebook')}
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost" 
                className="text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-200 hover:scale-105"
                onClick={() => handleSocialClick('whatsapp')}
                aria-label="Contact us on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </Button>
              <Button 
                size="icon" 
                variant="ghost" 
                className="text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-200 hover:scale-105"
                onClick={() => handleSocialClick('tiktok')}
                aria-label="Follow us on TikTok"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/cars" className="block text-text-secondary hover:text-gold transition-colors">All Cars</Link>
              <Link to="/add-car" className="block text-text-secondary hover:text-gold transition-colors">List Your Car</Link>
              <Link to="/#about" className="block text-text-secondary hover:text-gold transition-colors">About Us</Link>
              <Link to="/#contact" className="block text-text-secondary hover:text-gold transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gold" />
                <span className="text-text-secondary">+92 3090017510</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gold" />
                <span className="text-text-secondary">kaar.rentals@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-gold" />
                <span className="text-text-secondary">123 Car Street, Auto City, AC 12345</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Business Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-gold" />
                <div className="text-text-secondary">
                  <div>Mon - Fri: 8:00 AM - 8:00 PM</div>
                  <div>Sat - Sun: 9:00 AM - 6:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-secondary text-sm">
              © 2025 Kaar.Rentals. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-text-secondary hover:text-gold transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-text-secondary hover:text-gold transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;