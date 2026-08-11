import { Cairo, Tajawal } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata = {
  title: "واحة المدينة | شراء الأثاث المستعمل والسكراب بالمدينة المنورة - 0510542230",
  description: "أفضل شركة شراء أثاث مستعمل وسكراب بالمدينة المنورة. نشتري الكنب، غرف النوم، الدواليب، المكيفات، المطابخ، الأجهزة الكهربائية وسكراب المعادن بأعلى الأسعار مع خدمة الفك والنقل المجاني والدفع الفوري.",
  keywords: ["شراء اثاث مستعمل بالمدينة المنورة", "شراء سكراب بالمدينة المنورة", "شراء مكيفات مستعملة", "شراء مطابخ مستعملة", "شراء غرف نوم مستعملة", "حراج المدينة المنورة اثاث"],
  openGraph: {
    title: "واحة المدينة | شراء الأثاث المستعمل والسكراب بالمدينة المنورة",
    description: "نشتري أثاثك المستعمل والسكراب بأعلى سعر بالمدينة المنورة. فك ونقل مجاني ودفع نقدي فوري.",
    url: "https://www.scrapzonemadinah.com/",
    siteName: "واحة المدينة",
    locale: "ar_SA",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${tajawal.variable} scroll-smooth`}>
      <body className="bg-brand-bg text-slate-800 font-cairo antialiased min-h-screen selection:bg-brand-gold selection:text-white">
        {children}
      </body>
    </html>
  );
}
