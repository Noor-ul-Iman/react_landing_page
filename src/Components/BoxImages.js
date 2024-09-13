function BoxImages(){
return (
    <section class="container-fluid sixth">
    <div class="row upper-images">
        <div class="col-md-3 col-sm-6 img-box">
            <img src={require("../images/1.jpg")} alt="Not found" class="img-fluid" />
        </div>
        <div class="col-md-3 col-sm-6 img-box">
            <img src={require("../images/2.jpg")} alt="Not found" class="img-fluid"/>
        </div>
        <div class="col-md-3 col-sm-6 img-box">
            <img src={require("../images/3.jpg")}alt="Not found" class="img-fluid" />
        </div>
        <div class="col-md-3 col-sm-6 img-box">
            <img src={require("../images/4.jpg")} alt="Not found" class="img-fluid" />
        </div>
    </div>
    <div class="row lower-images">
        <div class="col-md-3 col-sm-6 img-box">
            <img src={require("../images/5.jpg")} alt="Not found" class="img-fluid" />
        </div>
        <div class="col-md-3 col-sm-6 img-box">
            <img src={require("../images/6.jpg")} alt="Not found" class="img-fluid" />
        </div>
        <div class="col-md-3 col-sm-6 img-box">
            <img src={require("../images/7.jpg")} alt="Not found" class="img-fluid" />
        </div>
        <div class="col-md-3 col-sm-6 img-box">
            <img src={require("../images/8.jpg")} alt="Not found" class="img-fluid" />
        </div>
    </div>
</section>
)
}

export default BoxImages