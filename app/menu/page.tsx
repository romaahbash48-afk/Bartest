import { MenuPageCatalog } from '@/components/MenuPageCatalog';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Menu | Bar Henrietta',
  description: 'Natural wine, cocktails, beer, non-alcoholic drinks & snacks at Bar Henrietta, Wedding Berlin.',
};

export default function MenuPage() {
  return (
    <div className="pt-24 pb-20 px-6">
      <h1 className="font-serif text-4xl text-text text-center mb-4">Menu</h1>
      <p className="text-text-muted text-center mb-12">
        Natural Wine • Cocktails • Beer • Non-Alcoholic • Snacks
      </p>
      <MenuPageCatalog />
    </div>
  );
}
