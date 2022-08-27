import type { NextPage } from "next";
import { DreamTop } from "../components/dreamwatches/DreamTop";
import { DreamWatch } from "../components/dreamwatches/DreamWatch";



const dreamwatches: NextPage = () => {
  return (
    <div className="bg-gradient-to-b from-stone-500 via-gray-400 to-slate-600 h-full">
      <DreamTop/>
      <DreamWatch/>
    </div>
    )
  }
export default dreamwatches;