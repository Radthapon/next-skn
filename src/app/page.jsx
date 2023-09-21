import Hero from "@/components/Home/Hero/Hero";
import ProductsFeatures from "@/components/Home/ProductsFeatures/ProductsFeatures";
import Welcome from "@/components/Home/Welcome/Welcome";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main>
      <Hero/>
      <Welcome/>
      <ProductsFeatures/>
    </main>
  )
}
