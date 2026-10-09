
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  UserRound,
  Package,
  Heart,
  MapPin,
  LogOut,
  Pencil,
  Mail,
  Phone,
  CalendarDays,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

export default function UserProfile() {
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);

  const [user, setUser] = useState({
    name: "Abhishek Prajapati",
    email: "abhishek@example.com",
    phone: "+91 98765 43210",
    address: "Varanasi, Uttar Pradesh, India",
  });

  const [form, setForm] = useState(user);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setUser(form);
    setIsEditing(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.clear();
    navigate("/login");
  };

  const menuItems = [
    {
      icon: Package,
      title: "My Orders",
      description: "Track and manage your orders",
      link: "/orders",
    },
    {
      icon: Heart,
      title: "My Wishlist",
      description: "Your saved favorite products",
      link: "/wishlist",
    },
    {
      icon: MapPin,
      title: "My Addresses",
      description: "Manage your delivery addresses",
      link: "/addresses",
    },
    {
      icon: ShieldCheck,
      title: "Account Security",
      description: "Manage your account security",
      link: "/security",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f7f4] px-4 py-10 text-[#17251e] sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">

        {/* Page Heading */}
        <div className="mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#8a7650]">
            ShoppingKaro / MY ACCOUNT
          </p>

          <h1 className="text-3xl font-semibold sm:text-4xl">
            My Profile
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Manage your personal information and account preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

          {/* Profile Card */}
          <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#e9e4d7] text-3xl font-semibold text-[#243c2e]">
                {user.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase()}
              </div>

              <h2 className="mt-4 text-xl font-semibold">
                {user.name}
              </h2>

              <p className="mt-1 break-all text-sm text-gray-500">
                {user.email}
              </p>

              <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                <ShieldCheck size={14} />
                Account Profile
              </span>
            </div>

            <div className="my-6 border-t border-gray-100" />

            <nav className="space-y-2">
              <Link
                to="/profile"
                className="flex items-center gap-3 rounded-xl bg-[#17251e] px-4 py-3 text-sm font-medium text-white"
              >
                <UserRound size={18} />
                My Profile
              </Link>

              {menuItems.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.title}
                    to={item.link}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-sm text-gray-600 transition hover:bg-gray-50 hover:text-[#17251e]"
                  >
                    <span className="flex items-center gap-3">
                      <Icon size={18} />
                      {item.title}
                    </span>

                    <ChevronRight size={16} />
                  </Link>
                );
              })}
            </nav>

            <button
              type="button"
              onClick={handleLogout}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-red-100 px-4 py-3 text-sm font-medium text-red-600 transition hover:bg-red-50"
            >
              <LogOut size={18} />
              Logout
            </button>
          </aside>

          {/* Main Content */}
          <section className="space-y-6 lg:col-span-2">

            {/* Personal Information */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-6 flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-xl font-semibold">
                    Personal Information
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    Your basic account details.
                  </p>
                </div>

                {!isEditing && (
                  <button
                    type="button"
                    onClick={() => {
                      setForm(user);
                      setIsEditing(true);
                    }}
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-50"
                  >
                    <Pencil size={15} />
                    Edit
                  </button>
                )}
              </div>

              <form onSubmit={handleSave}>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Full Name
                    </label>

                    <div className="relative">
                      <UserRound
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        disabled={!isEditing}
                        required
                        className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-3 text-sm outline-none focus:border-[#8a7650] disabled:bg-gray-50 disabled:text-gray-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Email Address
                    </label>

                    <div className="relative">
                      <Mail
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        disabled={!isEditing}
                        required
                        className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-3 text-sm outline-none focus:border-[#8a7650] disabled:bg-gray-50 disabled:text-gray-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Phone Number
                    </label>

                    <div className="relative">
                      <Phone
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-3 text-sm outline-none focus:border-[#8a7650] disabled:bg-gray-50 disabled:text-gray-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Address
                    </label>

                    <div className="relative">
                      <MapPin
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className="w-full rounded-xl border border-gray-200 py-3 pl-10 pr-3 text-sm outline-none focus:border-[#8a7650] disabled:bg-gray-50 disabled:text-gray-600"
                      />
                    </div>
                  </div>
                </div>

                {isEditing && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    <button
                      type="submit"
                      className="rounded-xl bg-[#17251e] px-6 py-3 text-sm font-medium text-white hover:bg-[#263d30]"
                    >
                      Save Changes
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setForm(user);
                        setIsEditing(false);
                      }}
                      className="rounded-xl border border-gray-200 px-6 py-3 text-sm font-medium hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </form>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Link
                to="/orders"
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-[#8a7650]"
              >
                <Package size={25} className="text-[#8a7650]" />
                <h3 className="mt-4 font-semibold">My Orders</h3>
                <p className="mt-1 text-sm text-gray-500">
                  View your order history and status.
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium">
                  View Orders
                  <ChevronRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </span>
              </Link>

              <Link
                to="/wishlist"
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-[#8a7650]"
              >
                <Heart size={25} className="text-[#8a7650]" />
                <h3 className="mt-4 font-semibold">My Wishlist</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Find the products you saved.
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium">
                  View Wishlist
                  <ChevronRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </div>

            {/* Account Note */}
            <div className="flex gap-3 rounded-2xl border border-[#e7dfce] bg-[#f1eee6] p-5">
              <CalendarDays
                size={22}
                className="shrink-0 text-[#8a7650]"
              />

              <div>
                <h3 className="font-medium">Your ShoppingKaro Account</h3>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Keep your contact details updated for a smoother
                  shopping and delivery experience.
                </p>
              </div>
            </div>

          </section>
        </div>
      </div>
    </div>
  );
}
