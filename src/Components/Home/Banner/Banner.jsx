import bannerImage from "../../../assets/banner/banner.png"

const Banner = () => {
    return (
        <div className="banner">
           
          <div>
            <h3>Discover the beauty of the tropics</h3>
            <h1>Tropical 
Destinations<br />
<span>For Student</span></h1>
<p>Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum integer rutrum nisi. A nec nisl vitae </p>
<button>Sing Up</button>
          </div>
          <div className="banner-image">
            <img className="" src={bannerImage} alt="" />
          </div>
        </div>
    );
};

export default Banner;