export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-slate-800 py-8">
      <p className="text-center text-sm text-secondary">
        © {new Date().getFullYear()} Abdoul Karim Ba
      </p>
    </footer>
  );
}
