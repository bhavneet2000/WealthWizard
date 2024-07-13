import React from "react";
import { useAuth } from "../../AuthContext";
import { Navigate, Link } from "react-router-dom";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUserCircle,
    faHome,
    faNewspaper,
    faUsers,
    faSignOutAlt,
    faCalculator,
    faMoneyBillAlt,
} from "@fortawesome/free-solid-svg-icons";

function NewDashboard() {
    const { isAuthenticated, logout } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    return (
        <div className="flex h-screen bg-teal-50">
            <Sidebar logout={logout} />
            <MainContent />
        </div>
    );
}

function Sidebar({ logout }) {
    return (
        <div className="w-1/4 bg-blue-800 text-white flex flex-col">
            <div className="p-6 border-b border-blue-700">
                <h2 className="text-3xl font-bold mb-4">WealthWizard</h2>
            </div>
            <div className="flex-grow p-4">
                <SidebarLink
                    to="/WizPro"
                    icon={
                        <img
                            src="https://res.cloudinary.com/duu6ej0qx/image/upload/v1718276712/coin_a758dr.gif"
                            className="w-8 h-8 mr-3"
                            alt="WizPro"
                        />
                    }
                    text="WizPro"
                />
                <ul className="space-y-4">
                    <SidebarLink to="/profile" icon={<FontAwesomeIcon icon={faUserCircle} />} text="Profile" />
                    <SidebarLink to="/dashboard" icon={<FontAwesomeIcon icon={faHome} />} text="Home" />
                    <SidebarLink to="/forum" icon={<FontAwesomeIcon icon={faUsers} />} text="Community Forum" />
                    <SidebarLink to="/bot" icon={<FontAwesomeIcon icon={faMoneyBillAlt} />} text="WizBot" />
                    <SidebarLink to="/calculate" icon={<FontAwesomeIcon icon={faCalculator} />} text="Financial Calculator" />
                    <SidebarLink to="/news" icon={<FontAwesomeIcon icon={faNewspaper} />} text="News" />
                    <SidebarLink to="/tracker" icon={<FontAwesomeIcon icon={faNewspaper} />} text="Budget Tracker" />
                    <li>
                        <button onClick={logout} className="flex items-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                            <FontAwesomeIcon icon={faSignOutAlt} className="mr-3" />
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

function SidebarLink({ to, icon, text }) {
    return (
        <li>
            <Link to={to} className="flex items-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                {icon}
                <span className="text-xl font-semibold ml-3">{text}</span>
            </Link>
        </li>
    );
}

function MainContent() {
    return (
        <div className="w-3/4 p-10">
            <h2 className="text-4xl text-blue-800 font-bold mb-8 text-center">
                Empower Your Financial Journey with WealthWizard
            </h2>
            <div className="flex space-x-8">
                <ContentCard
                    to="/bot"
                    imgSrc="https://miro.medium.com/v2/resize:fit:1400/1*LaXAkc_NaSiIP-SZCtgzxg.gif"
                    imgAlt="Wizmo"
                    title="Wizmo"
                    description="Your personalized Wealth Wizard."
                    subtext="Financial Wisdom at Your Fingertips!"
                />
                <ContentCard
                    to="/planning"
                    imgSrc="https://cdnl.iconscout.com/lottie/premium/thumb/finance-growth-5591727-4657351.gif"
                    imgAlt="Financial Mastery Zone"
                    title="Financial Mastery"
                    description="Crafting Your Financial Roadmap"
                />
            </div>
        </div>
    );
}

function ContentCard({ to, imgSrc, imgAlt, title, description, subtext }) {
    return (
        <div className="w-1/2 bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            <Link to={to} className="block text-center">
                <img
                    src={imgSrc}
                    alt={imgAlt}
                    className="w-full h-full object-cover mb-4 rounded-lg"
                />
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <p className="font-semibold">{description}</p>
                {subtext && <p className="font-semibold">{subtext}</p>}
            </Link>
        </div>
    );
}

export default NewDashboard;
