import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-gray-50 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Kasparro</h3>
            <p className="text-sm text-gray-600">
              AI-native SEO platform for the AI-first search era.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/platform" className="text-gray-600 hover:text-gray-900">
                Platform
              </Link>
              <Link href="/app/dashboard" className="text-gray-600 hover:text-gray-900">
                Dashboard
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/about" className="text-gray-600 hover:text-gray-900">
                About
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          © 2024 Kasparro. All rights reserved.
        </div>
      </div>
    </footer>
  );
}