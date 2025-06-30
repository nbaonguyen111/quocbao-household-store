// app/admin/layout.jsx
import Sidebar from "../../components/sidebar";

export default function AdminLayout({ children }) {
  return (
    
        <div className="flex">
          <Sidebar />
          <div className="ml-64 p-6 w-full">{children}</div>
        </div>
      
  );
}
