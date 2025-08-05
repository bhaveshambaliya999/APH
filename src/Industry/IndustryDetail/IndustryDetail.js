import React from 'react';
import { useParams } from 'react-router-dom';
import './IndustryDetail.scss';

import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

// Import images
import b1 from "../../Assets/img/bolg-1.jpg";
import b2 from "../../Assets/img/3e126df5b637ae365c4c331b920a0519.jpg";
import b3 from "../../Assets/img/bolg-3.jpg";

function  IndustryDetail () {
  const { title } = useParams();  // Get the blog title from the URL

    
  // Sample data for the blog posts
  const blogs = [
    { 
        id: 1, title: "The Indian Perfume Market A Blend of Heritage and Modernity", 
        image: b1, 
        description: "The Indian perfume market is a fascinating mix of tradition and modernity, deeply rooted in the country’s cultural heritage. With a history that dates back thousands of years, perfumery in India has evolved into a thriving industry that reflects both its rich past and innovative future. \n\nIndia’s association with fragrances can be traced to ancient texts like the Vedas, where aromatic substances were integral to rituals, medicine, and personal adornment. Ingredients such as sandalwood, jasmine, and vetiver were prized for their unique scents and therapeutic benefits. The town of Kannauj, often called the “Perfume Capital of India,” has upheld the tradition of crafting attars—natural, alcohol-free perfumes distilled from flowers and spices. \n\nFragrance has always held a special place in Indian culture, from its use in religious ceremonies to its role in Ayurveda for promoting well-being. This connection between scents and spirituality continues to influence modern Indian perfumery. \n\nToday, the Indian perfume market is growing rapidly, driven by rising incomes, urbanization, and changing consumer preferences. Trends such as natural and organic perfumes, personalized fragrances, and the rise of e-commerce are reshaping the industry. Additionally, luxury perfumes are gaining popularity, with both global and homegrown brands tapping into this lucrative segment. \n\nDespite its growth, the industry faces challenges like counterfeit products and dependency on imported raw materials. However, by blending traditional expertise with modern innovation, India has the potential to emerge as a global hub for high-quality fragrances. \n\nThe Indian perfume market is more than just an industry; it is a celebration of artistry and culture. From the timeless allure of attars to contemporary luxury scents, the journey of Indian perfumery is a testament to its enduring charm and versatility."
    },
    { 
        id: 2, title: "Exploring Different Types of Perfumes and Their Applications", 
        image: b2, 
        description: "Perfumes are more than just fragrances; they are a reflection of personal style, mood, and occasion. With a variety of types available, each perfume has unique characteristics and applications suited to different needs and preferences. Understanding these categories can help you make the right choice for every moment. \n\nOne of the most common types is Eau de Parfum (EDP), known for its high concentration of fragrance oils. With a lasting power of 6 to 8 hours, it is ideal for evening events or long days at work. Eau de Toilette (EDT), on the other hand, offers a lighter scent with a shorter lifespan of 3 to 5 hours, making it perfect for casual outings or daytime use. \n\nEau de Cologne, with its fresh and subtle aroma, is favored for its lower concentration of oils. It works well as a refreshing option during hot summer days. Similarly, Eau Fraiche, the lightest form of fragrance, is often used for a quick burst of freshness and is great for sensitive skin due to its minimal alcohol content. \n\nFor a more indulgent experience, Perfume Extract or pure perfume offers the most concentrated and luxurious scent, lasting over 12 hours. It’s a staple for special occasions where an intense and memorable fragrance is desired. \n\nPerfumes also extend beyond personal use. Home fragrances, such as scented candles and diffusers, create a welcoming ambiance, while functional perfumes enhance products like skincare and detergents with pleasant aromas. \n\nBy choosing the right type of perfume, you can elevate your presence and surroundings effortlessly. Whether it’s a casual day, a formal event, or a cozy evening at home, there is a fragrance to match every moment, making the world of perfumes both versatile and enchanting. ",
        
    },
    { 
        id: 3, title: "Natural and Synthetic Ingredients in Perfume", 
        image: b3, 
        description: "The art of perfumery revolves around blending various ingredients to create captivating scents. These ingredients, derived from both natural and synthetic sources, form the backbone of the fragrance industry, each bringing unique qualities to the final product. \n\nNatural ingredients have been the foundation of perfumery for centuries. Derived from plants, flowers, fruits, and resins, these materials offer rich and authentic aromas. For instance, rose oil, extracted from petals, provides a luxurious and floral note, while sandalwood, obtained from tree heartwood, delivers a warm and woody scent. Citrus oils, such as bergamot and orange, are celebrated for their zesty freshness. Other popular natural ingredients include jasmine, lavender, and vetiver, each contributing distinct characteristics to perfumes. \n\nIn contrast, synthetic ingredients are created through chemical processes to replicate or enhance natural aromas. These components offer greater versatility, consistency, and sustainability. Iso E Super, for example, is a synthetic molecule that adds a velvety, woody note, while aldehydes create sparkling, fresh effects often found in modern perfumes. Synthetics also enable perfumers to craft unique scents that are difficult to achieve using natural materials alone. \n\nThe combination of natural and synthetic ingredients allows perfumers to balance authenticity with innovation. Natural components provide depth and complexity, while synthetics enhance longevity and variety. Together, they create perfumes that cater to diverse preferences and occasions, showcasing the limitless possibilities of fragrance creation.",
       
    }
  ];

  // Convert the URL-friendly title back to the proper format (spaces instead of hyphens)
  const formattedTitle = title.replace(/-/g, ' ');

  // Find the blog based on the title
  const blog = blogs.find(blog => blog.title.toLowerCase() === formattedTitle.toLowerCase());

  

  if (!blog) {
    return <p>Blog not found.</p>;
  }

  return (
    <>
        <Header/>
        <div className='main'>
            <div className="blog-detail py-space">
                <div className="container">
                    <h1 className='mb-3'>{blog.title}</h1>
                    <img src={blog.image} alt={blog.title} style={{ width: '100%', height: 'auto' }} className='mb-3' />
                    {blog.description.split('\n\n').map((para, index) => (
                      <p key={index}>{para}</p>
                    ))}
                </div>
            </div>
        </div>
        <Footer/>
    </>
  );
};

export default IndustryDetail;
