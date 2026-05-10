"use client";
import Button from "@/components/button";
import { CountCard  } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Hash } from "lucide-react";
import DashLayout from "@/wrapper/dashLayout";
import { Users } from "lucide-react";
import { CloudUpload } from "lucide-react";
import { WeaklyChart } from "@/components/ui/chart";
import { useEffect, useState } from "react";
import { QuotesAPI } from "@/lib/api";

export default function Dashbaord() {
  const [count, setCount] = useState(0);
  const iconClass = "text-black bg-emerald-300/95 rounded-full p-1";

  useEffect(() => {
    const loadCount = async () => {
      const data = await QuotesAPI.getCount();

      setCount(data.total)
    };

 

    loadCount();
  }, [])

  return (
    <DashLayout>
      <div className="flex justify-between  max-lg:m-7 max-lg:-mt-2 ">
        <div>
          <Heading
            label={"Dashboard"}
            className={
              "text-[1.5rem] font-semibold tracking-wide text-white font-montserrat"
            }
          />
          <p className="text-gray-500/95 capitalize ">
            quote ecosystem, legend activity,{" "}
          </p>
        </div>

       <div className="block max-lg:hidden">
         <Button
          className={
            "p-2 px-3 bg-emerald-400 border text-black rounded-full font-comfortaa hover:bg-emerald-400/95 flex items-center gap-0.5 font-semibold cursor-pointer"
          }
          path={'/admin/add-new-quote'}
        >
          Add Quote
        </Button>
       </div>
      </div>

      {/* total status */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 mt-8 gap-3">
        <CountCard
          name={"Total Uploaded Quotes"}
          icon={<CloudUpload size={45} className={iconClass} />}
          description={count}
        />
        <CountCard
          name={"Total Authors"}
          icon={<Users className={iconClass} size={40} />}
          description={"9"}
        />
        <CountCard
          name={"Total created quote category"}
          icon={<Hash className={iconClass} size={40} />}
          description={"10"}
        />
      </div>

      {/* your writing status */}
      <div className="mt-10">
      <WeaklyChart 
      
      />
      </div>
      
      
    </DashLayout>
  );
}
