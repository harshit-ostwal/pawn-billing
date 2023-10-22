"use client"
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast"


export default function page() {

  const [txtemailid, setTxtemailid] = useState("");
  const [txtpassword, setTxtpassword] = useState("");
  const { toast } = useToast();

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        txtemailid, txtpassword, redirect: false,
      })
      router.refresh();

      if (res.ok) {
        router.push("/Admin/Dashboard");
        toast({
          title: "SS SOFTWARE",
          description: "Sign In Successfully!",
        })
      }
      else {
        toast({
          title: "SS SOFTWARE",
          variant: "destructive",
          description: "Incorrect Email Id Or Password?",
        })
      }
    } catch (error) {
      toast({
        title: "SS SOFTWARE",
        variant: "destructive",
        description: "Error While Sign In?",
      })
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            onChange={e => setTxtemailid(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            onChange={e => setTxtpassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
