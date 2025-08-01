import React, { useEffect } from 'react';

// --- Helper Components (Placeholders) ---
// To make this example runnable, I've created simple versions of the components you're importing.
// You can replace these with your actual component code.

const Header = () => (
  <header className="bg-white/80 backdrop-blur-sm shadow-md p-4 fixed w-full top-0 z-10">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-950">
        <i className="bi bi-gem mr-2"></i>Card Gallery
      </div>
      <nav className="hidden md:flex space-x-4">
        <a href="#" className="text-gray-600 hover:text-purple-600 font-medium">Home</a>
        <a href="#" className="text-gray-600 hover:text-purple-600 font-medium">Gallery</a>
        <a href="#" className="text-gray-600 hover:text-purple-600 font-medium">About</a>
        <a href="#" className="text-gray-600 hover:text-purple-600 font-medium">Contact</a>
      </nav>
       <button className="md:hidden text-2xl">
        <i className="bi bi-list"></i>
      </button>
    </div>
  </header>
);

const Card = ({ title, description, imageUrl }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out group">
    <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity" 
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/e2e8f0/334155?text=Image+Not+Found'; }} 
    />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

const CardList = () => {
    const cardsData = [
        { id: 1, title: 'Mountain Landscape', description: 'A beautiful view of the mountains at dawn.', imageUrl: 'https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: 2, title: 'Modern Workspace', description: 'A clean and modern workspace setup.', imageUrl: 'https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: 3, title: 'Coding on Laptop', description: 'Close-up of code on a laptop screen.', imageUrl: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: 4, title: 'City at Night', description: 'A stunning shot of the city skyline at night.', imageUrl: 'https://images.pexels.com/photos/544247/pexels-photo-544247.jpeg?auto=compress&cs=tinysrgb&w=600' },
    ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {cardsData.map(card => (
        <Card key={card.id} title={card.title} description={card.description} imageUrl={card.imageUrl} />
      ))}
    </div>
  );
};

const Button = ({ nameButton, className }) => (
  <button className={`bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 ${className}`}>
    {nameButton}
  </button>
);


// --- Main App Component ---

const App = () => {
  // This useEffect hook dynamically adds the Bootstrap Icons stylesheet to the document's head.
  // This is a reliable way to include external CSS in a React component environment
  // and fixes the "Could not resolve" build error.
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css';
    document.head.appendChild(link);

    // This is a cleanup function. It removes the stylesheet when the component is unmounted
    // to prevent memory leaks and keep the application clean.
    return () => {
      document.head.removeChild(link);
    };
  }, []); // The empty dependency array [] ensures this effect runs only once when the component mounts.

  return (
    <div className="bg-gray-50">
      <Header/>
      
      <main>
        <section 
          className='h-screen bg-cover bg-center flex items-center justify-start text-white' 
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/2668314/pexels-photo-2668314.jpeg)' }}
        >
          <div className='container mx-auto p-4 md:pl-16'>
            <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl max-w-xl">
                <h2 className='text-5xl font-bold mb-4 text-white'>Welcome to the Card Gallery</h2>
                <p className='text-gray-200 mb-6 text-lg font-semibold'>Browse through our collection of cards and discover amazing designs.</p>
                <Button nameButton="Explore Cards"/>
            </div>
          </div>
        </section>

        {/* --- THIS IS THE NEW SECTION YOU REQUESTED --- */}
        <section className='py-24 bg-gray-100'>
          <div className='container mx-auto px-6 text-center relative'>
            <div className="max-w-4xl mx-auto">
                <h2 className='text-4xl font-bold text-purple-800 mb-4'>
                  Explore our collection of cards showcasing various items.
                </h2>
                <p className='text-gray-600 text-lg max-w-3xl mx-auto mb-8'>
                  Discover beautifully designed cards curated for inspiration and creativity. Browse through the gallery to find designs that spark your imagination.
                </p>
                <button className='bg-purple-600 text-white font-bold py-3 px-10 rounded-full hover:bg-purple-700 transition duration-300 transform hover:scale-105 shadow-lg'>
                  Browse Collection
                </button>
            </div>
            <i className="bi bi-arrows-fullscreen absolute right-6 top-1/2 -translate-y-1/2 text-3xl text-gray-400 hidden lg:block"></i>
          </div>
        </section>
        {/* --- END OF NEW SECTION --- */}

        <section className='container mx-auto p-8 md:p-16'>
          <CardList />
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
            <p>&copy; 2024 Card Gallery. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
