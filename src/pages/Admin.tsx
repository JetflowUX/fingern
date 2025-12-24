import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdminPanel from "@/components/AdminPanel";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

const Admin = () => {
    const [adminOpen, setAdminOpen] = useState(true);
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login2admin");
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow flex items-center justify-center bg-secondary">
                <div className="container-section text-center py-16">
                    <div className="flex justify-end mb-4">
                        <Button
                            onClick={handleLogout}
                            variant="outline"
                            className="gap-2"
                        >
                            <LogOut className="w-4 h-4" />
                            Logout
                        </Button>
                    </div>
                    <h1 className="text-4xl font-heading font-bold text-primary mb-4">
                        Admin Panel
                    </h1>
                    <p className="text-muted-foreground mb-2">
                        Logged in as: <span className="font-semibold">admin@admin.com</span>
                    </p>
                    <p className="text-muted-foreground mb-8">
                        Manage your website contact details and settings
                    </p>
                    <button
                        onClick={() => setAdminOpen(true)}
                        className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-orange-dark transition-colors"
                    >
                        Open Admin Panel
                    </button>
                </div>
            </main>
            <Footer />
            <AdminPanel isOpen={adminOpen} onClose={() => setAdminOpen(false)} />
        </div>
    );
};

export default Admin;
