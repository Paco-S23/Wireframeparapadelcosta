import { Link, useLocation } from "react-router";
import { Menu, X, User } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Inicio" },
    { to: "/el-club", label: "El Club" },
    { to: "/precios", label: "Precios" },
    { to: "/reservas", label: "Reservar" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/src/imports/image.png" 
              alt="Padel Costa Logo" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`transition-colors ${
                  isActive(link.to)
                    ? "text-green-600 font-medium"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/dashboard">
              <Button variant="outline" size="sm" className="gap-2">
                <User className="w-4 h-4" />
                Mi Cuenta
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-3 py-2 rounded-lg transition-colors ${
                  isActive(link.to)
                    ? "bg-green-50 text-green-600 font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="outline" className="w-full gap-2">
                <User className="w-4 h-4" />
                Mi Cuenta
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}