import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold text-gray-800">
            Scroll-to-Top Button Demo
          </h1>
          <p className="text-gray-600 mt-1">
            Scroll down to see the magic happen!
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Welcome to the Demo
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            This is a demonstration of a scroll-to-top button feature. As you
            scroll down this page, a button will appear in the bottom-right
            corner. Click it to smoothly scroll back to the top!
          </p>
          <p className="text-gray-700 leading-relaxed">
            The button uses React hooks to detect scroll position and appears
            only when you've scrolled more than 300 pixels down the page.
          </p>
        </section>

        {/* Demo Sections */}
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <section key={num} className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Section {num}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <div className="bg-linear-to-r from-purple-100 to-blue-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Key Feature {num}
              </h3>
              <p className="text-gray-700">
                This section demonstrates the scrollable content. Keep scrolling
                to see more sections and watch how the scroll-to-top button
                appears and disappears based on your position.
              </p>
            </div>
          </section>
        ))}

        {/* Footer */}
        <footer className="bg-white rounded-lg shadow-lg p-8 text-center">
          <p className="text-gray-600">
            You've reached the end! Click the button in the bottom-right to go
            back to the top.
          </p>
        </footer>
      </main>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-linear-to-r from-purple-600 to-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-16 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
}
