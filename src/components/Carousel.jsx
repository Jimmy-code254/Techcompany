const Carousel = () => {
  const images = [
    { src: "/images/slide1.png", alt: "Slide 1" },
    { src: "/images/slide2.gif", alt: "Slide 2" },
    { src: "/images/slide3.png", alt: "Slide 3" },
    { src: "/images/slide4.png", alt: "Slide 4" },
    { src: "/images/slide5.jpg", alt: "Slide 5" },
    { src: "/images/slide6.jpg", alt: "Slide 6" },
    {src:"/images/flash.gif", alt:"slide7"},
    {src:"/images/brand.gif", alt:"slide8"},
    {src:"/images/flex.png", alt:"slide9"},

  ];

  return (
    <section className="row">
      <div className="col-md-12">
        <div className="carousel slide" id="mycarousel" data-bs-ride="carousel">
          <div className="carousel-inner">
            {images.map((image, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index} data-bs-interval="500">
                <img src={image.src} alt={image.alt} className="image" />
              </div>
            ))}
          </div>

          <a href="#mycarousel" className="carousel-control-prev" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </a>

          <a href="#mycarousel" className="carousel-control-next" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
