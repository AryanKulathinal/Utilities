import "../styles/Navbar.css";

interface NavbarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navbar = ({ activeTab, onTabChange }: NavbarProps) => {
  const tabs = ["Clock", "To-do", "Stopwatch","Counter"];
  return (
    <nav className="navbar">
      {tabs.map((tab) => (
        <button key={tab} onClick={() => onTabChange(tab)} className={tab === activeTab ? "active" : ""}>
          {tab}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
