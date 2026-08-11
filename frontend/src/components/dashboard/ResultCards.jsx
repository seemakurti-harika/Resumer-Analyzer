import {
    Award,
    Brain,
    AlertCircle,
    Star
} from "lucide-react";

const cards = [

{
title:"ATS Score",
value:"92%",
icon:<Award size={28}/>
},

{
title:"Skill Match",
value:"87%",
icon:<Brain size={28}/>
},

{
title:"Missing Skills",
value:"3",
icon:<AlertCircle size={28}/>
},

{
title:"Recruiter Rating",
value:"4.8",
icon:<Star size={28}/>
}

];

function ResultCards(){

return(

<div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

{cards.map((card,index)=>(

<div
key={index}
className="bg-white rounded-3xl shadow-lg p-6 hover:-translate-y-2 transition duration-300"
>

<div className="text-blue-600">

{card.icon}

</div>

<h3 className="mt-5 text-slate-500">

{card.title}

</h3>

<p className="text-4xl font-bold mt-2">

{card.value}

</p>

</div>

))}

</div>

);

}

export default ResultCards;