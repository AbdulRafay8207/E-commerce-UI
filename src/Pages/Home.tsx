import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard"
import { useNavigate } from "react-router";

const Home = ()=>{
  const navigate = useNavigate()
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);
  
  const handleLogout = ()=>{
    sessionStorage.setItem("isLoggedIn", "false");
    navigate("/")
  }
    return(
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <title>E-Commerce App</title>
  {/* Navbar */}
  <nav className="flex flex-wrap items-center justify-between bg-gray-600 px-6 py-3">
    <div className="mr-6 flex flex-shrink-0 items-center text-white">
      <img
        className="mx-auto h-10 w-auto"
        src="https://baitussalam.org/images/logo-2.svg"
        alt="Your Company"
      />
    </div>
    <div className="block lg:hidden">
      <button className="flex items-center rounded border border-gray-500 px-3 py-2 text-gray-400 hover:border-white hover:text-white">
        <svg
          className="h-3 w-3 fill-current"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div className="block w-full flex-grow lg:flex lg:w-auto lg:items-center">
      <div className="text-sm lg:flex-grow">
        <a
          href="#"
          className="mr-4 mt-4 block text-gray-300 hover:text-white lg:mt-0 lg:inline-block"
        >
          Docs
        </a>
        <a
          href="#"
          className="mr-4 mt-4 block text-gray-300 hover:text-white lg:mt-0 lg:inline-block"
        >
          Examples
        </a>
        <a
          href="#"
          className="mt-4 block text-gray-300 hover:text-white lg:mt-0 lg:inline-block"
        >
          Blog
        </a>
      </div>
      <div>
        <button className="mt-4 inline-block rounded border border-gray-400 px-4 py-2 text-sm leading-none text-gray-300 hover:bg-gray-300 hover:text-gray-800 lg:mt-0"
        onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  </nav>
  {/* Hero Section */}
    <>
      {/* <Navbar />
      <Header /> */}
      <div className="container mx-auto bg-white p-6">
        <h1 className="mb-6 text-3xl font-bold text-gray-800">Featured Products</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              id={p.id}
              image={p.thumbnail}
              title={p.title}
              price={p.price}
            />
          ))}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  ;
  {/* Footer Section */}
  <footer className="relative z-50 bg-[#191F33]">
    <div className="flex flex-col items-center px-4 py-12">
      <div>
        <a
          className="mb-8 flex items-center justify-center gap-5 text-white"
          href="/"
        >
          <img
            alt="Logo"
            style={{ color: "transparent" }}
            width={50}
            src="https://baitussalam.org/images/logo-2.svg"
          />
          <span className="text-3xl font-semibold tracking-wider">
            Bait-us-Salam
          </span>
        </a>
        <p className="max-w-xl text-center text-lg font-medium text-white">
          Shop Today!
        </p>
      </div>
    </div>
    <div className="bg-[#2E3447]">
      <div className="px-3 py-3 text-center">
        <span className="text-[#767E94]">
          Coded with 💙 by{/* */}
          <a
            href="https://www.linkedin.com/in/abdulbasitprofile/"
            target="_blank"
            className="text-white"
          >
            Abdul Basit{" "}
          </a>
          in Karachi
        </span>
      </div>
    </div>
  </footer>
</>

    )
}
export default Home