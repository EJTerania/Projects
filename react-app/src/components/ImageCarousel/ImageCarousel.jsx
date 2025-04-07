import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import './ImageCarousel.css';



const ImageCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
    };
    
    const services = [
        {
            image: '/images/peer-to-peer-training.jpg',
            title: 'Peer To Peer Training',
            description: 'Empowering youth with knowledge and skills to promote HIV awareness, prevention, and stigma reduction.'
        },
        {
            image: '/images/health-education.jpg',
            title: 'Health Education',
            description: 'Providing comprehensive information on sexual health, HIV prevention, and mental well-being to empower communities.'
        },
        {
            image: '/images/hiv-screening.jpg',
            title: 'HIV Screening',
            description: 'Offering confidential and accessible testing with guidance and support for informed health decisions.'
        },
        {
            image: '/images/condom-distribution.jpg',
            title: 'Condom Distribution',
            description: 'Ensuring free access to condoms to promote safe sexual practices and reduce STI risks.'
        }
    ];
    return (
        <div className="carousel-container">
        <Slider {...settings}>
            {services.map((service, index) => (
                <div key={index} className="carousel-slide">
                    <img src={service.image} alt={service.title} />
                    <div className="carousel-caption">
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                </div>
            ))}
        </Slider>
    </div>
    )
}

export default ImageCarousel
