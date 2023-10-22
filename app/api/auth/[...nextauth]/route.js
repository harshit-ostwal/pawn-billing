import connectMongoDB from "@/lib/mongodb";
import Users from "@/models/users";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials) {
                const { txtemailid, txtpassword } = credentials;

                try {
                    await connectMongoDB();
                    const user = await Users.findOne({ txtemailid });

                    if(!user)
                    {
                        return null;
                    }

                    const PassMatch = await bcrypt.compare(txtpassword , user.txtpassword);

                    if(!PassMatch)
                    {
                        return null;
                    }

                    return user;
                } catch (error) {

                }
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/SignIn",
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };