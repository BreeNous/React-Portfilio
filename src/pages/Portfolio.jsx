import Card from "../components/Card.jsx"
import ComingSoon from "../components/ComingSoon.jsx"

function Portfolio() {
    
    return(
        
        <div className="flex flex-wrap h-full justify-center items-center">
            <Card src="../assets/jeans-vid.mp4" type="video/mp4" link="https://frenzie24.github.io/jeans/" h2="Example 1" h3="Cool"/>
            <Card src="../assets/weather-vid.mp4" type="video/mp4" link="https://breenous.github.io/Weather-Dashboard" h2="Example 2" h3="Sick"/>
            <Card src="../assets/blog-vid.mp4" type="video/mp4" link="https://breenous.github.io/Personal-Blog/index.html" h2="Example 3" h3="Awesome"/>
            <Card src="../assets/noteTaker-vid.mp4" type="video/mp4" link="https://breenous.github.io/Note-Taker/" h2="Example 4" h3="Rad"/>
            <ComingSoon src="../assets/coming-soon.jpg" alt="coming soon" h2="Coming soon" h3="TBD"/>
            <ComingSoon src="../assets/coming-soon.jpg" alt="coming soon" h2="Coming soon" h3="TBD"/>
        </div>
        
    );
}

export default Portfolio