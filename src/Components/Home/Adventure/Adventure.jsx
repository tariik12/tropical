import './adventure.css'
const adventures = [
    {
        name:"jwa",
        image:'https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
        text:'Far North Queensland is rich with Indigenous traditions, and a confluence of cultures brings together a striking blend of art, language, dance, food and ceremony.'
    },
    {
        name:"Amir",
        image:'https://images.unsplash.com/photo-1483909796554-bb0051ab60ad?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
        text:'On this educational excursion, you discover similarities in Aboriginal culture as well as vast differences among the Kuku Yalanji and Mandingalbay Yidinji through talks, walks and fun activities.'
    },
    {
        name:"Gey",
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXFdzNuYmTOSUeoysphy9D87lIqd5m0kUU5g&usqp=CAU',
        text:'Learn how Traditional Owners communicate in a fading tongue, catch your own seafood under the instruction of two Aboriginal brothers, and spend the night camping in the company of Indigenous elders.'
    }
]

const listData = [
    {
        text:'Authentic interactions with'
    },
    {
        text:'Authentic interactions with'
    },
    {
        text:'Authentic interactions with'
    },
]

const Adventure = () => {
    return (
        <div className='adventure'>
           <div>
           {
            adventures.map(({name,text, image}) =>
            <div key={name}>
                <div className='adventure text_huf'>

<img className='adventure_image' src={image} alt="" />
<h4>{name}</h4>
                </div>
<p className='text_huf'>{text}</p>
            </div>)
           } 
           </div>
           <div>
<h1>Tropical Adventure
for Students.</h1>
<h5>Student Tropical Vacation: Relax and Recharge</h5>
{
    listData.map(({text}) =><li key={text}> {text}</li>)
}
<button>explore more</button>
           </div>
        </div>
    );
};

export default Adventure;