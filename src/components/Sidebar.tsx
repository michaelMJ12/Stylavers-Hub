import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Add this import
import {
  Home,
  Upload,
  PlusCircle,
  Puzzle,
  BarChart,
  ListOrdered,
  Store,
  CreditCard,
  ShoppingCart,
  Wrench,
  BookOpen,
  Settings,
  ChevronDown,
} from "lucide-react";
import "../styles/Sidebar.css";

const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [integrateOpen, setIntegrateOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  return (
    <div
      className={`sidebar ${isExpanded ? "expanded" : "collapsed"}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="profile-section">
        <div className="profile-icon">RM</div>
        {isExpanded && <span className="profile-name">Rotimi Michael</span>}
      </div>

      <div className="sidebar-content">
        <ul className="nav-links">
          <li>
            <Link to="/dashboard" className="nav-item-link">
              <Home />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/upgrade" className="nav-item-link">
              <Upload />
              <span>Upgrade</span>
            </Link>
          </li>
          <li>
            <Link to="/create" className="nav-item-link">
              <PlusCircle />
              <span>Create</span>
            </Link>
          </li>

          <li onClick={() => setIntegrateOpen(!integrateOpen)}>
            <Puzzle />
            <span>Integrate</span>
            <ChevronDown className="chevron" />
          </li>
          {integrateOpen && isExpanded && (
            <ul className="dropdown">
              <li><Link to="/integrate/sell-on-social">Sell on Social</Link></li>
              <li><Link to="/integrate/store-drop">Store Drop</Link></li>
              <li><Link to="/integrate/youtube">YouTube</Link></li>
              <li><Link to="/integrate/linktree">Linktree</Link></li>
              <li><Link to="/integrate/discord">Discord</Link></li>
              <li><Link to="/integrate/twitch">Twitch</Link></li>
              <li><Link to="/integrate/tiktok">TikTok</Link></li>
              <li><Link to="/integrate/beacons">Beacons</Link></li>
              <li><Link to="/integrate/onlyfans">OnlyFans</Link></li>
            </ul>
          )}

          <li>
            <Link to="/analytics" className="nav-item-link">
              <BarChart />
              <span>Analytics</span>
            </Link>
          </li>
          <li>
            <Link to="/listing" className="nav-item-link">
              <ListOrdered />
              <span>Listings</span>
            </Link>
          </li>
          <li>
            <Link to="/store" className="nav-item-link">
              <Store />
              <span>Stores</span>
            </Link>
          </li>
          <li>
            <Link to="/payouts" className="nav-item-link">
              <CreditCard />
              <span>Payouts</span>
            </Link>
          </li>
          <li>
            <Link to="/purchases" className="nav-item-link">
              <ShoppingCart />
              <span>My Purchases</span>
            </Link>
          </li>

          <li onClick={() => setToolsOpen(!toolsOpen)}>
            <Wrench />
            <span>Tools & Services</span>
            <ChevronDown className="chevron" />
          </li>
          {toolsOpen && isExpanded && (
            <ul className="dropdown">
              <li><Link to="/tools/promotions">Promotions</Link></li>
              <li><Link to="/tools/pricing-discount">Pricing Discount</Link></li>
              <li><Link to="/tools/tracking-pixels">Tracking Pixels</Link></li>
            </ul>
          )}

          <li>
            <Link to="/learn" className="nav-item-link">
              <BookOpen />
              <span>Learn</span>
            </Link>
          </li>
          <li>
            <Link to="/settings" className="nav-item-link">
              <Settings />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
