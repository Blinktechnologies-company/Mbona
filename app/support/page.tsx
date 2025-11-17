import SiteHeader from "@/components/site-header";

export default function SupportPage() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-6">
        <SiteHeader variant="solid" />
      </div>
      <main className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="text-3xl font-extrabold">Support</h1>
        <p className="mt-4 text-zinc-700">This is the Support page.</p>
      </main>
    </div>
  );
}

