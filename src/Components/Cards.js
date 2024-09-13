import analysisImage from "../images/analysis-2.svg";
import pencil from "../images/pencil.svg"
import content from "../images/content-2.svg"

function Cards(){
return(
    <section className="second">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="box color">
                        <div className="box-content">
                            <img src={content} alt="Image" />
                            <h4>Content Concept & Strategy</h4>
                            <p>Aenean pharetra magna ac placerat magna vestibulum lectus mauris ultrices eros. Eget
                                aliquet nibh dignissim odio velit mauris.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="box">
                        <div className="box-content">
                            <img src={pencil} alt="pencil" />
                            <h4>Design & Concepts</h4>
                            <p>Aenean pharetra magna ac placerat magna vestibulum lectus mauris ultrices eros. Eget
                                aliquet nibh dignissim odio velit mauris.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="box">
                        <div className="box-content">
                            <img src={analysisImage} alt="Analysis" />
                            <h4>Design & Concepts</h4>
                            <p>Aenean pharetra magna ac placerat magna vestibulum lectus mauris ultrices eros. Eget
                                aliquet nibh dignissim odio velit mauris.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}
 
export default Cards;