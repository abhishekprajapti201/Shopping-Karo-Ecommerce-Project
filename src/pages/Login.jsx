import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Eye,
  EyeOff,
  Mail,
  Lock,
  CheckCircle2,
} from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!formData.password) {
      setError("Please enter your password.");
      return;
    }

    // Demo only: connect your backend login API here.
    setSuccess(
      "Form validated successfully. Connect your login API to continue.",
    );
  };

  const inputWrapperClass =
    "flex items-center border border-[#e7e2da] bg-white transition focus-within:border-[#a48b68]";

  const inputClass =
    "w-full bg-transparent py-4 pl-3 pr-3 text-sm text-[#252522] outline-none placeholder:text-gray-400";

  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <main className="mx-auto grid min-h-[calc(100vh-77px)] max-w-7xl items-center gap-10 px-5 py-10 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-14">
        {/* Image Section */}
        <section className="relative hidden min-h-[620px] overflow-hidden bg-[#e8e0d4] lg:block">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=85"
            alt="ShoppingKaro fashion collection"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/10" />

          <div className="absolute bottom-0 left-0 right-0 p-10 text-white xl:p-14">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#e6d3b8]">
              Welcome to ShoppingKaro
            </p>

            <h1 className="max-w-lg text-4xl font-light leading-tight xl:text-5xl">
              Good style.
              <br />
              Great confidence.
              <br />
              <span className="font-serif italic text-[#e6d3b8]">
                Welcome back.
              </span>
            </h1>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/80">
              Sign in to discover your favorites, manage your orders and enjoy a
              personalized shopping experience.
            </p>
          </div>
        </section>

        {/* Login Form */}
        <section className="mx-auto w-full max-w-lg">
          <div className="mb-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#a48b68]">
              Your ShoppingKaro Account
            </p>

            <h2 className="text-3xl font-light tracking-tight text-[#242420] sm:text-4xl">
              Welcome back
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Enter your details below to sign in to your account.
            </p>
          </div>

          {/* Error */}
          {error && (
            <div
              role="alert"
              className="mb-5 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              {error}
            </div>
          )}

          {/* Success */}
          {success && (
            <div
              role="status"
              className="mb-5 flex items-start gap-2 border border-green-200 bg-green-50 px-4 py-3 text-sm leading-6 text-green-800"
            >
              <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-[#33332f]"
              >
                Email Address
              </label>

              <div className={inputWrapperClass}>
                <Mail size={18} className="ml-3 shrink-0 text-gray-400" />

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputClass}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between gap-3">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-[#33332f]"
                >
                  Password
                </label>

                <Link
                  to="/forgot-password"
                  className="text-xs font-medium text-[#8e7554] transition hover:text-black"
                >
                  Forgot Password?
                </Link>
              </div>

              <div className={inputWrapperClass}>
                <Lock size={18} className="ml-3 shrink-0 text-gray-400" />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className={inputClass}
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="mr-3 text-gray-400 transition hover:text-black"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-3 pt-1">
              <input
                id="remember"
                name="remember"
                type="checkbox"
                checked={formData.remember}
                onChange={handleChange}
                className="h-4 w-4 accent-[#a48b68]"
              />

              <label htmlFor="remember" className="text-sm text-gray-500">
                Remember me
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 bg-[#242420] px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#a48b68]"
            >
              Sign In
              <ArrowRight size={18} />
            </button>
          </form>

          {/* Signup */}
          <p className="mt-7 text-center text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold text-[#8e7554] underline underline-offset-4 transition hover:text-[#242420]"
            >
              Create Account
            </Link>
          </p>

          <p className="mt-8 text-center text-xs leading-5 text-gray-400">
            Your account information is protected according to our privacy
            policy.
          </p>
        </section>
      </main>
    </div>
  );
}
