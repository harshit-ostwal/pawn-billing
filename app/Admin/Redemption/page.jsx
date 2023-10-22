"use client"
import { DatePicker } from "@/components/ui/DateTimePicker"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import React, { useState } from 'react'
import { useToast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"


export default function page() {

  const [txtcustomerid, settxtcustomerid] = useState("");
  const [txtcustomername, setTxtcustomername] = useState("");
  const [txtsno, setTxtsno] = useState("");
  const [txtitemname, settxtitemname] = useState("");
  const [txtwt, setTxtwt] = useState("");
  const [txtamount, setTxtamount] = useState("");
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}api/redemption`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ txtcustomerid, txtcustomername, txtsno, txtitemname, txtwt, txtamount }),
      });

      router.refresh();

      if (res.ok) {
        router.push("/");
        toast({
          title: "SS SOFTWARE",
          description: "Redemption Data Added Successfully!",
        })
      } else {
        toast({
          title: "SS SOFTWARE",
          variant: "destructive",
          description: "Error While Saving Redemption Data?",
        })
      }
    } catch (error) {
      toast({
        title: "SS SOFTWARE",
        variant: "destructive",
        description: "Error While Saving Redemption Data?",
      })
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
     <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-20 xl:h-[649px] p-6 sm:p-10 md:p-20 overflow-hidden">
          <div className="font-bold text-2xl sm:text-4xl text-center uppercase">Redemption</div>
          <div className="xl:flex grid grid-cols-1 sm:grid-cols-2 xl:flex-row gap-5 sm:gap-10 justify-center">
            <div className="grid w-full max-w-sm items-center gap-3">
              <Label htmlFor="txtcustomerid">Customer ID</Label>
              <Input value={txtcustomerid} required onChange={(e) => settxtcustomerid(e.target.value)} type="text" id="txtcustomerid" placeholder="Customer ID" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-3">
              <Label htmlFor="txtcustomername">Customer ID</Label>
              <Input value={txtcustomername} required onChange={(e) => setTxtcustomername(e.target.value)} type="text" id="txtcustomername" placeholder="Customer Name" />
            </div>
            {/* <div className="grid w-full max-w-sm items-center gap-3">
              <Label htmlFor="">Date</Label>
              <DatePicker />
            </div> */}
          </div>
          <div className="xl:flex grid grid-cols-1 sm:grid-cols-2 xl:flex-row gap-5 sm:gap-10 justify-center">
            <div className="grid w-full max-w-sm items-center gap-3">
              <Label htmlFor="txtsno">S.No</Label>
              <Input value={txtsno} required onChange={(e) => setTxtsno(e.target.value)} type="text" id="txtsno" placeholder="S.No" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-3">
              <Label htmlFor="txtitemname">Item Name</Label>
              <Input value={txtitemname} required onChange={(e) => settxtitemname(e.target.value)} type="text" id="txtitemname" placeholder="Item Name" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-3">
              <Label htmlFor="txtwt">Net Weight</Label>
              <Input value={txtwt} required onChange={(e) => setTxtwt(e.target.value)} type="text" id="txtnetweight" placeholder="Net Weight" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-3">
              <Label htmlFor="txtamount">Amount</Label>
              <Input value={txtamount} required onChange={(e) => setTxtamount(e.target.value)} type="text" id="txtamount" placeholder="Amount" />
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
