import '../Css/Ourteam.css'
import face1 from '../Images/sourav.jpg';
import face2 from '../Images/dishapic.jpg';

function Ourteam() {
    const ourteamInfo = [
        {
            image:[face1],
            team_member:"Sourav Basak ",
            team_member_role:"CTO",
            team_member_description: "Empowering minds, shaping futures – Synthosphere Academy's courses redefine education in the age of synthetic intelligence"
        },
        {
        image:[face2],
        team_member:"Dipan Das",
        team_member_role:" COO & Trainer",
        team_member_description: "Join us in the future of technology with this Academy's visionary courses, driving innovation and progress forward."
        }
       
      
       
    ];
     const renderteam=(card,index)=>{
        return(
            <article className='grid-body text-center teamcard' key={index}>
                <img className="rounded-circle shadow-1-strong mb-4"
                            src={card.image} alt="avatar"
                            style={{ width: "44%" }} />
                             <h5 className="mb-3 teamname">{card.team_member}</h5>
                        <p className='teamrole'>
                            {card.team_member_role}
                        </p>
                        <p className="text-muted teamquote">
                            <i className="fa fa-quote-left pe-2"></i>
                            {card.team_member_description}
                        </p>
                </article>  
        )
     }
    return (
        <div style={{backgroundColor:"rgba(244, 238, 238, 0.975)"}}>
            <div className="container py-5">
                <h4 className='display-4 text-center mt-5 teamheading'>Our team is the best for the academy</h4>
                <main className="grid team mt-3">
                 {ourteamInfo.map(renderteam)}
   
                </main>

            </div>
        </div>
    )
}

export default Ourteam
