"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // <-- Import for navigation
import {
  Search,
  Moon,
  Sun,
  User,
  ShoppingCart,
  Menu,
  ArrowRight,
  SlidersHorizontal,
  ChevronUp,
  ChevronRight,
  Heart,
  Bell,
  ChevronLeft,
  ChevronDown,
  Mail,
  Check,
  Zap,
  GitCompare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Header from "@/components/Header";

export default function ProductsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [inStock, setInStock] = useState(false);
  const [onSale, setOnSale] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 24;

  const toggleDark = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Von Freestanding Cooker 3 Gas + 1 Electric - Inox Grey",
      price: 44995,
      originalPrice: 59995,
      discount: 25,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDbPvM0KjbdN8bUJrJQBTVjn22KVf_jSO6sP8_vZ99K7pdhVUECZbE7iIKOBwVNANjul4LEyU5b9iTq6N27aEze2HtaoZbTlXXs4M1C6cqIDnnRB7hS7o6sX0vW1y9lP6Cy_NfXzPt2rFzWvTCLjq0yJdvsMQ1wzNuHbtwrmk8_YmO8Rzofl55DaMDEyV48JThVEQQ_6EZwB3LoviFv9CsHq3PFW7RNh0gh0Tz21rtvH7nDopRobI_Z6plDPeZpFXAWoYKfwjfc",
      inStock: true,
    },
    {
      id: 2,
      name: "Hisense Digital Solo Microwave Oven, 25L - Black H25",
      price: 13995,
      originalPrice: 16995,
      discount: 18,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBrys0LILr5XP65zMt02o-gdjPwSM_965IruXZ5MKazZQLH6yh3uojYYdu13z4Wg9T61BXytR9XC9bA8sHkgDhaFP8UsOxOzwFAxVkf8ebeGyZej7woE5Purm5Nrzf-yHRqJMEJhTqIrW93mKb9hyGiHGKwNPMQU8YUlgM9kv0tNcnELo3KM5R01g4O6Ay8_eJfVcjvyObAM2oxRo4RTxvdCMX1COgmiMx38LOBC5c4xXOCi_oeCFMQaws3TjyzT8bLUW709qwf",
      inStock: true,
    },
    {
      id: 3,
      name: "Hisense Digital Solo Microwave Oven, 37L - Black H37",
      price: 15995,
      originalPrice: 22995,
      discount: 17,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBv65123hSHVKK1K2Eik8Xhxw5X_ejuAOizXQEs4E4az_gKd1BdmH3j8OrXPEFlwnx2NjqdX-Zbz544dp8RwD14Z9xtWSPBFSi8ZXhgwEh1_fRmyiVCYQDQhoDMPvp5pWferVoTrhL8HHMw8-NZPPuYd2QjTLYU2MH7DP21k4_VMLNd8-SnuJ00Qj5jAh4noTI9UwMDJ5qxiSn927DP0ogBcRli89bXDULZL6lorDjwGpO35x9MlikjBT8WvLu6WQVzpQMUBs75",
      inStock: true,
    },
    {
      id: 4,
      name: "Hisense Compressor Cooling Bottom Loading Dispenser",
      price: 24500,
      originalPrice: null,
      discount: 0,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDpO7DqC6HqQYN2-GQ6BjdYSr7q9haQqI0OVp6wh_fwdiU_F4_FkEKmaLDdtwqmYnqYE2tjALjvoI3Ig3jGHxs5owyozQnk-8xsnJu2frVetpgAZWVvqeLHs0qTmVWv6hUB3LTP9wbXEI7noLRQPPxAXAX5_kXhRu-zUme9xXgq1DNHwBohjo4jI-H2omx6PS7TPCxVf70CUVUqisY4WbEXu707hmvsZ0DjBFoDT2A0iZ4XllPu2SD4jmWjSjMnTo-_CqwlMScQ",
      inStock: true,
    },
    {
      id: 5,
      name: "Hisense 10kg Front Load Washer with Inverter Motor",
      price: 72000,
      originalPrice: null,
      discount: 0,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDeE2412OFel7TcgDP_kYhze7pWHAC7Mi6YovhNfovUpkGOa6_jjU5Mr9s41mBd6u_kmp69fyXwCJZhdT0aNXf9R3VaPOiapmS6mF-SgalUFyxsvprG0rUy5QjGfA3bw8EPN4Gnzr5xdee5H9vRNkdLiwjBvy0speQEw22ovYQZr4cVY8oupZ3Gj83ckfOmvast0omVXZjWKuk52Z00f-a_3gK6lOc0h0-zKvbWGKI2zxSiH5PtW7Jp3Tro8QD2U4RMVL1677CY",
      inStock: false,
    },
    {
      id: 6,
      name: "Hisense 518L Side-By-Side Refrigerator Inox Finish",
      price: 118995,
      originalPrice: 145000,
      discount: 18,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCyLeVbNSArs10P4CFIMPOewCbQsm62ZJxfRCskadk0SDPS9x3yq4W6sP2AL0btCj6ByorW_VR97M5NxzZSjF92FhBChkoWoXWAIlQU7aTX1I_XyH9zC0eDa3Abm7LE6c7VsjY1STupZQfTDgNYAXqT1kYZelbUGBS6tkhh6FJiX_iw-DBCKCs7n8UrH1jGEewPnxQe2sLHANugtCml6h-pceqPtsBy7F4EZxbJxzvC1HxXyhtzI7d5N6trxpiBQA3f8gqd0jGc",
      inStock: true,
    },
  ];

  const categories = [
    { name: "TVs", count: 57 },
    { name: "Audio", count: 59 },
    { name: "Washers & Dryers", count: 48, active: true },
    { name: "Cookers & Ovens", count: 52 },
    { name: "Fridges & Freezers", count: 79 },
  ];

  const brands = [
    { name: "Ariete", count: 13, checked: false },
    { name: "Hisense", count: 42, checked: true },
    { name: "LG", count: 28, checked: false },
  ];

  return (
    <div className="bg-background text-on-surface font-body-lg">
      <Header />

      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg">
        <div className="flex flex-col lg:flex-row gap-gutter">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-72 flex-shrink-0 space-y-stack-lg">
            <div className="flex items-center justify-between">
              <h2 className="font-headline-md text-headline-md flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5 text-primary" /> Filters
                <Badge className="bg-primary text-white text-[12px] px-1.5 rounded-full">1</Badge>
              </h2>
              <Button variant="link" className="text-primary font-label-lg text-label-lg hover:underline p-0">
                Clear all
              </Button>
            </div>
            <div className="space-y-6">
              {/* Toggle Filters */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-label-lg text-label-lg text-on-surface">In Stock Only</span>
                  <Switch checked={inStock} onCheckedChange={setInStock} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-label-lg text-label-lg text-on-surface">On Sale</span>
                  <Switch checked={onSale} onCheckedChange={setOnSale} />
                </div>
              </div>
              <div className="border-t border-outline-variant pt-6">
                <div className="flex items-center justify-between mb-4 group cursor-pointer">
                  <h3 className="font-headline-md text-body-lg font-bold">Category</h3>
                  <ChevronUp className="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-colors" />
                </div>
                <div className="space-y-3">
                  {categories.map((cat) => (
                    <button
                      key={cat.name}
                      className={`flex items-center justify-between w-full group ${
                        cat.active ? "text-primary font-bold" : ""
                      }`}
                    >
                      <span className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-primary">
                        {cat.name}
                      </span>
                      <div className="flex items-center gap-1">
                        <span className={`text-label-sm ${cat.active ? "text-primary" : "text-on-surface-variant/60"}`}>
                          {cat.count}
                        </span>
                        <ChevronRight className={`w-4 h-4 ${cat.active ? "text-primary" : "text-on-surface-variant/40"}`} />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              <div className="border-t border-outline-variant pt-6">
                <div className="flex items-center justify-between mb-4 cursor-pointer group">
                  <h3 className="font-headline-md text-body-lg font-bold">Brand</h3>
                  <ChevronUp className="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-colors" />
                </div>
                <div className="space-y-3">
                  {brands.map((brand) => (
                    <label key={brand.name} className="flex items-center gap-3 cursor-pointer group">
                      <Checkbox checked={brand.checked} className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary" />
                      <span className={`font-body-sm text-body-sm text-on-surface-variant group-hover:text-on-surface transition-colors ${
                        brand.checked ? "font-bold" : ""
                      }`}>
                        {brand.name}
                      </span>
                      <span className="ml-auto text-label-sm text-on-surface-variant/60">{brand.count}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-stack-lg gap-4">
              <div>
                <h1 className="font-headline-lg text-headline-lg mb-1">Kitchen &amp; Domestic Appliances</h1>
                <p className="text-body-sm text-on-surface-variant font-body-sm">Showing 1-12 of 342 products</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-label-lg font-label-lg text-on-surface-variant whitespace-nowrap">Sort by:</span>
                <Select defaultValue="newest">
                  <SelectTrigger className="bg-white dark:bg-surface-container border border-outline-variant rounded-lg px-4 py-2 font-body-sm focus:ring-2 focus:ring-primary outline-none min-w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest Arrivals</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="popular">Popularity</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-stack-lg flex items-center justify-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-lg border border-outline-variant text-on-surface hover:bg-surface-container transition-all disabled:opacity-30"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              {[1, 2, 3, 24].map((page) => {
                if (page === 24 && currentPage < 24) {
                  return (
                    <span key="ellipsis" className="px-2 text-on-surface-variant">
                      ...
                    </span>
                  );
                }
                if (page > 3 && page < 24) return null;
                return (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    className={`w-10 h-10 rounded-lg ${
                      currentPage === page
                        ? "bg-primary text-white hover:bg-primary/90"
                        : "border border-outline-variant text-on-surface hover:bg-surface-container transition-all"
                    }`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </Button>
                );
              })}
              <Button
                variant="outline"
                size="icon"
                className="rounded-lg border border-outline-variant text-on-surface hover:bg-surface-container transition-all"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container dark:bg-inverse-surface border-t border-outline-variant dark:border-outline mt-stack-lg">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-12">
            <div className="space-y-4">
              <span className="text-title-lg font-title-lg font-bold text-on-surface dark:text-inverse-on-surface block">
                Smart Electronice
              </span>
              <p className="text-body-sm text-on-surface-variant font-body-sm leading-relaxed">
                Leading the Kenyan market in home and electrical appliances since 1984. We provide quality products with professional support.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-2 rounded-full bg-surface-container-highest hover:bg-primary hover:text-white transition-all"
                >
                  <Zap className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full bg-surface-container-highest hover:bg-primary hover:text-white transition-all"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-on-surface uppercase tracking-wider text-[11px]">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-body-sm text-on-surface-variant hover:text-primary transition-all font-body-sm">About Us</a></li>
                <li><a href="#" className="text-body-sm text-on-surface-variant hover:text-primary transition-all font-body-sm">Store Locator</a></li>
                <li><a href="#" className="text-body-sm text-on-surface-variant hover:text-primary transition-all font-body-sm">Special Offers</a></li>
                <li><a href="#" className="text-body-sm text-on-surface-variant hover:text-primary transition-all font-body-sm">Customer Reviews</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-on-surface uppercase tracking-wider text-[11px]">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-body-sm text-on-surface-variant hover:text-primary transition-all font-body-sm">Contact Support</a></li>
                <li><a href="#" className="text-body-sm text-on-surface-variant hover:text-primary transition-all font-body-sm">Shipping Info</a></li>
                <li><a href="#" className="text-body-sm text-on-surface-variant hover:text-primary transition-all font-body-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-body-sm text-on-surface-variant hover:text-primary transition-all font-body-sm">Terms of Service</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-on-surface uppercase tracking-wider text-[11px]">Newsletter</h4>
              <p className="text-body-sm text-on-surface-variant font-body-sm">Subscribe to get special offers and once-in-a-lifetime deals.</p>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Enter email"
                  className="bg-surface-container-lowest border border-outline-variant rounded-l-lg px-4 py-2 flex-1 font-body-sm outline-none focus:border-primary"
                />
                <Button className="bg-primary text-white px-4 py-2 rounded-r-lg font-bold hover:opacity-90 transition-all">
                  Join
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-outline-variant gap-4">
            <p className="text-label-sm text-on-surface-variant font-label-sm">© 2024 Hotpoint Appliances. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <img
                alt="PayPal"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdFjKVHivsaSyDziVhWziK6xeSaEzak0XKpf3Jb_kFZftuCGECKv-S10UuRD242opceyv42YWUrS5YdIaaDcPNIb4xm-BpUi6fV-OunOYGKkjgdxW9Lo7y_A_nQwpcHbCkGYOy2fiFReIolIKU4YFBHQsT_KsBj9JGY5jfQ9KL_XUBnWNaIR36GdABPcDmD9BZP_tMz1Xz6GhYp8sAjTGXvk978Pn7iBfv5b-JruoHRW0y12IGIpRyIjldxoZBJDKlgd3sT_2q"
                width={48}
                height={16}
                className="h-4 w-auto grayscale hover:grayscale-0 transition-all opacity-60"
              />
              <img
                alt="Visa"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuABKgDS7Ww7ixoBiScb4eyx8FDPwHX5sqnCCK3SWrJX22buIzLxoC2XvF_5fvuC2IDXc59MWF7S7EOIZcY05HV7MU8JZw81xY85-J63AmdcNLURJRLotxt0W7Z2oJko5H2DV0BHJxd-3lB42EBY7CkL4vI4ALPCKGkxxhKLgY5stQAoXZ9wyyIY51aydi0rOoaa-0t3B7hR6Y2Cey6dpbGmIqGlQCiDTnIZhKLPZtBoQ2NuDcTylRKeZZLnGf66d7EptpFD4_CA"
                width={48}
                height={16}
                className="h-4 w-auto grayscale hover:grayscale-0 transition-all opacity-60"
              />
              <img
                alt="MasterCard"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-b6NRkxIvjhIZEdriFXBE4vfCRqDFm_0un3HZvs6s7AojTgDGBImMYA6Gn6T0HeNV-qjT57VlftjBmiHknCZYI04MfRll43Cor1CyqWbT8Ddi_0pXjC98dhwJ5GjQDgQq2mM7fJJsy0tYy2OWGgPPhMn2P4whr7mICxej93q6nT-nZAZJE6kB53KG_ZlHdZvGJcbLNtfazS19pVrd40_72m2XVa-qFbczRrcRHzSJ5McHFJyf--sy_L6P8jL7-izo2pLQFWgX"
                width={48}
                height={24}
                className="h-6 w-auto grayscale hover:grayscale-0 transition-all opacity-60"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Product Card Component
function ProductCard({ product }: { product: any }) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const router = useRouter(); // <-- useRouter for navigation

  const handleCardClick = () => {
    router.push("/details");
  };

  return (
    <Card
      className="bg-white dark:bg-surface-container-lowest rounded-lg border border-outline-variant overflow-hidden flex flex-col product-card-shadow group transition-transform hover:-translate-y-1 cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="relative h-64 p-stack-lg flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="object-contain max-h-full transition-transform duration-500 group-hover:scale-105"
        />
        {product.discount > 0 && (
          <div className="absolute top-4 left-0 bg-primary text-white font-bold py-1 px-4 rounded-r-full text-label-sm transform -rotate-12 translate-x-[-10%]">
            {product.discount}% OFF
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 bg-white/80 backdrop-blur shadow-sm p-2 rounded-full text-on-surface hover:text-primary transition-colors opacity-0 group-hover:opacity-100"
          onClick={(e) => {
            e.stopPropagation(); // prevent navigation
            setIsWishlisted(!isWishlisted);
          }}
        >
          <Heart className={`w-5 h-5 ${isWishlisted ? "fill-primary text-primary" : ""}`} />
        </Button>
        {!product.inStock && (
          <div className="absolute top-4 right-4 bg-error-container text-error px-2 py-1 rounded text-label-sm font-bold">
            OUT OF STOCK
          </div>
        )}
      </div>
      <div className="p-6 pt-0 flex-1">
        <h3 className="font-title-lg text-body-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-center gap-3 mb-6 flex-wrap">
          <span className="text-headline-md text-primary font-bold">
            Ksh {product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-body-sm text-on-surface-variant line-through font-body-sm">
              Ksh {product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
        {product.inStock ? (
          <Button
            variant="outline"
            className="w-full border-t border-outline-variant pt-4 flex items-center justify-center gap-2 text-primary font-bold hover:bg-surface-container transition-all py-3 rounded-b-lg"
            onClick={(e) => {
              e.stopPropagation();
              // Add to cart logic can go here
            }}
          >
            <ShoppingCart className="w-4 h-4" /> Add to Cart
          </Button>
        ) : (
          <Button
            disabled
            variant="outline"
            className="w-full border-t border-outline-variant pt-4 flex items-center justify-center gap-2 text-on-surface-variant font-bold opacity-50 cursor-not-allowed py-3 rounded-b-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <Bell className="w-4 h-4" /> Notify Me
          </Button>
        )}
      </div>
    </Card>
  );
}