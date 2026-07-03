"use client";

import { useState, useRef, useEffect } from "react";
import {
  Search,
  Moon,
  Sun,
  GitCompare,
  Heart,
  User,
  ShoppingCart,
  Menu,
  ArrowRight,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Tv,
  WashingMachine,
  Microwave,
  Speaker,
  Droplets,
  Headphones,
  Truck,
  ShieldCheck,
  Headset,
  Share2,
  ThumbsUp,
  Zap,
  RefreshCw,
  X, // replaced "cycle" icon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDark = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };
  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  // Product data (simplified)
  const products = [
    {
      id: 1,
      name: "Von Freestanding Cooker 3 Gas + 1 Electric - Inox Grey",
      price: 44995,
      originalPrice: 59995,
      discount: 25,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbdOJ7gg4YmvgzrloDZGci12q_XOVdKJ3KwdpWDXU_aWGzcf7jiI-Lvg0ZjUwADhVRZLDOZiaopY5Wv_f9531DTx5aV5adMcuAVngFr4_7aF1b6wqnupaz3x8BAIaRLJy4P_xr5oU3E7I_3l714Jn6novnHXjYjjWA9TZOqhmTdf5GvaAGcKCms8xGi25HflfOQeABeEKerSTFiOvYVFh4qCXgbg-Hg8yC7K8sD334mgV85vX94A_BP_tndObnLeyG3nS80J8R",
    },
    {
      id: 2,
      name: "Hisense Digital Solo Microwave Oven, 25L - Black",
      price: 13995,
      originalPrice: 16995,
      discount: 18,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsnlFFnRFuaot3nGt9h0Hkq7vIW4yJKmSrL-8mljA-Bj6UrwbC0EdHIAABy1_5eCR1cVzo4zR6cc7IrhVYmiwLQ4SBvNbaguDcwtn6WkFpLx1QDU1b0rQnbgWCG0DgLLKbuWGQkoi9-2TTU-vDd-cUFpk8Kh-JgY0D4yWHy9n2KNfZVEL0-5AjSAp7WOrYaGP0RZGRQM39ZyuWtOenZXI5spyZmLtLbozzwNukY9baXgA2OhuRiFNSDRR2Y3ZZRdbdFLezY8mq",
    },
    {
      id: 3,
      name: "Hisense Compressor Cooling Top Loading Dispenser",
      price: 15995,
      originalPrice: 22995,
      discount: 17,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUNurvmhcv5GL2U9fCaWWfffHG5EFiT7OAaxSCnWde31jK03sGVsfunr4Ze1i8LQCgIxaUx1fmRWy40t7Ea4wsPuurr_g56kpx5LY2UCSmbFLMGPFtkn27hWtE9BqYIyIIPg8uWqOlgo32bD2CiAyJ-GDkqYBiQ13Csq2py850tdq05G83dciPgRaF6c894EVYOstuLlt_nAw5h6_yUesRkdH-3kv4YDe9Qb1nNUz7Rm5gDCc0Xk5UbnOCj_ps3_lLe42O61AG",
    },
    {
      id: 4,
      name: "LG Vivace 8.5kg AI DD Front Load Washer",
      price: 78500,
      originalPrice: 89000,
      discount: 12,
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqNNwmLv84o5Blei5C_gWqmlcaWoiQ8EJiyb3wkRxsZwUcegkLAJQrBoJG2f0_ZNsJWIU8Cf8HJpBVv1G33J8paAijWHMF4G30faEKh3F11_mdfGHwuvVmWvqhnJo8a4G1FdDij4qC28AFx83jgfPffxtzWOKsPHlN30uWz30oqp2haOPv-um3A3qyjM7LH3zL_XeTsWDmZ2z5upex_zP96vsNGRn0_L-UFKTl_sMlgzfAY1DNi8W8H5Aaahjxj7pQBuKNCPJZ",
    },
  ];

  const categories = [
    { name: "Televisions", icon: Tv, items: 57 },
    { name: "Refrigerators", icon: Zap, items: 79 },
    { name: "Washers", icon: WashingMachine, items: 48 },
    { name: "Microwaves", icon: Microwave, items: 52 },
    { name: "Audio Systems", icon: Speaker, items: 59 },
    { name: "Dispensers", icon: Droplets, items: 14 },
  ];
 const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <div className="bg-background text-on-surface font-body-lg">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-stack-lg mb-stack-lg">
          <div className="lg:col-span-9 relative rounded-xl overflow-hidden aspect-[21/9] group shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2Vaxp0zyMnCEM4IeLp4axQuv9H5hqszuzVoNMAuUUQZBjw7ln77JiBAm73ANwH-Y6iOER06XYlo1kJkCMM52Nemb53SvV5d90aEIEOIjCj1EyBkozVYvpHYWlJmz9C9vlSvl2MYAIyXhPhUztIcYCju8xIW4-nVGspR2rbp7n1QfYypmu_qf9mB6OWCYRr5S8723yMCk7qJHp6XH1rBmJFWCNenVo31Frx9F6U1LbeEDuzlQEVwdXhq80sH73iExmkF7qYy0D"
              alt="Luxury modern kitchen with high-end appliances"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-center px-4 sm:px-8 md:px-12">
              <Badge className="w-fit mb-2 sm:mb-4 bg-primary text-white hover:bg-primary/90 text-xs sm:text-sm">
                ANNIVERSARY SALE
              </Badge>
              <h2 className="font-display-lg text-display-lg text-white mb-2 sm:mb-4 max-w-xl text-3xl sm:text-4xl lg:text-5xl">
                Precision Engineered For Your Home.
              </h2>
              <p className="text-white/80 font-body-lg text-body-lg mb-4 sm:mb-8 max-w-md text-sm sm:text-base">
                Upgrade to professional-grade appliances with up to 40% off our best-selling collections.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-label-lg text-label-lg w-fit transition-all flex items-center gap-2 text-sm sm:text-base">
                Shop Deals Now
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
            {/* Navigation dots */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-12 z-20 flex gap-2">
              <div className="w-6 sm:w-8 h-1.5 bg-primary rounded-full"></div>
              <div className="w-2 h-1.5 bg-white/50 rounded-full"></div>
              <div className="w-2 h-1.5 bg-white/50 rounded-full"></div>
            </div>
          </div>

          {/* Side cards */}
          <div className="lg:col-span-3 flex flex-col gap-stack-lg">
            <Card className="flex-1 bg-surface-container p-4 sm:p-stack-md rounded-xl flex flex-col justify-between border border-outline-variant/30 min-h-[160px] sm:min-h-[200px]">
              <CardContent className="p-0 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-primary font-label-lg text-label-lg mb-1 sm:mb-2">Deal of the Day</p>
                  <h3 className="font-headline-md text-headline-md text-base sm:text-lg">Smart 4K UHD TV</h3>
                  <p className="text-on-surface-variant text-body-sm font-body-sm text-xs sm:text-sm">Save Ksh 15,000 today only.</p>
                </div>
                <div className="relative h-20 sm:h-24 mt-2 sm:mt-4">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjMPnuZxiAYH0QI1YhA7QTAI9vGGAYw3pJcLbDYV9jXC6mtjTyz9vkmv2HGP-tR6hagcZU7NVMtrLdq3c-a8BIggajix3b-HvlAh1m57CdYH4soewVrYJ3PinmsyRICfW7y34yqySEzhM4BdOSHQ7Vpcw8nJDU9i2dQbZpxpx-6WI9NKys0_otZZUi_Z-H3JXThmPnXXnVLHrtldHxhxq4zOfV-RE6o5XYMXjBCx5TFY-gm5Ghc2Tn-1VFwGe1mlAbX-As6_l7"
                    alt="Smart 4K TV"
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="flex-1 bg-inverse-surface text-surface p-4 sm:p-stack-md rounded-xl flex flex-col justify-between border-none min-h-[140px] sm:min-h-[180px]">
              <CardContent className="p-0 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-primary-fixed-dim font-label-lg text-label-lg mb-1 sm:mb-2">Exclusive Outlet</p>
                  <h3 className="font-headline-md text-headline-md text-white text-base sm:text-lg">Refurbished Units</h3>
                  <p className="text-white/60 text-body-sm font-body-sm text-xs sm:text-sm">Quality guaranteed.</p>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-primary-fixed-dim font-black text-xl sm:text-2xl">VISIT</span>
                  <RefreshCw className="w-6 h-6 sm:w-8 sm:h-8 text-white/20" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-stack-lg">
          <div className="flex items-center justify-between mb-stack-md flex-wrap gap-2">
            <h2 className="font-headline-lg-mobile md:text-headline-lg text-headline-lg">Shop by Category</h2>
            <a href="#" className="text-primary font-label-lg text-label-lg hover:underline decoration-primary text-sm sm:text-base">
              Explore All Categories
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-stack-md">
            {categories.map((cat) => (
              <Card
                key={cat.name}
                className="bg-surface-container-low p-4 sm:p-6 rounded-xl text-center group cursor-pointer hover:bg-surface-container-high transition-all border border-outline-variant/20"
              >
                <CardContent className="p-0">
                  <div className="mb-4 aspect-square flex items-center justify-center">
                    <cat.icon className="text-4xl sm:text-5xl text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="font-label-lg text-label-lg text-sm sm:text-base">{cat.name}</p>
                  <p className="text-on-surface-variant text-xs">{cat.items} Items</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Trending Products */}
        <section className="mb-stack-lg">
          <div className="flex items-center justify-between mb-stack-md flex-wrap gap-2">
            <h2 className="font-headline-lg-mobile md:text-headline-lg text-headline-lg">Trending Now</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full w-8 h-8 sm:w-10 sm:h-10" onClick={scrollLeft}>
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full w-8 h-8 sm:w-10 sm:h-10" onClick={scrollRight}>
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
          </div>
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-gutter pb-8 hide-scrollbar snap-x"
          >
            {products.map((product) => (
              <Card
                key={product.id}
                className="min-w-[220px] sm:min-w-[280px] bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/30 product-card-shadow relative snap-start"
              >
                <Badge className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded z-10">
                  {product.discount}% OFF
                </Badge>
                <div className="p-stack-md aspect-square flex items-center justify-center bg-white">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="h-4/5 object-contain"
                  />
                </div>
                <CardContent className="p-4 sm:p-stack-md">
                  <h4 className="font-label-lg text-label-lg mb-2 line-clamp-2 min-h-[40px] text-sm sm:text-base">
                    {product.name}
                  </h4>
                  <div className="flex items-baseline gap-2 mb-4 flex-wrap">
                    <span className="text-primary font-headline-md text-headline-md text-base sm:text-xl">
                      Ksh {product.price.toLocaleString()}
                    </span>
                    <span className="text-on-surface-variant text-xs line-through">
                      Ksh {product.originalPrice.toLocaleString()}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full py-2 border-primary text-primary rounded-lg font-label-lg text-label-lg flex items-center justify-center gap-2 hover:bg-primary/5 transition-all text-sm sm:text-base"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Brand Showcase */}
        <section className="mb-stack-lg bg-inverse-surface rounded-2xl p-4 sm:p-stack-lg overflow-hidden relative">
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[200px] sm:text-[300px] text-white">verified</span>
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 sm:gap-stack-lg">
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-display-lg text-display-lg text-white mb-4 text-3xl sm:text-4xl lg:text-5xl">Authorized Distributor.</h2>
              <p className="text-white/70 font-body-lg text-body-lg mb-6 sm:mb-8 max-w-lg text-sm sm:text-base">
                We partner directly with global leaders to bring you genuine parts, extended warranties, and
                professional installation services for every appliance we sell.
              </p>
              <div className="flex flex-wrap gap-4 sm:gap-stack-lg justify-center md:justify-start opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                <span className="text-white font-black text-xl sm:text-2xl">LG</span>
                <span className="text-white font-black text-xl sm:text-2xl">SAMSUNG</span>
                <span className="text-white font-black text-xl sm:text-2xl">HISENSE</span>
                <span className="text-white font-black text-xl sm:text-2xl">BOSCH</span>
                <span className="text-white font-black text-xl sm:text-2xl">VON</span>
              </div>
            </div>
            <div className="flex-1 w-full max-w-md bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-stack-md">
              <div className="flex items-center gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <Headset className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="text-white font-label-lg text-label-lg text-sm sm:text-base">Expert Support</p>
                  <p className="text-white/60 text-xs">Available 24/7 for you</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-surface-container-highest rounded-full flex items-center justify-center text-primary flex-shrink-0">
                  <Truck className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="text-white font-label-lg text-label-lg text-sm sm:text-base">Same-day Delivery</p>
                  <p className="text-white/60 text-xs">For orders within Nairobi</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-surface-container-highest rounded-full flex items-center justify-center text-primary flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="text-white font-label-lg text-label-lg text-sm sm:text-base">Warranty Protected</p>
                  <p className="text-white/60 text-xs">Manufacturer backed guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container dark:bg-inverse-surface border-t border-outline-variant dark:border-outline">
        <div className="flex flex-col md:flex-row justify-between items-center py-4 sm:py-stack-lg px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto gap-4 sm:gap-stack-lg">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-title-lg font-title-lg font-bold text-on-surface dark:text-inverse-on-surface text-sm sm:text-base">
              Smart Electronics
            </span>
            <p className="font-label-sm text-label-sm text-on-surface-variant text-xs sm:text-sm">
              © 2024 Smart Electronics Appliances. All rights reserved.
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-stack-lg">
            <a
              href="#"
              className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface transition-colors hover:underline decoration-primary text-xs sm:text-sm"
            >
              About Us
            </a>
            <a
              href="#"
              className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface transition-colors hover:underline decoration-primary text-xs sm:text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface transition-colors hover:underline decoration-primary text-xs sm:text-sm"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface transition-colors hover:underline decoration-primary text-xs sm:text-sm"
            >
              Shipping Info
            </a>
            <a
              href="#"
              className="font-body-sm text-body-sm text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface transition-colors hover:underline decoration-primary text-xs sm:text-sm"
            >
              Contact Support
            </a>
          </nav>
          <div className="flex gap-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-outline-variant flex items-center justify-center cursor-pointer hover:bg-surface-container-high transition-all">
              <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-outline-variant flex items-center justify-center cursor-pointer hover:bg-surface-container-high transition-all">
              <ThumbsUp className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}