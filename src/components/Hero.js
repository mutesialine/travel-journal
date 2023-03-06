import Data from "../Data";
import Card from "./Card";
export default function Hero (){
  const Cards=Data.map((item)=>{
    return(<Card key={item.id}
    {...item}/>)
  })
  return(
    <div className="flex flex-col gap-4">
      {Cards}</div>
  );
}