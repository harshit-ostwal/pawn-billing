"use client"
import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useToast } from "@/components/ui/use-toast"
import Loader from "@/public/images/Loader.svg"
import Image from 'next/image';


export default function page() {
  const [data, setData] = useState([]);
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}api/redemption`, {
          method: "GET"
        });

        if (res.ok) {
          const result = await res.json();
          setData(result.Redemption);
          setLoading(false);
          toast({
            title: "SS SOFTWARE",
            description: "Data Loaded Successfully!",
          });
        } else {
          toast({
            title: "SS SOFTWARE",
            variant: "destructive",
            description: "Error While Loading Data?",
          });
        }
      } catch (error) {
        toast({
          title: "SS SOFTWARE",
          variant: "destructive",
          description: "Error While Loading Data?",
        });
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className='xl:h-[649px] items-center flex justify-center'>
      {loading ? (
        <div>
          <Image
            src={Loader}
            width={32}
            height={32}
            className="animate-spin ease-linear"
            alt="Loader"
          />
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold text-lg text-foreground">Customer ID</TableHead>
              <TableHead className="font-bold text-lg text-foreground">Customer Name</TableHead>
              <TableHead className="font-bold text-lg text-foreground">Sno</TableHead>
              <TableHead className="font-bold text-lg text-foreground">Item Name</TableHead>
              <TableHead className="font-bold text-lg text-foreground">Weight</TableHead>
              <TableHead className="font-bold text-lg text-foreground">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item._id}>
                <TableCell>{item.txtcustomerid}</TableCell>
                <TableCell>{item.txtcustomername}</TableCell>
                <TableCell>{item.txtsno}</TableCell>
                <TableCell>{item.txtitemname}</TableCell>
                <TableCell>{item.txtwt}</TableCell>
                <TableCell>{item.txtamount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}