import React, { useEffect, useState } from 'react';
import './learning.css'; // Adjust the path as needed

const Learning = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/uploadvideo');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  // Function to extract YouTube video ID from URL
  const extractVideoId = (url) => {
    const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^\s&]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  return (<>
  {/* <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/img1learn.jpg" className="d-block w-100" alt="Slide 1"/>
          </div>
          <div className="carousel-item">
            <img src="/img2learn.jpg" className="d-block w-100" alt="Slide 2"/>
          </div>
          <div className="carousel-item">
            <img src="/img3learn.jpg" className="d-block w-100" alt="Slide 3"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        
      </div> */}
      {/* <section className="intro-section">
        <img src="img2learn.jpg" alt="Introduction" className="intro-image" />
        <div className="intro-text">
          <h1>Welcome to the Learning Section</h1>
          <p>This section is designed to help you learn new skills and improve your knowledge.</p>
        </div>
      </section> */}
    <div className="accordion accordion-flush" id="accordionFlushExample">
      {videos.map((video, index) => {
        const videoId = extractVideoId(video.videoUrl);

        return (
          <div className="accordion-item" key={video._id}>
            <h2 className="accordion-header" id={`flush-heading${index}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#flush-collapse${index}`}
                aria-expanded="false"
                aria-controls={`flush-collapse${index}`}
              >
                {video.name}
              </button>
            </h2>
            <div
              id={`flush-collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`flush-heading${index}`}
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                {videoId ? (
                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={video.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <p>Invalid video URL</p>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
    </>
  );
};

export default Learning;
