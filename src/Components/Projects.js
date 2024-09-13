function Projects() {
    return (
        <section className="container-fluid Eight">
            <div className="row Eight-content">
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="top-images">
                        <img src={require("../images/img00.png")} alt="img" style={{ marginTop: "26px" }} />
                    </div>
                    <div className="bottom-images">
                        <img src={require("../images/img02.png")} alt="img" />
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="top-images">
                        <img src={require("../images/img01.png")} alt="img" />
                    </div>
                    <div className="bottom-images">
                        <img src={require("../images/img03.png")} alt="img" />
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12">
                    <div className="sidecontent-eight">
                        <h1>Clients with projects proudly crafted by us.</h1>
                        <p>Aenean sed adipiscing diam donec. Est placerat in egestas erat. Cras fermentum odio eu feugiat
                            pretium nibh ipsum consequat. Enim eu egestas pretium aenean pharetra magna ac placerat. Lacus
                            luctus accumsan tortor posuere.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
