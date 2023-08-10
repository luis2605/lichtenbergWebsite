import React ,{useState, useEffect} from 'react'
import classes from './wieso.module.css'
import marker from '../../assets/img/marker.gif'
import right from "../../assets/img/right.gif"
import down from "../../assets/img/down.gif"

const Wieso = () => {

  const [expanded, setExpanded] = useState(false)
  const [imageSrc, setImageSrc] = useState(down);


  const toggleExpanded = () => {
    setExpanded(!expanded)
  }
  
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setImageSrc(right);
      } else {
        setImageSrc(down);
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={classes["wieso-container"]}>
      
      <h2>Wieso Lichtenberg ?</h2>
      <div className={classes["wieso-text"]}>
      <div className={classes["wieso-points"]}>
        {/* <img src={marker} alt="yellow dots" className={classes.yellow}></img> */}
        <p>Es gibt viele <span  className={classes.marked} >Gründe</span>, warum es toll ist, in <span  className={classes.marked} >Lichtenberg</span> zu wohnen. Eine der Hauptattraktionen ist die landschaftliche <span  className={classes.marked} > Schönheit</span>  der Region. Lichtenberg liegt in einer malerischen Umgebung,umgeben von Hügeln und Wäldern. Diese Landschaft bietet eine Fülle von <span  className={classes.marked} >Freizeitmöglichkeiten</span> wie Wandern und Radfahren...</p>
      </div>

      {!expanded && <div className={classes["wieso-more"]}>
     <img onClick={toggleExpanded} className={classes["see-more"]} src={imageSrc} alt="example" />
        
      </div>}
     { expanded && <> <div className={classes["wieso-points"]}>
        {/* <img src={marker} alt="yellow dots" className={classes.yellow}></img> */}
        <p>Eine weitere Stärke von Lichtenberg ist seine <span  className={classes.marked} >Gemeinschaft</span>. Die Einwohner von Lichtenberg sind freundlich und einladend. Das Dorf ist eng verbunden und es gibt viele <span  className={classes.marked} >Aktivitäten</span>  und <span  className={classes.marked} >Veranstaltungen</span>, bei denen man sich treffen und kennenlernen kann. Es gibt viele lokale <span  className={classes.marked} >Vereine und Organisationen</span>, die sich für die Belange des Dorfs engagieren und den <span  className={classes.marked} >Zusammenhalt fördern</span>.</p>
      </div>
      <div className={classes["wieso-points"]}>
        {/* <img src={marker} alt="yellow dots" className={classes.yellow}></img> */}
        <p>Schließlich ist Lichtenberg auch ein <span  className={classes.marked} >großartiger</span>  Ort zum Arbeiten und leben. Es gibt eine Vielzahl von Industrie- und Gewerbegebieten in der Nähe, sowie eine gute <span  className={classes.marked} >Anbindung an das Verkehrsnetz</span>. Lichtenberg bietet somit gute Bedingungen für das Wachstum von Unternehmen und die Schaffung von <span  className={classes.marked} >Arbeitsplätzen</span>.</p>
      </div>
  
      <div className={classes["wieso-points"]}>
        {/* <img src={marker} alt="yellow dots" className={classes.yellow}></img> */}
        <p>Zusammenfassend bietet Lichtenberg eine Kombination aus <span  className={classes.marked} >natürlicher Schönheit</span>, starkem <span  className={classes.marked} >Gemeinschaftsgeist</span>, guter <span  className={classes.marked} >Infrastruktur </span> und <span  className={classes.marked} > wirtschaftlichem Potenzial</span>. All diese Faktoren machen Lichtenberg zu einem großartigen Ort <span  className={classes.marked} >zum Leben und Arbeiten</span>.</p>
      </div>
      {/* {expanded && <div className={classes["wieso-more"]}>
      <img onClick={toggleExpanded} src={imageSrc} alt="example" />
      </div>} */}
       </>}
  
      </div>
      {/* <div className={classes["wieso-image"]}></div> */}
      
    </div>
  )
}

export default Wieso