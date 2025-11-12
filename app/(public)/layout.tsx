import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Layout({ children }: { children: React. ReactNode}) {
  return (
    <section className="flex min-h-screen flex-col max-w-7xl xxl:max-w-3xl mx-auto">
      <Header />
      <main className="flex-1 pb-20">{children}</main>
      <Footer />
    </section>
  )
}