// ReactDOM.render(<h1>Hello Everyone</h1>, document.getElementById("root"))
function Navbar() {
    return (
        <div className="nav">
            <div className="logo">
            Thenics
            </div>
            <ul>
                <li onClick={home}>Home</li>
                <li onClick={profile}>Profile</li>
                <li onClick={about}>About us</li>
            </ul>
        </div>
    )
}
function Body() {
    return (
        <div className="container">
            <Navbar />
            <div id="c">
                <span>ELEVATE WITH BODYWEIGHT ____</span>
                <ul>
                    <li className="c_text">Your personal fitness tracking app so that you can achive your desired fitness goal in correct way!</li>
                    <a href="#">Let's get Start</a>
                </ul>
            </div>
            <div id="profile">
                <ul className="Tabs">
                    <li>Personal Info</li>
                    <li>Fitness</li>
                    <li>Diet</li>
                    <li>Setting</li>
                </ul>
                <div className="Pcontent">

                    <div className="tab1">
                        <span>
                            <label for="name">Name : </label>
                            <input type="text" className="form-control" name="name" id="name" />
                        </span>
                        <span className="Gender">
                        Gender : 
                            <span>
                                <label for="male">Male </label>
                                <input type="radio" className="form-control" name="title" id="male"/>
                            </span>
                            <span>
                                <label for="female">Female </label>
                                <input type="radio" className="form-control" name="title" id="female"/>
                            </span>
                            <span>
                                <label for="other">Other </label>
                                <input type="radio" className="form-control" name="title" id="other"/>
                            </span>
                        </span>
                        <span>
                            <label for="age">Age : </label>
                            <input type="number" className="form-control" name="age" id="age"/>
                        </span>
                        <span>
                            <label for="weight">Weight(in kg) : </label>
                            <input type="number" className="form-control" name="title" id="weight"/>
                        </span>
                    </div>
                    <div className="tab2">
                        This is fitness
                    </div>
                    <div className="tab3">
                        This is Diet
                    </div>
                    <div className="tab4">
                        This is setting
                    </div>
                </div>
            </div>
            <div id="about">
                <span>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium dolorum quo facilis, architecto iusto deleniti,
                    dolorem hic labore suscipit quasi eaque totam ipsam mollitia nostrum nihil laboriosam delectus quae. Nihil quam
                    optio repudiandae rerum! Aut laboriosam sint laudantium tenetur tempora aspernatur possimus, sed repudiandae ullam
                    officiis qui eum sunt expedita minus, hic, odit veritatis incidunt neque? Quas ipsa a possimus excepturi fuga!
                </span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolorem delectus sit animi quis fugiat dolor
                    fuga adipisci mollitia cumque. Eveniet voluptatum quod animi alias! Ea labore incidunt quo nihil
                </span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium molestias soluta fugit eaque at, rerum aut
                    autem corrupti pariatur, labore optio excepturi eum. Dignissimos accusantium totam natus, sapiente, ex laborum
                    architecto beatae fuga eveniet culpa, quo dicta quidem sequi error veritatis eos repellat facere!
                </span>
            </div>
        </div>
    )
}
ReactDOM.render(<Body />, document.getElementById('body'));