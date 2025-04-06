import { useState, useEffect } from 'react';
import { ShoppingBag, X, Gift, Zap } from 'lucide-react';

const Marketplace = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [xpBalance, setXpBalance] = useState(1200); // Example XP balance

  const products = [
    {
      id: 1,
      name: "ERROR XP",
      category: "Digital",
      price: 500,
      image: "https://placehold.co/400x300/4f46e5/white?text=ERROR+XP",
      description: "Exclusive digital XP package for collectors"
    },
    {
      id: 2,
      name: "T-Shirt",
      category: "Apparel",
      price: 800,
      image: "https://placehold.co/400x300/10b981/white?text=T-Shirt",
      description: "Premium quality cotton t-shirt with exclusive print"
    },
    {
      id: 3,
      name: "Water Bottle",
      category: "Accessories",
      price: 600,
      image: "https://placehold.co/400x300/0ea5e9/white?text=Water+Bottle",
      description: "Eco-friendly stainless steel water bottle"
    },
    {
      id: 4,
      name: "Sweatshirt",
      category: "Apparel",
      price: 1200,
      image: "https://placehold.co/400x300/f97316/white?text=Sweatshirt",
      description: "Comfortable sweatshirt with unique design"
    },
    {
      id: 5,
      name: "Personal Diary",
      category: "Stationery",
      price: 400,
      image: "https://placehold.co/400x300/a855f7/white?text=Diary",
      description: "Premium leather-bound personal diary"
    },
    {
      id: 6,
      name: "Yoga Mat",
      category: "Fitness",
      price: 900,
      image: "https://placehold.co/400x300/ec4899/white?text=Yoga+Mat",
      description: "Eco-friendly non-slip yoga mat"
    }
  ];

  const redeemProduct = (product) => {
    if (xpBalance >= product.price) {
      setXpBalance(xpBalance - product.price);
      alert(`Successfully redeemed ${product.name}!`);
    } else {
      alert("Not enough XP for this product");
    }
  };

  useEffect(() => {
    // Add floating animation effect to product cards
    const cards = document.querySelectorAll('.product-card');
    cards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 relative overflow-hidden">
      {/* Floating XP indicator */}
      <div className="absolute top-4 right-4 bg-indigo-600/50 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 z-50">
        <Zap className="w-5 h-5 text-yellow-300" />
        <span className="font-bold">{xpBalance} XP</span>
      </div>

      {/* Header */}
      <header className="text-center mb-12 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
          XP STORE
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Redeem exclusive products using your XP points
        </p>
      </header>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {products.map((product, index) => (
          <div 
            key={product.id}
            className="product-card bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 animate-float-in"
            onClick={() => setSelectedProduct(product)}
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 bg-black/70 px-3 py-1 rounded-tr-lg">
                <span className="font-medium">{product.price} XP</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-1">{product.name}</h3>
              <p className="text-gray-400 text-sm mb-3">{product.category}</p>
              <button 
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg flex items-center justify-center gap-2 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  redeemProduct(product);
                }}
              >
                <Gift className="w-4 h-4" />
                Redeem
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 relative">
            <button 
              className="absolute top-4 right-4 p-1 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
              onClick={() => setSelectedProduct(null)}
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="h-64 md:h-full">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-sm text-gray-400">{selectedProduct.category}</span>
                    <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
                  </div>
                  <span className="text-xl font-bold text-indigo-400">{selectedProduct.price} XP</span>
                </div>
                
                <p className="text-gray-300 mb-6">{selectedProduct.description}</p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <button 
                    className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
                    onClick={() => redeemProduct(selectedProduct)}
                  >
                    <ShoppingBag className="w-5 h-5" />
                    Redeem Now
                  </button>
                  
                  <button 
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 px-4 rounded-lg transition-colors"
                    onClick={() => setSelectedProduct(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating decorative elements */}
      {[...Array(8)].map((_, i) => (
        <div 
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20"
          style={{
            width: `${Math.random() * 200 + 100}px`,
            height: `${Math.random() * 200 + 100}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            filter: 'blur(60px)',
            animation: `float ${Math.random() * 10 + 10}s infinite alternate`,
            animationDelay: `${i * 2}s`
          }}
        />
      ))}

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0) rotate(0deg); }
          50% { transform: translateY(-40px) translateX(20px) rotate(180deg); }
          100% { transform: translateY(0) translateX(0) rotate(360deg); }
        }
        
        @keyframes float-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        .animate-float-in {
          animation: float-in 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Marketplace;