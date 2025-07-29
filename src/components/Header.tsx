import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-dark-surface border-b border-border/20 w-full overflow-hidden backdrop-blur-md">
      <div className="w-full max-w-full mx-auto px-6 py-4">
        <div className="flex items-center justify-between w-full min-w-0">
          {/* Logo Section */}
          <div className="flex-shrink-0 w-auto max-w-[220px]">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                K
              </div>
              <div className="flex flex-col min-w-0">
                <h1 className="text-xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent tracking-wide">
                  Kaar.Rentals
                </h1>
                <p className="text-xs text-muted-foreground font-medium">
                  Premium Car Rentals
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 flex-shrink min-w-0">
            <Link to="/cars">
              <Button variant="ghost" className="text-sm font-medium hover:bg-accent/50 transition-all duration-200">
                Cars
              </Button>
            </Link>
            <Button variant="ghost" className="text-sm font-medium hover:bg-accent/50 transition-all duration-200">
              Fleet
            </Button>
            <Button variant="ghost" className="text-sm font-medium hover:bg-accent/50 transition-all duration-200">
              Brands
            </Button>
            <Button variant="ghost" className="text-sm font-medium hover:bg-accent/50 transition-all duration-200">
              Pricing
            </Button>
            <Button variant="ghost" className="text-sm font-medium hover:bg-accent/50 transition-all duration-200">
              About
            </Button>
            <Button variant="ghost" className="text-sm font-medium hover:bg-accent/50 transition-all duration-200">
              Contact
            </Button>
            <div className="w-px h-6 bg-border/50 mx-2"></div>
            <Link to="/login">
              <Button variant="ghost" className="text-sm font-medium hover:bg-accent/50 transition-all duration-200">
                Sign In
              </Button>
            </Link>
            <Link to="/add-car">
              <Button className="text-sm font-medium bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-4 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
                List Your Car
              </Button>
            </Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-6 flex-shrink-0 max-w-[320px] min-w-0">
            {/* Contact Info - Professional Layout */}
            <div className="hidden xl:flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-foreground group cursor-pointer">
                <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <Phone className="w-4 h-4 text-green-500" />
                </div>
                <span className="font-medium">03090017510</span>
              </div>
              <div className="w-px h-8 bg-border/30"></div>
              <div className="flex items-center gap-2 text-sm text-foreground group cursor-pointer">
                <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <MessageCircle className="w-4 h-4 text-blue-500" />
                </div>
                <span className="font-medium">WhatsApp</span>
              </div>
            </div>

            {/* Google Reviews - Modern Card */}
            <div className="hidden lg:flex items-center gap-3 bg-card/50 backdrop-blur-sm border border-border/20 rounded-xl px-4 py-3 hover:bg-card/70 transition-all duration-200 cursor-pointer group">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  </div>
                  <div className="text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">4.9</span> • 5.8k reviews
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links - Modern Design */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <a
                href="https://www.instagram.com/kaar.rentals"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-xl flex items-center justify-center text-white hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@kaar.rentals"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-900 rounded-xl flex items-center justify-center text-white hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-red-600 rounded-xl flex items-center justify-center text-white hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden w-full overflow-hidden">
          <div className="mt-4 pt-4 border-t border-border/20">
            <div className="w-full overflow-x-auto scrollbar-hide">
              <nav className="flex gap-2 pb-2" style={{width: 'max-content'}}>
                <Link to="/cars">
                  <Button variant="ghost" size="sm" className="whitespace-nowrap">Cars</Button>
                </Link>
                <Button variant="ghost" size="sm" className="whitespace-nowrap">Fleet</Button>
                <Button variant="ghost" size="sm" className="whitespace-nowrap">Brands</Button>
                <Button variant="ghost" size="sm" className="whitespace-nowrap">Pricing</Button>
                <Button variant="ghost" size="sm" className="whitespace-nowrap">About</Button>
                <Button variant="ghost" size="sm" className="whitespace-nowrap">Contact</Button>
                <Link to="/login">
                  <Button variant="ghost" size="sm" className="whitespace-nowrap">Sign In</Button>
                </Link>
                <Link to="/add-car">
                  <Button size="sm" className="whitespace-nowrap bg-gradient-to-r from-amber-500 to-orange-600 text-white">
                    List Car
                  </Button>
                </Link>
              </nav>
            </div>
          </div>

          {/* Mobile Contact & Social */}
          <div className="mt-4 pt-4 border-t border-border/20 w-full">
            <div className="flex flex-col gap-4 w-full">
              {/* Contact Info */}
              <div className="flex items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-7 h-7 bg-green-500/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-3 h-3 text-green-500" />
                  </div>
                  <span className="font-medium">Call Now</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-7 h-7 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-3 h-3 text-blue-500" />
                  </div>
                  <span className="font-medium">WhatsApp</span>
                </div>
              </div>

              {/* Google Reviews */}
              <div className="flex justify-center w-full">
                <div className="bg-card/50 border border-border/20 rounded-xl px-4 py-3 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      </div>
                      <div className="text-xs text-muted-foreground">
                        <span className="font-semibold text-foreground">4.9</span> • 5.8k reviews
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links - Mobile */}
              <div className="flex items-center justify-center gap-3">
                <a
                  href="https://www.instagram.com/kaar.rentals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-xl flex items-center justify-center text-white hover:scale-105 transition-all duration-200 shadow-md"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white hover:scale-105 transition-all duration-200 shadow-md"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@kaar.rentals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center text-white hover:scale-105 transition-all duration-200 shadow-md"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center text-white hover:scale-105 transition-all duration-200 shadow-md"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;