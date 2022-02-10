import '../css/home_page.css';
import Form from './FormBuilder/Form_component';


function HomePage(props) {

   return (
      <div>
         <div className="information_card">
            <h1><b>FIS Alpine Ski</b> World Cup</h1>
            <h4>Rules</h4>
            <p>Competitors attempt to achieve the best time in four disciplines: slalom, giant slalom, super G, and downhill.
               The fifth event, the combined, employs the downhill and slalom.
               The World Cup originally included only slalom, giant slalom, and downhill races.
               Combined events (calculated using results from selected downhill and slalom races) were included starting with the 1974-75 season,
               while the Super G was added for the 1982-83 season. The current scoring system was implemented in the 1991-92 season.
               For every race points are awarded to the top 30 finishers: 100 points to the winner, 80 for second, 60 for third, winding down to 1 point for 30th place.
               The racer with the most points at the end of the season in mid-March wins the Cup, with the trophy consisting of a 9 kilogram crystal globe.
               Sub-prizes are also awarded in each individual race discipline, with a smaller 3.5 kg crystal globe.
               The World Cup is held annually, and is considered the premier competition for alpine ski racing after the quadrennial Winter Olympics.
               Many consider the World Cup to be a more valuable title than the Olympics or the biennial World Championships,
               since it requires a competitor to ski at an extremely high level in several disciplines throughout the season, and not just in one race.
               Races are hosted primarily at ski resorts in the Alps in Europe, with regular stops in Scandinavia,
               North America, and east Asia, but a few races have also been held in the Southern Hemisphere.
               World Cup competitions have been hosted in 25 different countries around the world: Andorra, Argentina, Australia, Austria, Bosnia and Herzegovina, Bulgaria,
               Canada, Croatia, Czech Republic, Finland, France, Germany, Italy, Japan, New Zealand, Norway, Poland, Russia, Slovakia, Slovenia, South Korea, Spain, Sweden, Switzerland, and the United States. 
               Lower competitive circuits include the NorAm Cup in North America and the Europa Cup in Europe.</p>
         </div>

         <Form />
      </div>
   )
}

export default HomePage;