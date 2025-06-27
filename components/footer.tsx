export function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-sage-200 bg-sage-50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-2xl font-bold text-sage-800">{"Gaurav Koirala"}</div>
          <div className="text-sage-600 text-center sm:text-right">
            <p>&copy; 2024 Gaurav Koirala. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
