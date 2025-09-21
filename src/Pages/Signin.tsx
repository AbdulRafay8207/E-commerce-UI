import { useState } from "react"
import { useNavigate } from "react-router"

interface ErrorType {
  name?: string
  email?: string
  password?: string
  confirmPassword?: string
}

const Signin = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({ name: "", email: "", password: "", confirmPassword: "",
  })
  const [error, setError] = useState<ErrorType>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    let newErrors: ErrorType = {}
    if (data.name.length < 3) {
      newErrors.name = "Name cannot be this small"
    }
    if (!data.email.includes("@") || !data.email.includes(".")) {
      newErrors.email = "Invalid email address"
    }
    if (!data.password) {
        newErrors.password = "Invalid Password"
    }
    if (data.confirmPassword !== data.password) {
      newErrors.confirmPassword = "Passwords didn't match";
    }

    setError(newErrors)

    if (Object.keys(newErrors).length === 0) {
      console.log("Data :", data);
      sessionStorage.setItem("isLoggedIn", "true");
      navigate("/home");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side: Signup Form */}
      <div className="flex w-full flex-col justify-center bg-white px-6 py-12 lg:w-1/2 lg:px-12">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-10 w-auto"
            src="https://baitussalam.org/images/logo-2.svg"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign up for your account
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  value={data.name}
                  type="text"
                  autoComplete="name"
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {error.name && <p className="text-red-500 text-sm">{error.name}</p>}
              </div>
            </div>
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  value={data.email}
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {error.email && <p className="text-red-500 text-sm">{error.email}</p>}
              </div>
            </div>
            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  onChange={(e) => setData({ ...data, password: e.target.value })}
                  value={data.password}
                  type="password"
                  autoComplete="current-password"
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {error.password && <p className="text-red-500 text-sm">{error.password}</p>}
              </div>
            </div>
            {/* Confirm Password Field */}
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <div className="mt-1">
                <input
                  id="confirm-password"
                  name="confirm-password"
                  onChange={(e) => setData({ ...data, confirmPassword: e.target.value })}
                  value={data.confirmPassword}
                  type="password"
                  autoComplete="new-password"
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                {error.confirmPassword && (
                  <p className="text-red-500 text-sm">{error.confirmPassword}</p>
                )}
              </div>
            </div>
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Sign up
              </button>
            </div>
          </form>
          {/* Additional Link */}
          <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account?
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign in
            </a>
          </p>
        </div>
      </div>
      {/* Right side */}
      <div className="hidden items-center justify-center bg-indigo-100 lg:flex lg:w-1/2">
        <div className="p-8 text-center">
          <h3 className="mb-6 text-2xl font-bold text-gray-900">Why Join Us?</h3>
          <p className="mb-4 text-lg text-gray-700">
            Experience the best ecommerce app for all your needs.
          </p>
          <p className="mb-4 text-lg text-gray-700">
            Get exclusive discounts and offers on your favorite products.
          </p>
          <p className="mb-4 text-lg text-gray-700">
            Fast and secure checkout process tailored for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
