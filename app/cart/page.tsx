"use client";

import { useState } from "react";
import {
  Search,
  Moon,
  Sun,
  User,
  Heart,
  ShoppingCart,
  Menu,
  Grid,
  ArrowRight,
  Trash2,
  Truck,
  Plus,
  Minus,
  X,
  GitCompare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";

// Initial cart items (static data)
const initialCartItems = [
  {
    id: 1,
    name: "Hisense Digital Solo Microwave Oven, 25L - Black H25-MOBS7H",
    price: 13995,
    originalPrice: 16995,
    discount: 18,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAwUK-3p5h-9I-sTUKuASG_GD81ZPQq7-kUOmZaisPuYjVoZksJ7liTapTWzCxmrTOx-Z6GmD3OrOAojrLOG01gpjYS14wGhDz-3ux9dty7ugR2_3sEqg91G9-pL48NOuqd4jcHaPpNGDSJ52ppszM3ov2Z9u61ppE_nGsyN21Q9axcfRQYKAVCJ6eKOGlyt8kCT-ukO_D7JJAx_zdBMzuYSanvdKqLKohb_Vl4jV_3wxA8-JOm1xfYuKUE3Q2K6ZLqxuJ-Tev7",
    inStock: true,
  },
  {
    id: 2,
    name: "Hisense Compressor Cooling Bottom Loading Water Dispenser",
    price: 22450,
    originalPrice: null,
    discount: 0,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAL0NgVTb50D312K2dQ6SuEu3wfdqLsTZuFJi4xTiArnBJqH0pPhtdjvPoODYrVlbVl8XN3_Ti1ORpeC_Xpw7YtTKvnnzRK7Az_cdNuxTgzZ_Wbh47sdk6Pq03bIQ0a9fE8XgyMSXTS_rRvZMjYM-HZqA6XMWEm_25OYqVL8KFKc4S5aTM5FiZcchh45kpaLbmDFaBwPQKhnV6nrsraXnrJlbkwOUKaR6ElMtKtdiPYpNomnEWe4I4iH4-kAjW3rbRvvAg0m2Zt",
    inStock: true,
  },
  {
    id: 3,
    name: "Von Freestanding Cooker 3 Gas + 1 Electric - Inox Grey",
    price: 44995,
    originalPrice: 59995,
    discount: 25,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCRtIfwQINXWmxRS0rfQLiCBAt_Hp0r_vlxJ0VLl0B_CVuueNSnfXCrGdnGHr8uH5I16xJIL8l_loyjy3loFrjN-M7j2rLfU5bZHY9dC4ibl-d70evaBNyyH4hoIGptxF6XyAY7-eXRIVi15-7XBpophhEk2ZNJhtg0h496NF66gwzaTvlNlinjuwW1Z4PW80uU4O0M2uBI5XbgCzN-LmZ3AB_YpXSzxooiL-nY9NPQy-Lya_WQ5RDMxDq_KLfgpG86Qn5Yh8H8",
    inStock: true,
  },
];

export default function CartPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [discountCode, setDiscountCode] = useState("");
  const router = useRouter();
  const toggleDark = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  // Update quantity for a specific item
  const updateQuantity = (id: number, change: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, (item.quantity || 1) + change) }
          : item
      )
    );
  };

  // Remove item from cart
  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Clear all items
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );
  const tax = Math.round(subtotal * 0.16);
  const shipping = subtotal > 100000 ? 0 : 0; // free shipping above 100k (for demo)
  const total = subtotal + tax + shipping;

  return (
    <div className="bg-background text-on-surface font-body-lg">
      {/* Header - same as other pages */}
      <Header />

      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg min-h-[716px]">
        <div className="flex flex-col lg:flex-row gap-gutter">
          {/* Cart Items Section */}
          <div className="flex-1 space-y-stack-md">
            <div className="flex items-center justify-between">
              <h1 className="font-headline-lg text-headline-lg">
                Shopping Cart <span className="text-on-surface-variant font-normal">({cartItems.length} Items)</span>
              </h1>
              {cartItems.length > 0 && (
                <Button variant="link" className="text-primary font-label-lg hover:underline transition-standard p-0" onClick={clearCart}>
                  Clear Cart
                </Button>
              )}
            </div>

            {cartItems.length === 0 ? (
              <Card className="p-12 text-center">
                <p className="text-on-surface-variant text-body-lg">Your cart is empty.</p>
                <Button variant="outline" className="mt-4" onClick={() => window.location.href = "/products"}>
                  Continue Shopping
                </Button>
              </Card>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onQuantityChange={updateQuantity}
                    onRemove={removeItem}
                  />
                ))}
              </div>
            )}

            {cartItems.length > 0 && (
              <div className="mt-8 flex items-center gap-4 text-on-surface-variant font-label-lg">
                <Truck className="w-5 h-5" />
                <span>Free shipping on all orders above Ksh 100,000</span>
              </div>
            )}
          </div>

          {/* Order Summary Section */}
          {cartItems.length > 0 && (
            <aside className="w-full lg:w-[400px]">
              <Card className="p-8 rounded-lg shadow-elevation-1 border border-surface-container-high sticky top-32">
                <h2 className="font-headline-md text-headline-md mb-6">Order Summary</h2>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center text-body-lg">
                    <span className="text-on-surface-variant">Subtotal</span>
                    <span className="font-medium">Ksh {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-body-lg">
                    <span className="text-on-surface-variant">Tax Estimation (16%)</span>
                    <span className="font-medium">Ksh {tax.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-body-lg pb-4 border-b border-outline-variant">
                    <span className="text-on-surface-variant">Shipping</span>
                    <span className="text-primary font-medium">
                      {shipping === 0 ? "Free" : "Calculated at next step"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="font-headline-md text-headline-md">Order Total</span>
                    <span className="text-primary font-display-lg text-headline-lg">
                      Ksh {total.toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <Button onClick={() => router.push("/checkout")} className="w-full bg-primary text-white py-4 rounded-lg font-headline-md hover:brightness-110 active:scale-[0.98] transition-standard shadow-lg shadow-primary/20">
                    Proceed to Checkout
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border border-on-surface py-3 rounded-lg font-label-lg hover:bg-surface-container transition-standard"
                    onClick={() => window.location.href = "/products"}
                  >
                    Continue Shopping
                  </Button>
                </div>
                <div className="mt-8 p-4 bg-surface-container-low rounded-lg border border-outline-variant">
                  <label className="font-label-lg mb-2 block">Discount Code</label>
                  <div className="flex gap-2">
                    <Input
                      className="flex-1 bg-surface border border-outline rounded-lg px-4 py-2 text-body-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none"
                      placeholder="Enter code"
                      value={discountCode}
                      onChange={(e) => setDiscountCode(e.target.value)}
                    />
                    <Button variant="secondary" className="bg-secondary text-white px-4 py-2 rounded-lg font-label-lg hover:bg-on-surface transition-standard">
                      Apply
                    </Button>
                  </div>
                </div>
                <div className="mt-8 space-y-4">
                  <p className="text-label-sm text-on-surface-variant text-center">We accept securely:</p>
                  <div className="flex justify-center gap-4 grayscale opacity-60">
                    <img
                      alt="PayPal"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuATRtpQKhD9V5nCIDaOD-vDEEUHWJgoOsbAJixYImQbBzhO7Me5GyP35GjD9FFRgfNogvU0dFpeDmi8shD_uhGg6yZo1PmNLORUweelSQ_tY-H4da0sbMK4Fo3NwkiecfILLvgi_IvrhpeK8qkeUBCrodOQegNKw_iHAkUhFUd9kSoI0sHkSt4WjULTCdSiK7LwVoOcl8Hl69sWrSTHniLsuTSEUS-XbTr8ThEt4gQgCtS7p_p8NAjjE9LvPKu5pz8dGRXIZAuF"
                      width={48}
                      height={24}
                      className="h-6 w-auto"
                    />
                    <img
                      alt="Visa"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0SRg6IPke7QWNju18askwOwIWaOgboNyNHtgMWBINWI40Ri21xRceTx-e7MTOAEJm_YSe1qvGHolCF3XVLnAfgolUA3bBkwAhAK6fKaTt_MzyyXe6C6WO626rwco8Ipj_YC--1PjU4-MemIHXWTg_hg694fRv9JhRVtGq3U_Yqm2QvZbjZ5pXNZA1Rtej4AiuJSHZl4RHrbyjZ9dHQvbft58jilVYxLxNy7OeR0TZwqbCsdCh6J1iIt6WH81GWcUylSPF_rE4"
                      width={48}
                      height={24}
                      className="h-6 w-auto"
                    />
                    <img
                      alt="Mastercard"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_efInC1hE4NFn2gTdMvCzAB1UQiWdHeRpYKuHQWPwm98XSxu-ZnvOUm6qoHr3ingfgdxwYtZvmiQykzjXMe42dzIa_Qvt0QeWs26UC572w3eje5X4PvBpTWmQjIWq7eOQzsuQWq9Jwwpc3rd7C5r8Ny_nDiRYCzfAdi3tgXrdlZ99jfHPb3pnqdA4LeLS5TLqhTUw1poFF8I6CXkn8IDHUq14AmUENL33U24ZoLYUc33e_-0XgkOutarC5Qd4EtOuNQrKrVDJ"
                      width={48}
                      height={32}
                      className="h-6 w-auto"
                    />
                  </div>
                </div>
              </Card>
            </aside>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container dark:bg-inverse-surface border-t border-outline-variant mt-16">
        <div className="flex flex-col md:flex-row justify-between items-center py-stack-lg px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto gap-gutter">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <span className="text-title-lg font-title-lg font-bold text-on-surface">Hotpoint</span>
            <p className="font-label-sm text-label-sm text-on-surface-variant">© 2024 Hotpoint Appliances. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#" className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface hover:underline decoration-primary transition-standard">
              About Us
            </a>
            <a href="#" className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface hover:underline decoration-primary transition-standard">
              Privacy Policy
            </a>
            <a href="#" className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface hover:underline decoration-primary transition-standard">
              Terms of Service
            </a>
            <a href="#" className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface hover:underline decoration-primary transition-standard">
              Shipping Info
            </a>
            <a href="#" className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface hover:underline decoration-primary transition-standard">
              Contact Support
            </a>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" size="icon" className="rounded-full border border-outline-variant hover:bg-surface-container transition-standard">
              <span className="material-symbols-outlined text-body-sm">face_nod</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border border-outline-variant hover:bg-surface-container transition-standard">
              <span className="material-symbols-outlined text-body-sm">share</span>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Cart Item Component
function CartItem({
  item,
  onQuantityChange,
  onRemove,
}: {
  item: any;
  onQuantityChange: (id: number, change: number) => void;
  onRemove: (id: number) => void;
}) {
  const quantity = item.quantity || 1;

  return (
    <Card className="p-6 rounded-lg shadow-elevation-1 border border-surface-container-high flex flex-col sm:flex-row gap-6 group transition-standard">
      <div className="w-32 h-32 bg-surface-container-low rounded-lg flex items-center justify-center p-2 relative overflow-hidden flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          width={128}
          height={128}
          className="w-full h-full object-contain"
        />
        {item.discount > 0 && (
          <Badge className="absolute top-2 left-2 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded">
            {item.discount}% OFF
          </Badge>
        )}
      </div>
      <div className="flex-1 flex flex-col justify-between py-1">
        <div>
          <div className="flex justify-between items-start">
            <h3 className="font-title-lg text-title-lg text-on-surface">{item.name}</h3>
            <Button
              variant="ghost"
              size="icon"
              className="text-on-surface-variant hover:text-error transition-standard"
              onClick={() => onRemove(item.id)}
            >
              <Trash2 className="w-5 h-5" />
            </Button>
          </div>
          <p className="text-body-sm text-on-surface-variant mt-1">
            Stock status: <span className="text-primary font-medium">In Stock</span>
          </p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center border border-outline rounded-lg bg-surface-container-low overflow-hidden">
            <Button
              variant="ghost"
              className="px-3 py-1 hover:bg-surface-container transition-standard rounded-none"
              onClick={() => onQuantityChange(item.id, -1)}
            >
              <Minus className="w-4 h-4" />
            </Button>
            <span className="px-4 py-1 font-label-lg min-w-[40px] text-center">
              {quantity}
            </span>
            <Button
              variant="ghost"
              className="px-3 py-1 hover:bg-surface-container transition-standard rounded-none"
              onClick={() => onQuantityChange(item.id, 1)}
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
          <div className="text-right">
            {item.originalPrice && (
              <div className="text-on-surface-variant text-body-sm line-through">
                Ksh {item.originalPrice.toLocaleString()}
              </div>
            )}
            <div className="text-primary font-headline-md text-headline-md">
              Ksh {item.price.toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}