export default function Footer() {
  return (
    <footer className="w-full border-t py-4 text-center text-sm text-gray-500 dark:text-gray-400">
      <p>© {new Date().getFullYear()} co.poiesis</p>
    </footer>
  );
}