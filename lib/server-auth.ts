import { cookies } from 'next/headers';
import { verifyToken } from '@/lib/auth';
import { redirect } from 'next/navigation';

export async function requireAuth() {
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;
  
  if (!token) {
    redirect('/admin/login');
  }
  
  const payload = verifyToken(token) as { id: string, username: string } | null;
  if (!payload) {
    redirect('/admin/login');
  }
  
  return payload;
}
