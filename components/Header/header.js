const Header = () => {
    return(
        <div>
            <div className= "nav-box">
                <img className= "spineor-logo" src= "\images\spineor-logo.png"></img>
                <div className= "about">
                    ABOUT
                </div>
                <div className= "service">
                    SERVICES
                </div>
                <div className= "success">
                    SUCCESS STORIES
                </div>
                <div className= "insights">
                    INSIGHTS
                </div>
                <div className= "career">
                    CAREER
                </div>
                <div className= "contact">
                    CONTACT
                </div>
                <div>
                <button className= "quote-button"><a>GET A QUOTE</a></button>
                </div>
            </div>
    <style jsx>{`
    
    .nav-box {
        position: absolute;
        width: 1344px;
        height: 74px;
        left: 0px;
        top: 0px;
        position: fixed;
        background: #FFFFFF;
    }

    .spineor-logo {
        position: absolute;
        width: 140px;
        height: 41px;
        left: 19px;
        top: 16px;
    }

    .about {
        position: absolute;
        width: 45px;
        height: 16px;
        left: 480px;
        top: 30px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        color: #000000;
    }

    .service {
        position: absolute;
        width: 45px;
        height: 16px;
        left: 572px;
        top: 30px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        color: #000000;
    }

    .success {
        position: absolute;
        width: 122px;
        height: 16px;
        left: 686px;
        top: 30px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        color: #000000;
    }

    .insights {
        position: absolute;
        width: 45px;
        height: 16px;
        left: 852px;
        top: 30px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        color: #000000;
    }

    .career {
        position: absolute;
        width: 45px;
        height: 16px;
        left: 961px;
        top: 30px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        color: #000000;
    }

    .contact {
        position: absolute;
        width: 45px;
        height: 16px;
        left: 1060px;
        top: 30px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;
        color: #000000;
    }

    .quote-button {
        position: absolute;
        width: 122px;
        height: 40px;
        left: 1158px;
        top: 18px;
        background: #184A88;
<<<<<<< HEAD
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;     
        border-radius: 2px;
    }

    a {
        color: #FFFFFF
=======
        border-radius: 2px;
    }

    .button-inner {
        position: absolute;
        width: 90px;
        height: 16px;
        left: 1176px;
        top: 31px;       
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 16px;       
        color: #FFFFFF;
>>>>>>> master
    }
    `}</style>
        </div>
    )
}

export default Header