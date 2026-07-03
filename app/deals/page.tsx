"use client";

import { useState, useEffect, useRef } from "react";
import {
  Search,
  Moon,
  Sun,
  User,
  Heart,
  ShoppingCart,
  Menu,
  ArrowRight,
  Filter,
  ChevronDown,
  ChevronUp,
  Tv,
  WashingMachine,
  Microwave,
  CookingPot,
  Refrigerator,
  Fan,
  Plus,
  Minus,
  Expand,
  GitCompare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import Header from "@/components/Header";

export default function DealsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [hours, setHours] = useState(4);
  const [minutes, setMinutes] = useState(42);
  const [seconds, setSeconds] = useState(18);
  const [inStock, setInStock] = useState(false);
  const [onSale, setOnSale] = useState(true);
  const [visibleProducts, setVisibleProducts] = useState(6);

  const toggleDark = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else if (hours > 0) {
        setHours(hours - 1);
        setMinutes(59);
        setSeconds(59);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [hours, minutes, seconds]);

  const loadMore = () => {
    setVisibleProducts((prev) => Math.min(prev + 3, products.length));
  };

  // Sample product data (extended from the HTML)
  const products = [
    {
      id: 1,
      name: "Von Freestanding Cooker 3 Gas + 1 Electric - Inox Grey VCF663155NSY",
      price: 44995,
      originalPrice: 59995,
      discount: 25,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAbrulgdAAlAVWpdkr4D0fej-hHE13vwjyUNllAB2WXqAUQdQGKuTc5MFld4Rp9ApR_DU5nDd7MW0XEYYG4klUjD-Un0sgIb6mmuB1K7OA_wfDY8igefoj0-B9oJKNkOYK0cN6KgY04UPbdZbfwjgKFLGNHivM7KjpbGE-r1_LegWMHKa_riDwRoZurDejPP_Srf33mg84b8r43ZNyqHYc5MY46eALDmc5UdmmwHsaeo2qqdpmrNEiBG6n_-mE2QOB16_7uSFYr",
    },
    {
      id: 2,
      name: "Hisense Digital Solo Microwave Oven, 25L - Black H25-MOBS7H",
      price: 13995,
      originalPrice: 16995,
      discount: 18,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCRMqAxFRfl3z2WmLanjfNJ5RP-ZCkitv1MJ3TQRM3o_gRWwT_5twhUw5nl6ZboNDjglRInbdGN3s58-_4BdAtAShp29TC8uOi6dsiIDHL7S-vxSzAafGiPiZXHbir0nxwJ7saEBErN0U1nUwtPeB9uRiexqdNh991KxDpvwp4HDSB88AOdTr6VbPRcrJxZm7AQ3kj_Wg3EEeomS64EC2q7YZJA6LN0ets3djBW73p6ckwcwOWdqXPu8TpGPSnyHw0hukTIbJys",
    },
    {
      id: 3,
      name: "Hisense Compressor Cooling Bottom Loading Water Dispenser",
      price: 15995,
      originalPrice: 22995,
      discount: 17,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCHwqLp5KXOEISM0zvpFX4HCGz_1hVa5wbc-JZ7DsodVSpAhRVvmOjb00RQ-urQTjOtAEJ6ITD8XfJ_lH9ddSWg51HWvsUETg3S44anHUICIPY9oPEIu1ienZW_d6mlaRUq8BYmrN-fIGxLMNiqiTchRTqezuH-9p4TjIVd910lSby_Rh9EnvmOuWn5mzGS5h5nKdRsm54mTcUvlDm-Fz8LFy92xAO2GrD1VEC1b-UMozmU_ZKtBY4mK2ATSxmZbhA4dI8UKBHt",
    },
    {
      id: 4,
      name: 'Hisense 55" 4K Smart TV',
      price: 64995,
      originalPrice: null,
      discount: 0,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCcB2pnCpo_bN_3tj9_Wed1vRw3W5DeSoK8BmGm6sZeilGYv1nUwqeknyNbTCx7oeV5zdRjBDpK2wLsP2ge0UeoLZpsZs5YBfNQb_pZ53O6N8s6LwV2aJt1UihMMskE7qx8hXCqribAzhjeNX66TM8ZafMgPKBds22CdLpZOAtAwX9Mvg6xHNRRqFfbx0VcBpRgp0To0BeHjdOaCkhP1-uYv7Ejt9Y6UiM2jfVYm-Tmfabu0RR5N8d2jc7XNcaI6iy-y_XVkW30",
    },
    {
      id: 5,
      name: "Hotpoint Double Door Fridge 320L",
      price: 89995,
      originalPrice: null,
      discount: 0,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDwpod_tmDeCsUg2uo56zkUYSEcUXP-gfJr8efouRw8cJMJoZBIxc8MGOW-nebfKj5QSrCKf6t59BdY6Ba20FkpsRP7DiFt5L3u24pvyrEaUODm0QH9HamCSGIPyQYTXZsp1mskOzRjG36P2RwBU0AwzgcqX7MF7JfWc2wG_DCDjAtfq3vgy8GN1UBeXq6O2_xqwU9U6Go6ba3sDqKLabDC8a5bLUii4uaHbBY9Hu5fr5Wibxuy7NLYS2VoFkx2aJlBXM_mouHj",
    },
    {
      id: 6,
      name: "Von Air Fryer 5.5L Digital",
      price: 12495,
      originalPrice: null,
      discount: 0,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD_15ceUHO2QMc1FChFK4qpoYvsnGihMUtqpUChfTdcvHE7NJqRFu0da6H1fynvEgdj6Lz_BFafy0SaYcUEnm1DKru_nFnwRWwmL9seHJChLsQ3ZPwaxLfGyD5xdn9gpyGzNHj4tR9I9iMx1bla3TFfJM1Yvvd-S_9shlHnJBNUpuZmGCu7IyO8q3lImwcU5LRSTyM5zp77GHH2o_hEPYYpxksomPMe8KziKf4nVYQJSzY46ywc364qs4q1Y7BMDfSJ-aKNRucg",
    },
    {
      id: 7,
      name: "Von Freestanding Cooker 4 Gas + 1 Electric - Stainless",
      price: 54995,
      originalPrice: 62995,
      discount: 13,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAbrulgdAAlAVWpdkr4D0fej-hHE13vwjyUNllAB2WXqAUQdQGKuTc5MFld4Rp9ApR_DU5nDd7MW0XEYYG4klUjD-Un0sgIb6mmuB1K7OA_wfDY8igefoj0-B9oJKNkOYK0cN6KgY04UPbdZbfwjgKFLGNHivM7KjpbGE-r1_LegWMHKa_riDwRoZurDejPP_Srf33mg84b8r43ZNyqHYc5MY46eALDmc5UdmmwHsaeo2qqdpmrNEiBG6n_-mE2QOB16_7uSFYr",
    },
    {
      id: 8,
      name: "Hisense 32",
      price: 34995,
      originalPrice: 39995,
      discount: 13,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCcB2pnCpo_bN_3tj9_Wed1vRw3W5DeSoK8BmGm6sZeilGYv1nUwqeknyNbTCx7oeV5zdRjBDpK2wLsP2ge0UeoLZpsZs5YBfNQb_pZ53O6N8s6LwV2aJt1UihMMskE7qx8hXCqribAzhjeNX66TM8ZafMgPKBds22CdLpZOAtAwX9Mvg6xHNRRqFfbx0VcBpRgp0To0BeHjdOaCkhP1-uYv7Ejt9Y6UiM2jfVYm-Tmfabu0RR5N8d2jc7XNcaI6iy-y_XVkW30",
    },
  ];

  const categories = [
    { name: "TVs", icon: Tv, count: 57 },
    { name: "Washers & Dryers", icon: WashingMachine, count: 48, active: true },
    { name: "Cookers & Ovens", icon: CookingPot, count: 52 },
    { name: "Fridges & Freezers", icon: Refrigerator, count: 79 },
    { name: "Small Appliances", icon: Fan, count: 115 },
  ];

  // Get only the visible products
  const visible = products.slice(0, visibleProducts);

  return (
    <div className="bg-background text-on-surface font-body-lg">
      {/* Header */}
    <Header />

      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
        {/* Flash Sale Hero */}
        <section className="mb-stack-lg rounded-2xl overflow-hidden relative shadow-lg">
          <div className="flash-sale-gradient p-stack-lg flex flex-col md:flex-row items-center justify-between relative z-10 text-white">
            <div className="mb-6 md:mb-0">
              <Badge className="bg-white/20 px-3 py-1 rounded-full text-label-sm uppercase tracking-widest mb-4 inline-block backdrop-blur-sm hover:bg-white/30">
                Exclusive Limited Offer
              </Badge>
              <h1 className="font-display-lg text-display-lg mb-2">FLASH DEALS HUB</h1>
              <p className="font-body-lg opacity-90 max-w-lg">
                Huge savings on your favorite household brands. Professional grade performance at consumer prices.
              </p>
            </div>
            <div className="flex flex-col items-center bg-black/20 p-6 rounded-2xl backdrop-blur-md border border-white/10">
              <p className="text-label-lg mb-4 font-bold">SALE ENDS IN:</p>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-black bg-white text-primary px-3 py-2 rounded-lg min-w-[64px] text-center">
                    {String(hours).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] mt-1 font-bold">HOURS</span>
                </div>
                <div className="text-4xl font-black">:</div>
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-black bg-white text-primary px-3 py-2 rounded-lg min-w-[64px] text-center">
                    {String(minutes).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] mt-1 font-bold">MINS</span>
                </div>
                <div className="text-4xl font-black">:</div>
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-black bg-white text-primary px-3 py-2 rounded-lg min-w-[64px] text-center">
                    {String(seconds).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] mt-1 font-bold">SECS</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Sidebar Filter */}
          <aside className="col-span-1 lg:col-span-3 space-y-stack-md">
            <Card className="bg-white dark:bg-surface-container rounded-xl border border-outline-variant p-stack-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-headline-md text-title-lg flex items-center gap-2">
                  <Filter className="w-5 h-5" /> Filters
                  <Badge className="bg-primary text-white text-xs h-5 w-5 rounded-full flex items-center justify-center">
                    2
                  </Badge>
                </h3>
                <Button variant="link" className="text-primary font-label-lg hover:underline p-0">
                  Clear all
                </Button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="in-stock" className="font-label-lg group-hover:text-primary transition-colors cursor-pointer">
                    In Stock Only
                  </Label>
                  <Switch
                    id="in-stock"
                    checked={inStock}
                    onCheckedChange={setInStock}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="on-sale" className="font-label-lg group-hover:text-primary transition-colors cursor-pointer">
                    On Sale
                  </Label>
                  <Switch
                    id="on-sale"
                    checked={onSale}
                    onCheckedChange={setOnSale}
                  />
                </div>
              </div>
              <div className="mt-8 border-t border-outline-variant pt-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-label-lg font-bold">Category</h4>
                  <ChevronUp className="w-4 h-4" />
                </div>
                <ul className="space-y-2 max-h-64 overflow-y-auto pr-2">
                  {categories.map((cat) => (
                    <li
                      key={cat.name}
                      className="flex items-center justify-between group cursor-pointer py-1 hover:text-primary"
                    >
                      <span
                        className={`font-body-sm ${
                          cat.active ? "text-primary font-bold" : "text-on-surface-variant group-hover:text-primary"
                        }`}
                      >
                        {cat.name}
                      </span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          cat.active
                            ? "bg-primary/10 text-primary font-bold"
                            : "bg-surface-container text-on-surface-variant"
                        }`}
                      >
                        {cat.count}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            {/* Deal of the Day */}
            <Card className="bg-primary/5 rounded-xl border border-primary/20 p-stack-md">
              <h4 className="font-label-lg text-primary mb-3 uppercase tracking-tighter">Deal of the Day</h4>
              <Card className="rounded-lg bg-white dark:bg-surface-container overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsdRj-EK7Kjet1mVgbFrkZzl4NwPV6zrAXNCT7ft0DXWrUlV9rl9ux_6xu_Hw0_YDGjrrXQfO1m-sfit86WpDlPM8EgV0lvzed2vbkdGNY5n24fcATK46hTPX_w9aez6FyvmtBw9HeoUSMc8lTEcQ8rxhdnn16U_gCuXSn8otHGIOceqVpJeueM6LbFAIJ5RSlxcM4hshaJQ22ZQxjPpWThy6BoDd74I4ZGv83OW5tRgTsWXi2lFr2mFfvQBOaDuh_wvMbRgkp"
                  alt="Von Front Loading Washer"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-3">
                  <p className="font-label-lg line-clamp-2 mb-1">Von Front Loading Washer 8KG Silver</p>
                  <p className="text-primary font-bold">Ksh 52,995</p>
                  <p className="text-on-surface-variant text-xs line-through">Ksh 64,995</p>
                  <div className="mt-3 w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                    <div className="bg-primary w-3/4 h-full"></div>
                  </div>
                  <p className="text-[10px] mt-1 text-on-surface-variant">75% Claimed</p>
                </CardContent>
              </Card>
            </Card>
          </aside>

          {/* Product Grid */}
          <section className="col-span-1 lg:col-span-9">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
              <h2 className="font-headline-lg text-headline-md">Top Hotpoint Deals</h2>
              <div className="flex items-center gap-4">
                <span className="text-label-sm text-on-surface-variant">Sort by:</span>
                <Select defaultValue="discount">
                  <SelectTrigger className="w-[180px] bg-white dark:bg-surface-container border-outline-variant rounded-lg font-label-lg focus:ring-primary focus:border-primary">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="discount">Discount (High to Low)</SelectItem>
                    <SelectItem value="price-low">Price (Low to High)</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {visible.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {visibleProducts < products.length && (
              <div className="mt-stack-lg flex justify-center">
                <Button
                  variant="outline"
                  className="bg-surface-container hover:bg-surface-container-high px-8 py-3 rounded-full font-label-lg transition-all flex items-center gap-2"
                  onClick={loadMore}
                >
                  Load More Products <Expand className="w-4 h-4" />
                </Button>
              </div>
            )}
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container dark:bg-inverse-surface mt-12 border-t border-outline-variant">
        <div className="flex flex-col md:flex-row justify-between items-center py-stack-lg px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto gap-stack-lg">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-title-lg font-title-lg font-bold text-on-surface dark:text-inverse-on-surface">
              Hotpoint
            </span>
            <p className="font-label-sm text-label-sm text-on-surface-variant">
              © 2024 Hotpoint Appliances. All rights reserved.
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-stack-lg">
            <a href="#" className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface hover:underline decoration-primary transition-colors">
              About Us
            </a>
            <a href="#" className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface hover:underline decoration-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface hover:underline decoration-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface hover:underline decoration-primary transition-colors">
              Shipping Info
            </a>
            <a href="#" className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface hover:underline decoration-primary transition-colors font-semibold">
              Contact Support
            </a>
          </nav>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">face_nod</span>
            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">language</span>
            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">alternate_email</span>
          </div>
        </div>
      </footer>

      {/* Custom styles for flash sale gradient (should be in global CSS) */}
      <style jsx global>{`
        .flash-sale-gradient {
          background: linear-gradient(135deg, #b40009 0%, #e3000f 100%);
        }
        .ribbon-sale {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 70%);
        }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #f1f1f1; }
        ::-webkit-scrollbar-thumb { background: #b40009; border-radius: 10px; }
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>
    </div>
  );
}

// Product Card Component
function ProductCard({ product }: { product: any }) {
  const [isAdded, setIsAdded] = useState(false);

  return (
    <Card className="bg-white dark:bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden group hover:shadow-xl transition-all relative">
      {product.discount > 0 && (
        <div className="absolute top-0 left-0 bg-primary text-white text-xs font-bold px-3 py-6 ribbon-sale z-20 text-center leading-tight">
          {product.discount}%<br />OFF
        </div>
      )}
      <div className="p-stack-md aspect-square flex items-center justify-center relative overflow-hidden bg-white dark:bg-surface-container">
        <img
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-stack-md border-t border-surface-container dark:border-outline-variant">
        <h3 className="font-label-lg text-on-surface h-10 line-clamp-2 mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <div className="flex items-end gap-2 mb-4 flex-wrap">
          <span className="text-primary text-title-lg font-bold">Ksh {product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-on-surface-variant text-label-sm line-through">
              Ksh {product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
        <Button
          variant={isAdded ? "default" : "outline"}
          className={`w-full py-2 rounded-lg font-label-lg transition-all flex items-center justify-center gap-2 ${
            isAdded
              ? "bg-primary hover:bg-primary/90 text-white"
              : "border-primary text-primary hover:bg-primary hover:text-white"
          }`}
          onClick={() => setIsAdded(!isAdded)}
        >
          <ShoppingCart className="w-4 h-4" />
          {isAdded ? "Added to Cart" : "Add to Cart"}
        </Button>
      </div>
    </Card>
  );
}