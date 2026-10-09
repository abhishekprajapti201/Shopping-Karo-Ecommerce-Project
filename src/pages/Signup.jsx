import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  User,
  Mail,
  Phone,
  Lock,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    terms: false,
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

    if (formData.name.trim().length < 2) {
      setError("Please enter your full name.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (formData.phone && !/^[0-9]{10}$/.test(formData.phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!formData.terms) {
      setError("Please accept the Terms & Conditions.");
      return;
    }

    // Frontend demo only. Connect your backend API here.
    setSuccess(
      "Form validated successfully! Connect your signup API to create your account.",
    );
  };

  const inputClass =
    "w-full bg-transparent py-3.5 pl-11 pr-11 text-sm text-[#252522] outline-none placeholder:text-gray-400";

  const inputWrapperClass =
    "flex items-center border border-[#e7e2da] bg-white transition focus-within:border-[#a48b68]";

  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <main className="mx-auto grid min-h-[calc(100vh-77px)] max-w-7xl items-center gap-10 px-5 py-10 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-14">
        {/* Left Image Section */}
        <section className="relative hidden min-h-[650px] overflow-hidden bg-[#e8e0d4] lg:block">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=85"
            alt="ShoppingKaro fashion collection"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/10" />

          <div className="absolute bottom-0 left-0 right-0 p-10 text-white xl:p-14">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#e6d3b8]">
              The ShoppingKaro Experience
            </p>

            <h1 className="max-w-lg text-4xl font-light leading-tight xl:text-5xl">
              Your style.
              <br />
              Your story.
              <br />
              <span className="font-serif italic text-[#e6d3b8]">
                Your ShoppingKaro.
              </span>
            </h1>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/80">
              Discover timeless essentials, refined details and pieces that make
              every day feel special.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="mx-auto w-full max-w-lg">
          <div className="mb-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#a48b68]">
              Join ShoppingKaro
            </p>

            <h2 className="text-3xl font-light tracking-tight text-[#242420] sm:text-4xl">
              Create your account
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Sign up to explore our collection and enjoy a more personal
              shopping experience.
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div
              role="alert"
              className="mb-5 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              {error}
            </div>
          )}

          {/* Success Message */}
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
            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-[#33332f]"
              >
                Full Name <span className="text-red-500">*</span>
              </label>

              <div className={inputWrapperClass}>
                <User className="ml-3 h-[18px] w-[18px] shrink-0 text-gray-400" />

                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={inputClass}
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-[#33332f]"
              >
                Email Address <span className="text-red-500">*</span>
              </label>

              <div className={inputWrapperClass}>
                <Mail className="ml-3 h-[18px] w-[18px] shrink-0 text-gray-400" />

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

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-medium text-[#33332f]"
              >
                Phone Number
                <span className="ml-1 text-xs font-normal text-gray-400">
                  (Optional)
                </span>
              </label>

              <div className={inputWrapperClass}>
                <Phone className="ml-3 h-[18px] w-[18px] shrink-0 text-gray-400" />

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  maxLength={10}
                  value={formData.phone}
                  onChange={(e) => {
                    const value = e.target.value
                      .replace(/\D/g, "")
                      .slice(0, 10);
                    setFormData((prev) => ({ ...prev, phone: value }));
                    setError("");
                    setSuccess("");
                  }}
                  placeholder="10-digit mobile number"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-[#33332f]"
              >
                Password <span className="text-red-500">*</span>
              </label>

              <div className={inputWrapperClass}>
                <Lock className="ml-3 h-[18px] w-[18px] shrink-0 text-gray-400" />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Minimum 8 characters"
                  className={inputClass}
                  minLength={8}
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

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-medium text-[#33332f]"
              >
                Confirm Password <span className="text-red-500">*</span>
              </label>

              <div className={inputWrapperClass}>
                <Lock className="ml-3 h-[18px] w-[18px] shrink-0 text-gray-400" />

                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="new-password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter your password"
                  className={inputClass}
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  aria-label={
                    showConfirmPassword
                      ? "Hide confirm password"
                      : "Show confirm password"
                  }
                  className="mr-3 text-gray-400 transition hover:text-black"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-3 pt-1">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                checked={formData.terms}
                onChange={handleChange}
                className="mt-1 h-4 w-4 accent-[#a48b68]"
                required
              />

              <label
                htmlFor="terms"
                className="text-sm leading-6 text-gray-500"
              >
                I agree to the{" "}
                <Link
                  to="/terms"
                  className="font-medium text-[#8e7554] underline underline-offset-4"
                >
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link
                  to="/privacy-policy"
                  className="font-medium text-[#8e7554] underline underline-offset-4"
                >
                  Privacy Policy
                </Link>
                .
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 bg-[#242420] px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[#a48b68]"
            >
              Create Account
              <ArrowRight size={18} />
            </button>
          </form>

          {/* Login Link */}
          <p className="mt-7 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-[#8e7554] underline underline-offset-4 transition hover:text-[#242420]"
            >
              Sign In
            </Link>
          </p>

          <p className="mt-8 text-center text-xs leading-5 text-gray-400">
            Your personal information is handled according to our privacy
            policy.
          </p>
        </section>
      </main>
    </div>
  );
}
