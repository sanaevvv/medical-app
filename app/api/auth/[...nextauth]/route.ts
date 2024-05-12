import { authOptions } from '@/lib/auth';
import NextAuth from 'next-auth';

const handler = NextAuth(authOptions);

//  GET と POST を同じハンドラーにマッピングする
export { handler as GET, handler as POST };
