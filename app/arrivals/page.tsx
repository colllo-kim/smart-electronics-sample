"use client";

import { useState, useEffect } from "react";
import {
  Search,
  Moon,
  Sun,
  User,
  Heart,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  Plus,
  Check,
  Globe,
  Monitor,
  Camera,
  Filter,
  GitCompare,
  Menu,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";

export default function NewArrivalsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [cartFeedback, setCartFeedback] = useState<number | null>(null);
  const [priceRange, setPriceRange] = useState([249, 1499]);

  const toggleDark = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  // Header shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (window.scrollY > 50) {
        header?.classList.add("shadow-md");
      } else {
        header?.classList.remove("shadow-md");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Product data
  const products = [
    {
      id: 1,
      name: "Precision-Cook Built-in Oven",
      series: "PRECISIONLINE SERIES",
      description: "Integrated AI temperature sensing and 12-program steam assist technology.",
      price: 549.0,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAtLcbGKhKgnacFcc1sgK9AYfOylV9kY-8PxbTFKvX3kvo1tPU1iPXxsrnUA9afIZRIoQUu7WFysB0jMeSq_u866PGTfq0Jl3wtdHDPsnzb3U7lOoW7uJqazWg3niQxUm47q8JzchiLZrZWmTuxhc2Z0Mz690HZbNzwWIWfsI5bTUbXR603WrpjXKbHcMrTBgxI6IWEUkw5rok9kr4COiumTcuhee7pB1LDGuyQnK5wtBTP4e-tozq234BVx9GAjqB1t-7monOZ",
    },
    {
      id: 2,
      name: "Smart-Cool 4-Door Fridge",
      series: "ECO-LOGIC AI",
      description: "Advanced freshness sensors and dynamic zone cooling for optimal preservation.",
      price: 1299.0,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDvqKQ0SEYdReSEphaQ-2KBq37dkBF4V31tyDM_bbmYkcbdy4aneJcBku6IU8WXHi0TLJm-cAp_M887MBj08NpfDzaw5sw59aoL3MjE3zqQxuriquxxVCqhzmE1lSOTXw1FJGn6t-NPqyjDQCHhc_1WV9eT6tnixhVtOu-5WLHjEwudLHI4SZJeWMlCsRgtntPj1MX8YpTZQG5SVPrAahvrDHC424hBvTLLUV419OwxPb8QwXP4Pjckidv94JAbIqPi9leTtH4c",
    },
    {
      id: 3,
      name: "Ultra-Silence 10kg Washer",
      series: "ACTIVECARE PRO",
      description: "Whisper-quiet brushless motor and active oxygen stain removal technology.",
      price: 649.0,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBg7z8T5WYTKgTnmsh0IO_L7jExYYY06ORDdR8QR2o3fzXqmcdoi9vGLd_EtBQbjVX-5BLwcA2zfnR3LzFV9kpXBj6x8Xf8iwWSHUT3fR8m74gGEXEZm6aoBilFUxTTyDenIqb3GXTgcKR8t44wFdXCTswymdW_BTCSKar1_MJronhrfC70e506qMsQn8S49TJcV2vYo_JyDq_fsFnlfVf1eE8INiK1Dt9zOK_vqSCWf2g8yTAja7zNFjADwmCJqXZe0yNiaYQm",
    },
    {
      id: 4,
      name: "Hyper-Induction Smart Hob",
      series: "PRECISIONLINE SERIES",
      description: "Instant heat response with touch-slide precision power controls.",
      price: 429.0,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuACNWFOoOIf_NJa7FggU9Lbzc4lEG4VPeaQrA53vph7BDYkTX9xZB7pTApmRgkM9exmnycca35GCSzuYNrYorRy3FCbd0rOUHPmXlGMhbhQoBC3xT1oKcg0dBmzb2iHIfwc6Fk5OALsu5zCTshLCvd2tCUkhLjre9JQuzXI7-mQBWgSeOMK7WWX9jjrpCBMRwJRw1sIgw76jYCTHL3ReZJcm6A8L772UFixrGbJJQYPlS_TlifsaArYkOb6hPHFy0FoTEiu2o51",
    },
    {
      id: 5,
      name: "Aqua-Save Smart Dishwasher",
      series: "ECO-LOGIC AI",
      description: "Integrated load sensors and auto-dose detergent system for maximum efficiency.",
      price: 799.0,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAoTaWFtoB4k7fC-K6FdgrvdikMTKKxR2Ppahc2cXAZA4_SiHwd3-T5PBGKOBHuOrIbf6lgdO_bLyOGj4JIDv7LVs1ObV866OQptnTRprRAbp2dZ57J8z62vB7r2yhCQ1KM06jiZYBJupCbEonBwDWCAXE_NTauPf3i6ZULzbYMwPUi5K8p-_tzHaLdkYisW0hoB4YpVl7OpzDvg6PkPIxMv7kMnO3NI--tgv4DjRvA3cN_4O1ljUrpoPxiyD_j8Lohy_sfGmlQ",
    },
    {
      id: 6,
      name: "Barista-Pro Smart Coffee Maker",
      series: "PRECISIONLINE SERIES",
      description: "App-controlled brewing with precision pressure and temperature control.",
      price: 349.0,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCIR7vzorD7ibPTKvmthyrTx0my4f28OaBXSh7eAk4iW2EUdpCkHtLxhm_yJI-xcED06pfIecJMPyRpaJnIiC2_oZkTBLWspncqrozyXH3C8wxHY4eRnBfX9hggeJNz_zplVktBQ4PKR0PBwrlCv5UnXswRmShXmJr_WZBc1dPjTAs1auJO4AI6USkMINVxN1a4J4w0wo-IwVKTI372ZaqHsCyb4ZP2nXTEXRv7VsKsCfYM2ynSuijtppC12sBHA35zt0gUJaT6",
    },
  ];

  // Handle add to cart feedback
  const handleAddToCart = (id: number) => {
    setCartFeedback(id);
    setTimeout(() => setCartFeedback(null), 2000);
  };

  // Helper to format Ksh with commas and no decimals if whole number
  const formatKsh = (price: number) => {
    return `Ksh ${price.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
  };

  return (
    <div className="bg-background text-on-surface font-body-lg">
      {/* Header */}
       <Header />

      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
        {/* Hero Banner (removed as per your code, but you can add back if needed) */}

        <div className="flex flex-col md:flex-row gap-gutter">
          {/* Sidebar Filters */}
          <aside className="w-full md:w-64 flex-shrink-0 space-y-stack-lg">
            <Card className="p-6 rounded-xl border border-surface-container-highest">
              <h3 className="font-title-lg text-title-lg mb-6">Filters</h3>
              {/* Category Filter */}
              <div className="mb-8">
                <p className="font-label-lg text-on-surface mb-4">Category</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Checkbox id="cooking" defaultChecked />
                    <Label htmlFor="cooking" className="text-body-sm cursor-pointer hover:text-primary transition-colors">
                      Cooking &amp; Ovens
                    </Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <Checkbox id="refrigeration" />
                    <Label htmlFor="refrigeration" className="text-body-sm cursor-pointer hover:text-primary transition-colors">
                      Refrigeration
                    </Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <Checkbox id="laundry" />
                    <Label htmlFor="laundry" className="text-body-sm cursor-pointer hover:text-primary transition-colors">
                      Laundry
                    </Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <Checkbox id="dishwashers" />
                    <Label htmlFor="dishwashers" className="text-body-sm cursor-pointer hover:text-primary transition-colors">
                      Smart Dishwashers
                    </Label>
                  </div>
                </div>
              </div>
              {/* Brand Filter */}
              <div className="mb-8 border-t border-surface-container pt-6">
                <p className="font-label-lg text-on-surface mb-4">Brand Series</p>
                <RadioGroup defaultValue="activecare">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="activecare" id="activecare" />
                    <Label htmlFor="activecare" className="text-body-sm cursor-pointer hover:text-primary transition-colors">
                      ActiveCare Pro
                    </Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="precision" id="precision" />
                    <Label htmlFor="precision" className="text-body-sm cursor-pointer hover:text-primary transition-colors">
                      PrecisionLine
                    </Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="ecologic" id="ecologic" />
                    <Label htmlFor="ecologic" className="text-body-sm cursor-pointer hover:text-primary transition-colors">
                      Eco-Logic AI
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              {/* Price Range */}
              <div className="border-t border-surface-container pt-6">
                <p className="font-label-lg text-on-surface mb-4">Price Range</p>
                <div className="space-y-4">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    min={0}
                    max={2000}
                    step={50}
                    className="w-full"
                  />
                  <div className="flex justify-between items-center">
                    <span className="bg-surface-container px-3 py-1 rounded text-body-sm">Ksh {priceRange[0]}</span>
                    <span className="text-on-surface-variant">to</span>
                    <span className="bg-surface-container px-3 py-1 rounded text-body-sm">Ksh {priceRange[1]}</span>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-8 py-3 text-on-surface font-label-lg border border-on-surface rounded-lg hover:bg-on-surface hover:text-white transition-all active:scale-95">
                Clear All Filters
              </Button>
            </Card>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-body-lg"><span className="font-bold">24</span> Products Found</p>
              <div className="flex items-center gap-4">
                <span className="text-body-sm text-on-surface-variant">Sort by:</span>
                <Select defaultValue="latest">
                  <SelectTrigger className="bg-transparent border-none font-label-lg focus:ring-0 cursor-pointer w-[140px] p-0 h-auto">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="latest">Latest Release</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="rating">Best Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                  isAdding={cartFeedback === product.id}
                  formatKsh={formatKsh}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center items-center gap-2">
              <Button variant="outline" size="icon" className="w-10 h-10 rounded-lg border border-surface-container hover:bg-surface-container transition-all">
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button className="w-10 h-10 rounded-lg bg-primary text-white font-label-lg hover:bg-primary/90">
                1
              </Button>
              <Button variant="outline" className="w-10 h-10 rounded-lg border border-surface-container hover:bg-surface-container font-label-lg">
                2
              </Button>
              <Button variant="outline" className="w-10 h-10 rounded-lg border border-surface-container hover:bg-surface-container font-label-lg">
                3
              </Button>
              <span className="px-2 text-on-surface-variant">...</span>
              <Button variant="outline" className="w-10 h-10 rounded-lg border border-surface-container hover:bg-surface-container font-label-lg">
                8
              </Button>
              <Button variant="outline" size="icon" className="w-10 h-10 rounded-lg border border-surface-container hover:bg-surface-container transition-all">
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container dark:bg-inverse-surface border-t border-outline-variant dark:border-outline mt-stack-lg">
        <div className="flex flex-col md:flex-row justify-between items-center py-stack-lg px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto gap-stack-md">
          <div className="flex flex-col gap-2">
            <div className="text-title-lg font-title-lg font-bold text-on-surface dark:text-inverse-on-surface">Hotpoint</div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">© 2024 Hotpoint Appliances. All rights reserved.</p>
          </div>
          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#" className="font-label-sm text-label-sm text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface transition-colors hover:underline decoration-primary">
              About Us
            </a>
            <a href="#" className="font-label-sm text-label-sm text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface transition-colors hover:underline decoration-primary">
              Privacy Policy
            </a>
            <a href="#" className="font-label-sm text-label-sm text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface transition-colors hover:underline decoration-primary">
              Terms of Service
            </a>
            <a href="#" className="font-label-sm text-label-sm text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface transition-colors hover:underline decoration-primary">
              Shipping Info
            </a>
            <a href="#" className="font-label-sm text-label-sm text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface transition-colors hover:underline decoration-primary">
              Contact Support
            </a>
          </nav>
          <div className="flex gap-4">
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
              <Globe className="w-5 h-5" />
            </a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
              <Monitor className="w-5 h-5" />
            </a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
              <Camera className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Product Card Component
function ProductCard({
  product,
  onAddToCart,
  isAdding,
  formatKsh,
}: {
  product: any;
  onAddToCart: (id: number) => void;
  isAdding: boolean;
  formatKsh: (price: number) => string;
}) {
  return (
    <Card className="group bg-white dark:bg-surface-container-lowest rounded-lg product-card-shadow border border-surface-container-highest overflow-hidden flex flex-col transition-transform hover:-translate-y-1">
      <div className="relative h-64 bg-surface-container-lowest flex items-center justify-center p-6">
        <Badge className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded hover:bg-primary/90">
          NEW ARRIVAL
        </Badge>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors"
        >
          <Heart className="w-5 h-5" />
        </Button>
        <img
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <span className="text-label-sm text-on-surface-variant mb-1">{product.series}</span>
        <h4 className="font-title-lg text-title-lg text-on-surface mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h4>
        <p className="text-body-sm text-on-surface-variant mb-4 flex-1">{product.description}</p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-surface-container">
          <span className="font-headline-md text-headline-md text-primary">{formatKsh(product.price)}</span>
          <Button
            variant="default"
            size="icon"
            className={`p-2 rounded-lg transition-all active:scale-90 ${
              isAdding ? "bg-primary" : "bg-on-surface hover:bg-primary"
            } text-white`}
            onClick={() => onAddToCart(product.id)}
          >
            {isAdding ? <Check className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
          </Button>
        </div>
      </div>
    </Card>
  );
}