import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { ShoppingCart, DollarSign, Package, Users } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import StatCard from '@/components/dashboard/StatCard';
import ProductsTable from '@/components/dashboard/ProductsTable';

const Index = () => {
  const { data: stats } = useQuery({
    queryKey: ['dashboard-stats'],
    queryFn: async () => {
      const [orders, products, customers] = await Promise.all([
        supabase.from('orders').select('total_amount'),
        supabase.from('products').select('stock'),
        supabase.from('customers').select('id'),
      ]);

      const totalRevenue = orders.data?.reduce((sum, order) => sum + Number(order.total_amount), 0) || 0;
      const totalStock = products.data?.reduce((sum, product) => sum + product.stock, 0) || 0;

      return {
        totalOrders: orders.data?.length || 0,
        totalRevenue,
        totalStock,
        totalCustomers: customers.data?.length || 0,
      };
    },
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      <Header />
      
      <main className="ml-64 pt-16 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <StatCard
            title="Total Orders"
            value={stats?.totalOrders || 0}
            icon={ShoppingCart}
          />
          <StatCard
            title="Revenue"
            value={`$${stats?.totalRevenue || 0}`}
            icon={DollarSign}
          />
          <StatCard
            title="Products in Stock"
            value={stats?.totalStock || 0}
            icon={Package}
          />
          <StatCard
            title="Total Customers"
            value={stats?.totalCustomers || 0}
            icon={Users}
          />
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Recent Products</h2>
          <ProductsTable />
        </div>
      </main>
    </div>
  );
};

export default Index;