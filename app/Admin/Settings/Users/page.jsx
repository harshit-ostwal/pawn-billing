"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import React, { useState } from 'react'
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"


export default function page() {

    const [txtemailid, setTxtemailid] = useState("");
    const [txtpassword, setTxtpassword] = useState("");
    const [txtrole, setTxtrole] = useState("");
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();


    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {

            const resUserExist = await fetch(`${process.env.NEXT_PUBLIC_URL}api/userExists`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ txtemailid }),
            });
    
            const { user } = await resUserExist.json();
    
            if (user) {
                toast({
                    title: "SS SOFTWARE",
                    variant: "destructive",
                    description: "Users Already Exists?",
                })
                router.push("/Admin/Dashboard");
                return;
            }
            
            const res = await fetch(`${process.env.NEXT_PUBLIC_URL}api/users`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ txtemailid, txtpassword, txtrole }),
            });

            router.refresh();

            if (res.ok) {
                router.push("/Admin/Dashboard");
                toast({
                    title: "SS SOFTWARE",
                    description: "Users Data Added Successfully!",
                })
            } else {
                toast({
                    title: "SS SOFTWARE",
                    variant: "destructive",
                    description: "Error While Saving Users Data?",
                })
            }
        } catch (error) {
            toast({
                title: "SS SOFTWARE",
                variant: "destructive",
                description: "Error While Saving Users Data?",
            })
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit} >
                <div className="flex flex-col xl:h-[649px] gap-20 p-6 sm:p-10 md:p-40 overflow-hidden">
                    <div className="font-bold text-2xl sm:text-4xl text-center uppercase">Users</div>
                    <div className="xl:flex grid grid-cols-1 sm:grid-cols-2 xl:flex-row gap-5 sm:gap-10 justify-center">
                        <div className="grid w-full max-w-sm items-center gap-3">
                            <Label htmlFor="txtemailid">Email ID</Label>
                            <Input value={txtemailid} required onChange={(e) => setTxtemailid(e.target.value)} type="email" id="txtemailid" placeholder="Email Id" />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-3">
                            <Label htmlFor="txtpassword">Password</Label>
                            <Input value={txtpassword} required onChange={(e) => setTxtpassword(e.target.value)} type="password" id="txtpassword" placeholder="Password" />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-3">
                            <Label htmlFor="txtrole">Role (Admin / Client)</Label>
                            <Input value={txtrole} required onChange={(e) => setTxtrole(e.target.value)} type="" id="txtrole" placeholder="Role" />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        {isSubmitting ? (
                            <button disabled className='flex items-center hover:scale-105 transition 1s ease-in-out px-20 py-4 sm:px-20 md:py-6 bg-white text-slate-950 font-semibold rounded-lg'>
                                <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                                Please wait
                            </button>
                        ) : (
                            <button type="submit" className='hover:scale-105 transition 1s ease-in-out px-14 py-4 sm:px-20 md:py-6 bg-white text-slate-950 font-semibold rounded-lg'>Save</button>
                        )}
                    </div>
                </div>
            </form>
        </>
    )
}
