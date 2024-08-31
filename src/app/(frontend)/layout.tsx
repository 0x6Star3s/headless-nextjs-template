import type { Metadata } from "next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

import VisualEditingControls from "@/components/VisualEditingControls";
import "@/styles/app.scss";
import SkipToContent from "@/components/ui/SkipToContent";

// export const metadata: Metadata = {

// }

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-canvas text-ink">
        <SkipToContent />
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <VisualEditingControls />
      </body>
    </html>
  );
}
