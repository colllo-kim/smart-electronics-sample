"use client";

import { useState } from "react";
import {
  Lock,
  ArrowRight,
  ArrowLeft,
  MapPin,
  Truck,
  Wallet,
  CreditCard,
  ChevronRight,
  Smartphone,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";


export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "Nairobi",
    phone: "",
  });
  const [deliveryMethod, setDeliveryMethod] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("mpesa");
  const [mpesaNumber, setMpesaNumber] = useState("");
  const [promoCode, setPromoCode] = useState("");

  // Static cart items (for demo)
  const cartItems = [
    {
      id: 1,
      name: "Hisense Digital Solo Microwave Oven, 25L - Black H25-MOBS7H",
      price: 13995,
      quantity: 1,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBLVjSkkCYpR9iEDP7iVBO1ODhC5F8US53e52fsjs147I3A_LmOhVr4ByLe_groPYljKDyFWbS8k2Ghn1ziMHSvu4pUnU2Je70xq1OjIZTxFXpLII4e3kp_RY71fmBshhfjEqp10d84US6vEqKIU3NsiZwgKFHzop2_3ihWkgCgB03PhuoFzeRitHgqzs-q0NBnhJKCkSyqQFOyFWS7xLXh1pAMMfBzEOv2WwplVN77hc1s27SNmEE8hpqALGtt90KEApHEfi4U",
    },
    {
      id: 2,
      name: "Von Freestanding Cooker 3 Gas + 1 Electric - Inox Grey",
      price: 44995,
      quantity: 1,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDl9KN0aWQHLL8-Fl_Le6N_64CtgUXUOMYph4xfizpOGBffNMaeMfzkLQUNF1rby3GQmufVkMwh_b_As6o1m4YCRkL94k-X_8_tShxfddEYCb08AePn9RT98xCJOefEqi9nMp1i7bmc_fZJAJIZncz8pijxJhNClcqB4mj3zXOgPaqYJLMpSKSX1COUx66sZ2UE5f1BX2Q63dABBYwVz9k0LURdYY9FM5dFE_HPya0jFwrBpc4Kk7xNmt5vyJDwv9bcT1ad6yGE",
    },
  ];

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCosts = {
    standard: 450,
    express: 1200,
    pickup: 0,
  };
  const shippingCost = shippingCosts[deliveryMethod as keyof typeof shippingCosts] || 0;
  const tax = Math.round(subtotal * 0.16); // 16% VAT
  const total = subtotal + shippingCost + tax;

  // Step navigation
  const goToStep = (s: number) => {
    setStep(s);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContinue = () => {
    if (step < 3) goToStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) goToStep(step - 1);
  };

  return (
    <div className="bg-background font-body-lg text-on-surface">
      {/* Header – Checkout focused */}
      <header className="bg-surface-container-lowest border-b border-outline-variant w-full sticky top-0 z-50">
        <div className="flex items-center justify-between px-margin-mobile md:px-margin-desktop h-20 max-w-container-max mx-auto">
          <div className="flex items-center gap-stack-lg">
            <a href="/" className="text-headline-lg font-headline-lg font-black text-primary uppercase">
              Smart Electronics
            </a>
            <div className="h-6 w-px bg-outline-variant hidden md:block"></div>
            <div className="hidden md:flex items-center gap-2 text-on-surface-variant font-label-lg">
              <Lock className="w-5 h-5" />
              <span>Secure Checkout</span>
            </div>
          </div>
          <div className="flex items-center gap-stack-md">
            <a href="/cart" className="text-primary font-label-lg hover:underline">
              Cancel &amp; Return to Store
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Checkout Form Sections (8 Columns) */}
          <div className="lg:col-span-8 space-y-stack-lg">
            {/* Step Progress Indicator */}
            <nav className="flex items-center justify-between border-b border-outline-variant mb-stack-lg overflow-x-auto whitespace-nowrap">
              <div className="flex gap-stack-lg">
                {[1, 2, 3].map((s) => (
                  <button
                    key={s}
                    className={`pb-3 font-label-lg px-2 flex items-center gap-2 transition-all ${
                      step === s
                        ? "step-active text-primary border-b-2 border-primary"
                        : "step-inactive text-on-surface-variant border-b-2 border-transparent"
                    }`}
                    onClick={() => goToStep(s)}
                  >
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                        step === s
                          ? "bg-primary text-white"
                          : "bg-surface-container-highest text-on-surface"
                      }`}
                    >
                      {s}
                    </span>
                    {s === 1 && "Shipping Details"}
                    {s === 2 && "Delivery Options"}
                    {s === 3 && "Payment Method"}
                  </button>
                ))}
              </div>
            </nav>

            {/* Step 1: Shipping Details */}
            {step === 1 && (
              <section className="space-y-stack-md animate-in fade-in duration-500">
                <Card>
                  <CardContent className="p-stack-lg">
                    <h2 className="font-headline-md text-headline-md mb-stack-md flex items-center gap-2">
                      <MapPin className="w-6 h-6 text-primary" /> Shipping Information
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
                      <div className="space-y-1">
                        <Label htmlFor="firstName" className="font-label-lg text-on-surface-variant">
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="e.g. John"
                          className="p-3 bg-white border border-outline rounded-lg font-body-lg"
                        />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="lastName" className="font-label-lg text-on-surface-variant">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="e.g. Doe"
                          className="p-3 bg-white border border-outline rounded-lg font-body-lg"
                        />
                      </div>
                      <div className="md:col-span-2 space-y-1">
                        <Label htmlFor="email" className="font-label-lg text-on-surface-variant">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john.doe@example.com"
                          className="p-3 bg-white border border-outline rounded-lg font-body-lg"
                        />
                      </div>
                      <div className="md:col-span-2 space-y-1">
                        <Label htmlFor="address" className="font-label-lg text-on-surface-variant">
                          Street Address
                        </Label>
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="Apartment, suite, unit, etc."
                          className="p-3 bg-white border border-outline rounded-lg font-body-lg"
                        />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="city" className="font-label-lg text-on-surface-variant">
                          City
                        </Label>
                        <Select
                          value={formData.city}
                          onValueChange={(val) => setFormData({ ...formData, city: val })}
                        >
                          <SelectTrigger className="w-full p-3 bg-white border border-outline rounded-lg font-body-lg">
                            <SelectValue placeholder="Select city" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Nairobi">Nairobi</SelectItem>
                            <SelectItem value="Mombasa">Mombasa</SelectItem>
                            <SelectItem value="Kisumu">Kisumu</SelectItem>
                            <SelectItem value="Nakuru">Nakuru</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="phone" className="font-label-lg text-on-surface-variant">
                          Phone Number
                        </Label>
                        <div className="flex">
                          <span className="p-3 bg-surface-container border border-r-0 border-outline rounded-l-lg text-on-surface-variant">
                            +254
                          </span>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="712 345 678"
                            className="w-full p-3 bg-white border border-outline rounded-r-lg font-body-lg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-stack-lg flex justify-end">
                      <Button
                        className="bg-primary text-white px-stack-lg py-3 rounded-lg font-label-lg hover:brightness-110 transition-all flex items-center gap-2"
                        onClick={handleContinue}
                      >
                        Continue to Delivery <ArrowRight className="w-5 h-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </section>
            )}

            {/* Step 2: Delivery Options */}
            {step === 2 && (
              <section className="space-y-stack-md animate-in fade-in duration-500">
                <Card>
                  <CardContent className="p-stack-lg">
                    <h2 className="font-headline-md text-headline-md mb-stack-md flex items-center gap-2">
                      <Truck className="w-6 h-6 text-primary" /> Choose Delivery Method
                    </h2>
                    <RadioGroup
                      value={deliveryMethod}
                      onValueChange={setDeliveryMethod}
                      className="space-y-stack-md"
                    >
                      <div className="flex items-center p-stack-md border border-outline-variant rounded-lg cursor-pointer hover:bg-surface-container-low transition-colors group data-[state=checked]:border-primary">
                        <RadioGroupItem value="standard" id="standard" className="w-5 h-5" />
                        <Label htmlFor="standard" className="ml-4 flex-1 cursor-pointer">
                          <p className="font-label-lg">Standard Delivery</p>
                          <p className="text-body-sm text-on-surface-variant">2-4 Business Days</p>
                        </Label>
                        <span className="font-headline-md text-primary">Ksh 450</span>
                      </div>
                      <div className="flex items-center p-stack-md border border-outline-variant rounded-lg cursor-pointer hover:bg-surface-container-low transition-colors">
                        <RadioGroupItem value="express" id="express" className="w-5 h-5" />
                        <Label htmlFor="express" className="ml-4 flex-1 cursor-pointer">
                          <p className="font-label-lg">Express Delivery</p>
                          <p className="text-body-sm text-on-surface-variant">Next Business Day (Before 5 PM)</p>
                        </Label>
                        <span className="font-headline-md text-primary">Ksh 1,200</span>
                      </div>
                      <div className="flex items-center p-stack-md border border-outline-variant rounded-lg cursor-pointer hover:bg-surface-container-low transition-colors">
                        <RadioGroupItem value="pickup" id="pickup" className="w-5 h-5" />
                        <Label htmlFor="pickup" className="ml-4 flex-1 cursor-pointer">
                          <p className="font-label-lg">Warehouse Pickup</p>
                          <p className="text-body-sm text-on-surface-variant">Available same day at Sarit Centre</p>
                        </Label>
                        <span className="font-headline-md text-primary">FREE</span>
                      </div>
                    </RadioGroup>
                    <div className="mt-stack-lg flex justify-between">
                      <Button
                        variant="ghost"
                        className="text-secondary font-label-lg hover:text-primary transition-colors flex items-center gap-1"
                        onClick={handleBack}
                      >
                        <ArrowLeft className="w-5 h-5" /> Back to Shipping
                      </Button>
                      <Button
                        className="bg-primary text-white px-stack-lg py-3 rounded-lg font-label-lg hover:brightness-110 transition-all flex items-center gap-2"
                        onClick={handleContinue}
                      >
                        Continue to Payment <ArrowRight className="w-5 h-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </section>
            )}

            {/* Step 3: Payment Method */}
            {step === 3 && (
              <section className="space-y-stack-md animate-in fade-in duration-500">
                <Card>
                  <CardContent className="p-stack-lg">
                    <h2 className="font-headline-md text-headline-md mb-stack-md flex items-center gap-2">
                      <Wallet className="w-6 h-6 text-primary" /> Select Payment Method
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md mb-stack-lg">
                      <Button
                        variant={paymentMethod === "mpesa" ? "default" : "outline"}
                        className={`flex flex-col items-center justify-center p-stack-lg border-2 rounded-lg h-auto ${
                          paymentMethod === "mpesa"
                            ? "border-primary bg-primary-container/10"
                            : "border-outline hover:bg-surface-container-low"
                        }`}
                        onClick={() => setPaymentMethod("mpesa")}
                      >
                        <Smartphone className="w-12 h-12 text-primary mb-2" />
                        <p className="font-label-lg text-primary">M-Pesa Express</p>
                      </Button>
                      <Button
                        variant={paymentMethod === "card" ? "default" : "outline"}
                        className={`flex flex-col items-center justify-center p-stack-lg border-2 rounded-lg h-auto ${
                          paymentMethod === "card"
                            ? "border-primary bg-primary-container/10"
                            : "border-outline hover:bg-surface-container-low"
                        }`}
                        onClick={() => setPaymentMethod("card")}
                      >
                        <CreditCard className="w-12 h-12 text-on-surface-variant mb-2" />
                        <p className="font-label-lg">Credit / Debit Card</p>
                      </Button>
                    </div>
                    {paymentMethod === "mpesa" && (
                      <div className="bg-surface-container-low p-stack-md rounded-lg space-y-stack-md">
                        <div className="flex items-center gap-2">
                          <img
                            alt="Mpesa"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrLoCrZn8BDnex6KMMSLsjugAnj4SUDQ7kZCFvLJmrZ3L68YPbFpuKLhZnVWIPkERgnt9GJYMoIRkYCIYZaELniwT530iF8p8onM-5SzNjbwFxQH8t9QPKFYENqTBtNCsf4bqQJ2z-ie0EhEIUG3nTheVEMdG14mz_RWH4hUSw340ToCCuTcajyOhymIRuIfjcZjPihJjPwpGzwpgUInvt4wzAtIX0atBo6U3wiMvt7TWAtEKOMp8Z4ZZO9_P8ulYjNzY9ZO77"
                            width={32}
                            height={32}
                            className="h-8 w-auto"
                          />
                          <p className="font-label-lg">Pay via M-Pesa Prompt</p>
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor="mpesaNumber" className="font-label-sm text-on-surface-variant">
                            M-Pesa Registered Number
                          </Label>
                          <Input
                            id="mpesaNumber"
                            value={mpesaNumber}
                            onChange={(e) => setMpesaNumber(e.target.value)}
                            placeholder="0712 345 678"
                            className="w-full p-3 bg-white border border-outline rounded-lg font-body-lg"
                          />
                          <p className="text-label-sm text-on-surface-variant">
                            You will receive a popup on your phone to enter your PIN.
                          </p>
                        </div>
                      </div>
                    )}
                    {paymentMethod === "card" && (
                      <div className="bg-surface-container-low p-stack-md rounded-lg space-y-stack-md">
                        <p className="text-on-surface-variant">Credit/Debit card form placeholder.</p>
                        {/* You can add Stripe Elements here later */}
                      </div>
                    )}
                    <div className="mt-stack-lg flex justify-between items-center">
                      <Button
                        variant="ghost"
                        className="text-secondary font-label-lg hover:text-primary transition-colors flex items-center gap-1"
                        onClick={handleBack}
                      >
                        <ArrowLeft className="w-5 h-5" /> Back
                      </Button>
                      <Button className="bg-primary text-white px-12 py-4 rounded-lg font-headline-md hover:brightness-110 shadow-lg active:scale-95 transition-all">
                        Complete Order
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </section>
            )}
          </div>

          {/* Order Review Sidebar (4 Columns) */}
          <aside className="lg:col-span-4">
            <Card className="sticky top-24 space-y-stack-md p-stack-lg custom-shadow border border-outline-variant">
              <h3 className="font-headline-md text-headline-md border-b border-outline-variant pb-2">Order Review</h3>
              <div className="space-y-stack-md max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-stack-sm">
                    <div className="w-20 h-20 bg-surface-container rounded-lg flex-shrink-0 flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-label-lg line-clamp-2">{item.name}</p>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-on-surface-variant font-body-sm">Qty: {item.quantity}</span>
                        <span className="font-label-lg text-primary">Ksh {item.price.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-stack-md border-t border-outline-variant space-y-2">
                <div className="flex justify-between text-body-lg">
                  <span className="text-on-surface-variant">Subtotal</span>
                  <span>Ksh {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-body-lg">
                  <span className="text-on-surface-variant">Estimated Shipping</span>
                  <span id="shipping-cost">Ksh {shippingCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-body-lg text-primary font-label-lg">
                  <span>Tax (16% VAT)</span>
                  <span>Included</span>
                </div>
                <div className="pt-stack-md border-t border-outline-variant flex justify-between items-end">
                  <span className="font-headline-md">Total</span>
                  <div className="text-right">
                    <p className="text-display-lg font-display-lg text-primary">
                      Ksh {total.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-stack-md">
                <div className="flex gap-2">
                  <Input
                    placeholder="Promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 p-2 border border-outline rounded-lg text-sm"
                  />
                  <Button variant="secondary" className="px-4 py-2 bg-on-surface text-white rounded-lg font-label-sm hover:bg-primary transition-colors">
                    Apply
                  </Button>
                </div>
              </div>
              <p className="text-center text-label-sm text-on-surface-variant mt-stack-md">
                All prices are inclusive of 16% VAT. Secure encrypted transaction.
              </p>
            </Card>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container border-t border-outline-variant mt-stack-lg">
        <div className="flex flex-col md:flex-row justify-between items-center py-stack-lg px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto gap-stack-md">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-title-lg font-title-lg font-bold text-on-surface uppercase mb-1">
              Hotpoint
            </span>
            <p className="font-label-sm text-on-surface-variant">© 2024 Hotpoint Appliances. All rights reserved.</p>
          </div>
          <nav className="flex flex-wrap justify-center gap-stack-md">
            <a href="#" className="font-label-sm text-on-surface-variant hover:text-on-surface hover:underline decoration-primary transition-colors">
              About Us
            </a>
            <a href="#" className="font-label-sm text-on-surface-variant hover:text-on-surface hover:underline decoration-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-label-sm text-on-surface-variant hover:text-on-surface hover:underline decoration-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="font-label-sm text-on-surface-variant hover:text-on-surface hover:underline decoration-primary transition-colors">
              Shipping Info
            </a>
            <a href="#" className="font-label-sm text-on-surface-variant hover:text-on-surface hover:underline decoration-primary transition-colors">
              Contact Support
            </a>
          </nav>
          <div className="flex gap-stack-sm">
            <img
              alt="Visa"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBHYHVTGnMg4uG-bCE_tMWKyXdXd0uCJSWhCWPXQceX1xMq0XFbLFSRBGABGUV-Btam1qbIV20T_MFBTPXA-XJzm6w4VZQeBxaFLBosY-1pvQWb32imIzU5S-0L9AzZvxkREkvvLUthQfuH2qPxnzQ4gXa4kEp3x4UePQNJv9QFmneYkiQlTKK21vCjXYKuW1TNig4nwf_FuK263dgD0W5gsJOdv1rwi2HcdOj_3XyDyrKk8zk9axulSs2ddt0bq5hQbIbqyv5"
              width={48}
              height={24}
              className="h-6 w-auto"
            />
            <img
              alt="Mastercard"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyAALk9cOlcgQ9N_nZixeHQa684p28kIgHZ3BxSW01HKAZ2VNr2G193BPIZ3eMgi_ebt3LrhgwKqkm1SLlueiWU9dMqPN6VGm0UD2CN4R_-96PTQseefcYbjgNct0OqGbkCK9hGgLDSDChRXXvGe7ArXNOSPtDSZeKmzJzcz1QpLUsFdUiyqjMP9TdUFsH7SdCKooG777WkjUllNGZFrHJUeCrLhrYJBgqoRUWOSETqpD7UT6zxKd7dpGm2xj2sAT3aZNSKQQS"
              width={48}
              height={24}
              className="h-6 w-auto"
            />
            <img
              alt="Mpesa"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuz0ShJNqR0sQC_78Ix7GPpkqzZrvWFrgVEXW8vae8o9u3D_t_3-ensDirff2x1OsSdjJmQqjOuN_VQKJTWmQGX-x2uRKavyP28uYHTpOO-6r9IV84NCDXZ5wlDR19pF4MB7F59WCSXBoptvsvbtjWR-QLvE0XjUQwOJwCx8ozqxzbqLn7G_es-EESJxN6gv71TwYSyq8-6oX33t1hxsoSPu1m1B5Z81-TvsbKQEX0oc4884HBlsUOn9E6rQqzXa2jooSC0Nto"
              width={48}
              height={24}
              className="h-6 w-auto"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}