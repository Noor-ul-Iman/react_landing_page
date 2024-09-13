function Contact() {
    return (
        <section className="container-fluid tenth">
            <div className="row tenth-content">
                <div className="col-md-5">
                    <div className="project">
                        <h1>Want to have a professional project? Let’s talk about it.</h1>
                        <p>Est ultricies integer quis auctor elit sed vulputate mi. Lectus nulla at volutpat diam ut. Justo
                            donec enim diam vulputate ut pharetra sit amet aliquam. Parturient montes nascetur ridiculus mus
                            mauris.</p>
                        <p>Vel fringilla est ullamcorper eget nulla. Urna duis convallis convallis tellus id interdum velit
                            laoreet id. Donec adipiscing tristique risus nec feugiat. Egestas dui id ornare arcu odio ut sem
                            nulla.</p>
                    </div>
                </div>
                <div className="col-md-5 form">
                    <form action="" id="myForm">
                        <input type="text" placeholder="Name*" className="full" id="name" /><br />
                        <input type="text" placeholder="Company*" id="company" className="half" />
                        <input type="email" placeholder="EMAIL ADDRESS*" id="email" className="half" />
                        <br />
                        <select id="service" className="full">
                            <option value="" disabled selected hidden>SELECT SERVICE*</option>
                            <option value="SEO">SEO</option>
                            <option value="Web Design">Web Design</option>
                        </select> <br />
                        <textarea rows="7" cols="50" className="full" id="description"
                            placeholder="DESCRIBE YOUR PROJECTS*"></textarea>
                        <br />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
