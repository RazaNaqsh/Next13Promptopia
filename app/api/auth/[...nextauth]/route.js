import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

import { connectToDB } from "@utils/db";

const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
	],
	async session({ session }) {},
	async signIn({ profile }) {
		try {
			await connectToDB();
		} catch (err) {
			console.log(err);
		}
	},
});

export { handler as GET, handler as POST };
