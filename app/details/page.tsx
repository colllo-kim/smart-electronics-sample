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
  ArrowRight,
  Star,
  StarHalf,
  CheckCircle,
  Verified,
  Wrench,
  RefreshCcw,
  Eye,
  Plus,
  Minus,
  ChevronRight,
  ArrowRightCircle,
  Ship,
  GitCompare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function ProductDetailPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("specs");

  const toggleDark = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  // Product data (static for now)
  const product = {
    name: "Multi-Door Refrigerator with InstaView & Dual Ice Maker",
    brand: "HOTPOINT PROFESSIONAL",
    price: 185000,
    originalPrice: 225000,
    rating: 4.5,
    reviews: 128,
    inStock: true,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCT_nv8LbyqI3lfhrqDsLABZ7RQKWpXM0xtBK_zOIor5GlZEWQHomI9u2uhw4hr1nIWF_RxBSURAdZ9jEYySZPPDdVI_c7uNlZiUSKqg0g1HLXuR66qGvA6Q79qqw_yxxElO6SL-B_XzDv6YfXBkUGQ78jXJI1YJkm2nrNoBTh2xGqr1TSikRKIFwEb98g2-XqJveU5sFp-vt_SsUUqRVbTHng04r--rFNnZxpWhBLEuBaunnhQy1g4jiLD6WQOy7NM1OEFBvlH",
    thumbnails: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD-ZpVkvv_NthoPF9dQ8dpi8xZxA0nLvI1FvvGT0EkVtWeMxcJDiYyefnfFrlqTdQVYNzm84hSVQjV7EI2_F78P9TOYE_aE2cHNT90nJH26Z0P0VJKeb0QnQtJhoLImp4WVyoTG3oOHyauR7Munim8jxTmwr3BU6Q99TpVQJQI4YgAsKSlh3ND0NhXQC1BhUmzaEvEHqK_yMbk864b85qbspI8UhZhQ8iDQuxCtRvUjgIB5kBR6MXFecrVDBOax9b-2R7M93TFR",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAPcKNnpp3MsEo2T11MtK5_NJQgUBPSkiODzWr5NPdl98K83IzOJV2tE_pDvBr_DMccuPmN1EmIj6Q2aJ2F2eoNIcaTB4zl_01tZBWz4eXGfDGlXsfaFi-chkMphNYcKo6D4klTj6tZgApFEyd9fHBakYX5FUH-JczC84lTHJl7lz9MXtUGJXDkC1bymgLAeQLDV2Ka1mBZ1WBbIL7BbZSiPOpdMMGhX2QfppFOFCCjD9eODqHRRRa9qn4-vGTbCW4B0QQFJDtq",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuALUD2tK43TnzwJQXSLw2-PH4WK9lua4JzTupsz5XMUSx1rnCrSp46P6Uu-wF3ZpFRYufR_8PsFlrQ1IUJ7YVSymQaOxvNt23vr4r-BkSFOPqJeveqEsRF-ho4KR4t43HGur4Bj0BIvq_yl4pQFkjZ1HrxoxJfCFLUv2a-dVyO4b_IW4QvPdGNlWOEVZJpLYjUvHK2qbvcFEpiqlNxafq75Og0kJhcdtdm4dtDrQOBc_nA-xghMoN06N_rnHWnE32feOyK6y0Uz",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDYLUlKLZ-zZbFCqte85jGuNkfz9K_0EDtHqu12YK08nJRKqsmKdoViZ2N6EKj0XJINc1U2CKmEDicEP5CRY7grQXbvGMbFSL3fHGFyDC8odwO8s4Gh-YLhmAOnt458cJpb-_ac0W4n381YQuPs00eYSdPzhBjsi7Mp5LMb12I4MMKfSj-os_AVGGCdBPUfwYi1Z-Td5J2H9Zq5rIXMLW8X0WW5xqjaV1NauJrnDnz7m2aGL1-wGegsePY43RYta97NL23AgFtH",
    ],
    specs: [
      { label: "Capacity", value: "680 Litres" },
      { label: "Cooling System", value: "Total No Frost" },
      { label: "Dimensions (WxHxD)", value: "912 x 1790 x 738 mm" },
      { label: "Compressor", value: "Inverter Linear Compressor" },
      { label: "Energy Class", value: "A++ Rated" },
      { label: "Noise Level", value: "36dB" },
    ],
    highlights: [
      { icon: Ship, title: "Free Delivery", desc: "Within Nairobi and Environs" },
      { icon: Verified, title: "2 Year Warranty", desc: "Official Brand Warranty" },
      { icon: Wrench, title: "Free Installation", desc: "Professional Setup Included" },
      { icon: RefreshCcw, title: "Easy Returns", desc: "7 Day Exchange Policy" },
    ],
  };

  const relatedProducts = [
    {
      id: 1,
      name: "10kg Front Load Washer",
      price: 75000,
      originalPrice: 85000,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBSwwI_zfmRPn5OjXXw1nJukFUtlZGLZlZ1SEqGUGbOtXkm3oyqQd_Hh-wUotDNVEE8onzx-clV0JwMffaS2g2rmzHEaARR3dHieaLM6oRlAodxZHyr0n-XJCXF8tTgaCeS1yuSekpDf1cSRa97so30MQGQ0WE185gJbdey2rOXalf9rzR1WizUj0A0ZphXWzV_836cQykBOvGn-aici5Ft6gDy3H-yA1OTtvqTA0APVvYy3zaKvGrLKppUp12X0kypNjQz3coB",
    },
    {
      id: 2,
      name: "Premium Built-in Oven",
      price: 52990,
      originalPrice: null,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDMTUAyy44LgHu8fReimnFupj17ZWjrw1n6bE39VJnfv3suXykzXhkG3UkYRnwpZHY0X9NTRZQOqC5fTXdBrJXf5vzeMjyESO-iSHqn46zulLiLq285Z-b1PpOpDMxNSmFGCd_inw9Z7jUO2l8-ib-W18djBuAFVb1-n4wOS-qU-rJf1e8GPTUvlwam5wtK6K1G3wf6kByjnwd9SvjQtLK57-s3JxiMkuma83l6BJOBvm0ZYtZZGqS85ZSCWwopOiw0Vfhjx3EJ",
    },
    {
      id: 3,
      name: "Smart Induction Hob 60cm",
      price: 44500,
      originalPrice: 50000,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAIjStVsazA6Rjqt9-EFQIjeLKOoPclrQqqRHIpjpcq6i9Y4b0xrjFRIukPBrXErpbhAL6irVroZ42kO3Vr0Xe1g9D1pWBL03BWPIZT9O6SXkZocDaAKZEpfo1BW3EKd2RgG9xJTQpZeOTZe2-2O2ES7VgJXy4fbE5xl9bJZ8JpWJdQvYrngYIC28n0QfNiNx5Y1MkQnEeEkH6_kFm-b9-7cr0xidvh5A9tVrl-MOcztmBLryITDt4esxZgzuDm1JgHtK6AkYfc",
    },
    {
      id: 4,
      name: "Intelligent Dishwasher",
      price: 95000,
      originalPrice: null,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAJagRSaSM8zb25O8k8UDhpSAaRQH2Rz0Y1V_1W2sj8v_2CxdPgHaMbC6wI_bY3YyvhQ7FY1DmIe_TCEQGMuQ6dlbE2HjaLjBFKfiTJDO8HaT4EVzPs3LMUm8cTfBAEeZ4Tcg4Z7KM4lZlIYWee6WGvK0JstLscnn_cSriGp-rBqnfWITHVwhk7cCvAYi-JiKeQt9179JvXFE--rGrIBZF0XD7sjwd9LKmNG5B1d_wKiipBT5m0fUVYQWkD9ZwIwh0iZOLD4A3r",
    },
  ];

  // Render star rating
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
      <div className="flex items-center text-primary">
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star key={`full-${i}`} className="w-5 h-5 fill-primary" />
        ))}
        {halfStar && <StarHalf className="w-5 h-5 fill-primary" />}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <Star key={`empty-${i}`} className="w-5 h-5" />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-background text-on-surface font-body-lg">
      {/* Header – same as other pages */}
       <header className="bg-surface-container-lowest dark:bg-inverse-surface border-b border-outline-variant dark:border-outline sticky top-0 z-50">
        <div className="flex flex-col w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          {/* Top Utility Bar */}
          <div className="flex items-center justify-between py-stack-sm border-b border-outline-variant/30">
            <div className="flex items-center gap-stack-md flex-1">
              <h1 className="text-headline-lg font-headline-lg font-black text-primary dark:text-inverse-primary tracking-tighter">
                Smart Electronics
              </h1>
              <div className="hidden md:flex flex-1 max-w-xl mx-8 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search washers, fridges, TVs and more..."
                  className="w-full bg-surface-container pl-10 py-2 rounded-full border-none focus:ring-2 focus:ring-primary text-body-sm font-body-sm"
                />
              </div>
            </div>

            <div className="flex items-center gap-stack-md">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                onClick={toggleDark}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <GitCompare className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full relative">
                <Heart className="w-5 h-5" />
                <span className="absolute top-1 right-1 bg-primary text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                  0
                </span>
              </Button>
              <div className="flex items-center gap-2 group cursor-pointer px-3 py-1.5 rounded-full hover:bg-surface-container transition-all">
                <User className="w-5 h-5" />
                <div className="hidden lg:block">
                  <p className="text-label-sm font-label-sm text-on-surface-variant leading-none">Hi, collins</p>
                  <p className="text-label-lg font-label-lg leading-none">Account</p>
                </div>
              </div>
              <Button
                variant="outline"
                className="flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-full hover:bg-surface-container-highest transition-all border-none"
              >
                <ShoppingCart className="w-5 h-5" />
                <div className="hidden sm:block text-right">
                  <p className="text-[10px] text-on-surface-variant leading-tight">Your Cart</p>
                  <p className="text-label-lg font-label-lg leading-tight">Ksh 0</p>
                </div>
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center justify-between py-stack-sm overflow-x-auto hide-scrollbar">
            <div className="flex items-center gap-stack-lg min-w-max">
              <Button variant="default" className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-lg font-label-lg text-label-lg hover:bg-primary/20">
                <Menu className="w-5 h-5" />
                All Categories
              </Button>
              <a href="/" className="text-primary dark:text-inverse-primary border-b-2 border-primary dark:border-inverse-primary pb-1 font-label-lg text-label-lg">
                Home
              </a>
              <a href="/deals" className="text-on-surface dark:text-inverse-on-surface hover:text-primary dark:hover:text-inverse-primary transition-colors font-label-lg text-label-lg">
                Offers
              </a>
              <a href="/products" className="text-on-surface dark:text-inverse-on-surface hover:text-primary dark:hover:text-inverse-primary transition-colors font-label-lg text-label-lg">
                All Products
              </a>
              <a href="/arrivals" className="text-on-surface dark:text-inverse-on-surface hover:text-primary dark:hover:text-inverse-primary transition-colors font-label-lg text-label-lg">
                New Arrivals
              </a>
              {/* <a href="#" className="text-on-surface dark:text-inverse-on-surface hover:text-primary dark:hover:text-inverse-primary transition-colors font-label-lg text-label-lg">
                Clearance
              </a> */}
            </div>
            <Button className="ml-stack-lg bg-inverse-surface text-surface py-2 px-6 rounded-lg flex items-center gap-2 hover:scale-95 duration-150 ease-in-out font-label-lg text-label-lg">
              Visit Outlet
              <ArrowRight className="w-4 h-4" />
            </Button>
          </nav>
        </div>
      </header>

      <main className="pt-32 pb-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 mb-stack-lg font-label-sm text-label-sm text-on-surface-variant">
          <a href="#" className="hover:text-primary">Home</a>
          <ChevronRight className="w-4 h-4" />
          <a href="#" className="hover:text-primary">Kitchen Appliances</a>
          <ChevronRight className="w-4 h-4" />
          <span className="text-on-surface">Premium Multi-Door Refrigerator</span>
        </nav>

        <div className="grid grid-cols-12 gap-gutter">
          {/* Left: Product Image Gallery */}
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-gutter">
            <div className="bg-white dark:bg-surface-container-lowest rounded-lg p-stack-lg flex items-center justify-center relative product-shadow aspect-square overflow-hidden border border-outline-variant/20">
              <img
                src={product.image}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-500"
              />
              <Badge className="absolute top-4 left-4 bg-primary text-white font-label-lg text-label-lg px-3 py-1 rounded-full">
                New Arrival
              </Badge>
            </div>
            <div className="grid grid-cols-4 gap-stack-md">
              {product.thumbnails.map((thumb, idx) => (
                <button
                  key={idx}
                  className={`bg-white dark:bg-surface-container-lowest rounded-lg p-2 product-shadow border overflow-hidden transition-colors ${
                    idx === 0 ? "border-2 border-primary" : "border border-outline-variant hover:border-primary"
                  }`}
                >
                  <img src={thumb} alt={`Thumbnail ${idx + 1}`} width={120} height={96} className="w-full h-24 object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info & Purchase Options */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-stack-lg">
            <div className="flex flex-col gap-stack-sm">
              <span className="font-label-lg text-label-lg text-primary">{product.brand}</span>
              <h1 className="font-headline-lg text-headline-lg text-on-surface">{product.name}</h1>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center">{renderStars(product.rating)}</div>
                <span className="ml-2 font-label-lg text-label-lg text-on-surface-variant">({product.reviews} Reviews)</span>
                <span className="text-outline-variant">|</span>
                <span className="font-label-lg text-label-lg text-green-600 flex items-center gap-1">
                  <CheckCircle className="w-5 h-5" /> In Stock
                </span>
              </div>
            </div>

            <div className="bg-surface-container-low p-stack-lg rounded-lg border border-outline-variant flex flex-col gap-stack-md">
              <div className="flex items-baseline gap-4">
                <span className="font-display-lg text-display-lg text-primary">Ksh {product.price.toLocaleString()}</span>
                <span className="font-title-lg text-title-lg text-on-surface-variant line-through">
                  Ksh {product.originalPrice.toLocaleString()}
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Available on monthly installments from Ksh 15,416/mo with selected bank partners.
              </p>
            </div>

            <div className="flex flex-col gap-stack-md">
              <div className="flex items-center gap-gutter">
                <div className="flex items-center border border-outline rounded-lg overflow-hidden h-12">
                  <Button
                    variant="ghost"
                    className="px-4 h-full rounded-none hover:bg-surface-container transition-colors"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  >
                    <Minus className="w-5 h-5" />
                  </Button>
                  <Input
                    type="number"
                    min={1}
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-12 text-center border-none focus:ring-0 font-label-lg text-label-lg bg-transparent [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  />
                  <Button
                    variant="ghost"
                    className="px-4 h-full rounded-none hover:bg-surface-container transition-colors"
                    onClick={() => setQuantity((q) => q + 1)}
                  >
                    <Plus className="w-5 h-5" />
                  </Button>
                </div>
                <Button className="flex-1 bg-primary text-white h-12 rounded-lg font-label-lg text-label-lg hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" /> Add to Cart
                </Button>
              </div>
              <Button variant="outline" className="w-full border-on-surface h-12 rounded-lg font-label-lg text-label-lg hover:bg-on-surface hover:text-white transition-all">
                Buy It Now
              </Button>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-stack-md border-t border-outline-variant pt-stack-lg">
              {product.highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-stack-sm">
                    <Icon className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-label-lg text-label-lg">{item.title}</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tabs Section: Specifications & Reviews */}
        <div className="mt-20 border-t border-outline-variant">
          <Tabs defaultValue="specs" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="flex gap-stack-lg mb-stack-lg bg-transparent h-auto p-0 border-b border-outline-variant rounded-none">
              <TabsTrigger
                value="specs"
                className="py-stack-md font-label-lg text-label-lg data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none bg-transparent px-0"
              >
                Specifications
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="py-stack-md font-label-lg text-label-lg data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none bg-transparent px-0"
              >
                Customer Reviews (128)
              </TabsTrigger>
              <TabsTrigger
                value="shipping"
                className="py-stack-md font-label-lg text-label-lg data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none bg-transparent px-0"
              >
                Shipping &amp; Returns
              </TabsTrigger>
            </TabsList>
            <TabsContent value="specs" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-gutter gap-y-4 max-w-4xl">
                {product.specs.map((spec, idx) => (
                  <div key={idx} className="flex justify-between py-3 border-b border-surface-container">
                    <span className="text-on-surface-variant">{spec.label}</span>
                    <span className="font-label-lg">{spec.value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="reviews">
              <p className="text-on-surface-variant">Reviews content will go here.</p>
            </TabsContent>
            <TabsContent value="shipping">
              <p className="text-on-surface-variant">Shipping and returns information will go here.</p>
            </TabsContent>
          </Tabs>
        </div>

        {/* Recommendations Section */}
        <section className="mt-24">
          <div className="flex justify-between items-end mb-stack-lg">
            <div>
              <h2 className="font-headline-md text-headline-md">You Might Also Like</h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Recommended appliances based on your view</p>
            </div>
            <Button variant="link" className="text-primary font-label-lg text-label-lg flex items-center gap-1 hover:underline p-0">
              View All <ArrowRightCircle className="w-5 h-5" />
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {relatedProducts.map((item) => (
              <RelatedProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container dark:bg-inverse-surface border-t border-outline-variant dark:border-outline mt-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-stack-lg px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto gap-stack-lg">
          <div className="flex flex-col gap-2">
            <div className="text-title-lg font-title-lg font-bold text-on-surface dark:text-inverse-on-surface">Hotpoint</div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xs">
              Professional grade appliances designed for modern homes and commercial spaces.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-gutter gap-y-2">
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
            <a href="#" className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface hover:underline decoration-primary transition-colors">
              Contact Support
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end">
              <p className="font-label-sm text-label-sm text-on-surface-variant">© 2024 Hotpoint Appliances. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Related Product Card Component
function RelatedProductCard({ product }: { product: { id: number; name: string; price: number; originalPrice: number | null; image: string } }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="bg-white dark:bg-surface-container-lowest rounded-lg p-4 product-shadow flex flex-col gap-stack-sm group hover:-translate-y-1 transition-all duration-300 border border-outline-variant"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square bg-surface-container-low rounded-lg p-4 mb-2 relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="w-full h-full object-contain mix-blend-multiply"
        />
        <div
          className={`absolute inset-0 bg-black/5 transition-opacity flex items-center justify-center gap-2 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Button variant="secondary" size="icon" className="rounded-full shadow-md hover:text-primary transition-colors bg-white/80 backdrop-blur">
            <Eye className="w-5 h-5" />
          </Button>
          <Button variant="secondary" size="icon" className="rounded-full shadow-md hover:text-primary transition-colors bg-white/80 backdrop-blur">
            <Heart className="w-5 h-5" />
          </Button>
        </div>
      </div>
      <h3 className="font-label-lg text-label-lg text-on-surface group-hover:text-primary transition-colors truncate">{product.name}</h3>
      <div className="flex items-baseline gap-2">
        <span className="text-primary font-headline-md text-[18px]">Ksh {product.price.toLocaleString()}</span>
        {product.originalPrice && (
          <span className="text-on-surface-variant line-through text-label-sm">Ksh {product.originalPrice.toLocaleString()}</span>
        )}
      </div>
      <Button
        variant="outline"
        className="mt-2 w-full py-2 border border-outline-variant rounded-lg text-primary font-label-lg hover:bg-primary hover:text-white hover:border-primary transition-all flex items-center justify-center gap-2"
      >
        <ShoppingCart className="w-4 h-4" /> Add to Cart
      </Button>
    </Card>
  );
}