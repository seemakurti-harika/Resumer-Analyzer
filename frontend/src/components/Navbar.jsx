import { Menu, Rocket } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    return (

        <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-50">

            <div className="flex items-center justify-between rounded-2xl border border-slate-200/60 bg-white/80 backdrop-blur-xl px-8 py-4 shadow-xl">

                {/* Logo */}

                <div
                    className="flex items-center gap-3 cursor-pointer"
                    onClick={() => navigate("/")}
                >

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">

                        <Rocket size={22} />

                    </div>

                    <div>

                        <h2 className="font-bold text-xl text-slate-900">

                            AI Career Copilot

                        </h2>

                        <p className="text-xs text-slate-500">

                            Career Intelligence

                        </p>

                    </div>

                </div>

                {/* Navigation */}

                <div className="hidden md:flex items-center gap-10 font-medium">

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-600 font-semibold"
                                : "text-slate-600 hover:text-blue-600 transition"
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/analyze"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-600 font-semibold"
                                : "text-slate-600 hover:text-blue-600 transition"
                        }
                    >
                        Analyze
                    </NavLink>

                    <NavLink
                        to="/results"
                        className={({ isActive }) =>
                            isActive
                                ? "text-blue-600 font-semibold"
                                : "text-slate-600 hover:text-blue-600 transition"
                        }
                    >
                        Results
                    </NavLink>

                </div>

                <button
                    onClick={() => navigate("/analyze")}
                    className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-blue-700"
                >
                    Get Started
                </button>

                <button className="md:hidden">

                    <Menu />

                </button>

            </div>

        </nav>

    );

}

export default Navbar;