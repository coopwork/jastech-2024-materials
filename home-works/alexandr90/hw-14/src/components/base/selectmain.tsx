
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import settings from "../images/settings.png"



function Selectmain() {

	return (
			<>
           
			<Select>
  <SelectTrigger className="w-[60px] border-none  text-chart-2  text-sm flex flex-col items-center" > <img src={settings} alt="" className="h-6 w-  rounded-xl flex justify-center items-center mt-2"/>
    <SelectValue placeholder="Settings" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light" className=" text-chart-2 text-sm mt-1" >Settngs</SelectItem>
    <SelectItem value="dark" className=" text-chart-2 text-sm mt-1" >Settngs</SelectItem>
    <SelectItem value="system" className=" text-chart-2 text-sm mt-1">Settngs</SelectItem>
  </SelectContent>
</Select>
			</>
	)
}

export default Selectmain
