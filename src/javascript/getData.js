class PortfolioData {
    data = ""
    getData = (value) => {
       this.data = value
    }

    formateDateHomePage = () => {
        let recentProjects = document.querySelector("#recent-projects")

        this.data.map((value) => {

            if(value.id < 4) {
            recentProjects.innerHTML += `
                <div id="${value.id}" class="col-lg-4 ">
                    <div class="card card_formated">
                        <h2>${value.name}</h2>
                        <img class="img-fluid" 
                        alt="${value.alt}"
                        src="${value.img}">
                        <a 
                        class="btn btn-primary link_button my-3" 
                        href="${value.website}" >
                        To ${value.type} App
                        </a>
                        <a class="btn btn-primary link_button mb-3" href="${
                            value.github
                        }">
                        <i class="fa-brands fa-github"></i> Github
                        </a>
                        <p class="description">${value.description}</p>
                    </div>
                </div>
                `
            }
        })
    }

    formateWork = () => {
        let portfolioData = document.querySelector("#portfolio_data")
        console.log("work")
        this.data.map((value) => {
            
            portfolioData.innerHTML += `
                <div class="work_container" id=${value.id}>
                    <div class="work_item work_info">
                        <h2>${value.name}</h2>
                        <p class="description">${value.description}</p>
                        <a 
                        class="btn btn-primary my-3" 
                        href="${value.website}" >
                        To ${value.type} App
                        </a>
                        <a class="btn btn-primary mb-3" href="${
                            value.github
                        }">
                        <i class="fa-brands fa-github"></i> Github
                        </a>
                    </div>
                    <div class="work_item work_img">
                        <img src="${value.img}"  alt="${value.alt}"/>
                    </div>
                </div>
            `
            
        })
    }

}



let portfolioData = new PortfolioData()

fetch("./src/data/portfolio.json").then((res) => {
    return res.json()
}).then((data) => {
    portfolioData.getData(data)

    var path = window.location.pathname;
    var page = path.split("/").pop();
    console.log(page)
    if(page == "") {
        portfolioData.formateDateHomePage()
    } else if(page == "work.html") {
        portfolioData.formateWork()
    }
})

