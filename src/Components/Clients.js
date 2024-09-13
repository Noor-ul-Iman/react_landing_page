function Clients(){
return (
    <section className="container-fluid seventh">
    <div className="row">
        <div className="col-md-5 left-content">
            <h1>
                We are trusted by more than 3600+ clients.
            </h1>
            <p>Pellentesque habitant morbi tristique senectus et netus et. Accumsan lacus vel facilisis volutpat est
                velit egestas. Aliquet lectus proin nibh nisl condimentum id venenatis a condimentum. At varius vel
                pharetra vel turpis nunc eget.</p>
            <a href="/" id="left-content-button">Learn More</a>
        </div>
        <div className="col-md-5 corner-image">
            <img src={require("../images/corner.png")} alt="Not Found" />
        </div>

    </div>
</section>
)
}

export default Clients;