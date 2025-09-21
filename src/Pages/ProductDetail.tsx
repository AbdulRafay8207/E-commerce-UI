const ProductDetail = ()=>{
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
        <button className="mt-4 inline-block rounded border border-gray-400 px-4 py-2 text-sm leading-none text-gray-300 hover:bg-gray-300 hover:text-gray-800 lg:mt-0">
          Logout
        </button>
      </div>
    </div>
  </nav>
  {/* Hero Section */}
  <div className="bg-[#F4F4F4]">
    <div className="mx-auto max-w-3xl px-3 py-5 text-center md:py-10">
      <h1 className="text-3xl font-semibold leading-tight text-[#1E1E1E] md:text-[40px]">
        All-in-One E-commerce App
      </h1>
      <h2 className="mt-5 text-lg font-medium text-[#1E1E1E]">
        Discover premium products and enjoy shopping with us. Risk Free
        Shopping!
      </h2>
    </div>
  </div>
  {/* Product Details */}
  <div className="container mx-auto max-w-6xl p-6">
    <div className="flex flex-col overflow-hidden rounded-lg border border-green-200 bg-white lg:flex-row">
      {/* Product Image */}
      <div className="lg:w-1/2">
        <img
          className="h-96 w-full object-cover"
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="Product Image"
        />
      </div>
      {/* Product Info */}
      <div className="p-6 lg:w-1/2">
        <h2 className="mb-4 text-3xl font-bold text-gray-800">Product Title</h2>
        <p className="mb-2 text-sm text-gray-500">Category: Electronics</p>
        <p className="mb-6 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ultrices massa ac auctor vestibulum. Aenean at nisi nec nisl luctus
          lacinia.
        </p>
        <p className="mb-6 text-2xl font-semibold text-gray-800">$99.99</p>
        {/* Buy Now Button */}
        <button className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
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
export default ProductDetail