import Post1 from '../assets/post 1.svg';
import Post2 from '../assets/post 2.svg';
import Post3 from '../assets/post 3.svg';
import Clock from '../assets/clock.svg';
import Comments from '../assets/comments.svg';
import Arrow from '../assets/arrow.svg';

const Posts = () => {
    return (
        <>
            <section className="posts-container">
                <div className="posts-description">
                    <h6>Practice Advice</h6>
                    <h2>Featured Posts</h2>
                </div>

                <div className="posts-wrapper">
                    <section className="features-card">
                        <div className="features-image-wrapper">
                            <img src={Post1} alt="Post1" className="features-image" />
                        </div>
                        <div className="features-content">
                            <div className="tags">
                               <p>Google</p>
                               <p>Trending</p>
                               <p>New</p> 
                            </div>
                            <h4 className="features-title">Loudest à la Madison #1 (L'integral)</h4>
                            <p className="features-description">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                            <div className="time-stamp">
                                <div className="time">
                                    <img src={Clock} alt="clock-icon" />
                                    <p>22 April 2021</p>
                                </div>
                                <div className="comment">
                                    <img src={Comments} alt="comment-icon" />
                                    <p>10 comments</p>
                                </div>
                            </div>
                            <div className="learn-more">
                                <h3>Learn More</h3>
                                <img src={Arrow} alt="arrow-icon" />
                            </div>
                        </div>
                    </section>

                    <section className="features-card">
                        <div className="features-image-wrapper">
                            <img src={Post2} alt="Post2" className="features-image" />
                        </div>
                        <div className="features-content">
                            <div className="tags">
                               <p>Google</p>
                               <p>Trending</p>
                               <p>New</p> 
                            </div>
                            <h4 className="features-title">Loudest à la Madison #1 (L'integral)</h4>
                            <p className="features-description">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                            <div className="time-stamp">
                                <div className="time">
                                    <img src={Clock} alt="clock-icon" />
                                    <p>22 April 2021</p>
                                </div>
                                <div className="comment">
                                    <img src={Comments} alt="comment-icon" />
                                    <p>10 comments</p>
                                </div>
                            </div>
                            <div className="learn-more">
                                <h3>Learn More</h3>
                                <img src={Arrow} alt="arrow-icon" />
                            </div>
                        </div>
                    </section>
                    
                    <section className="features-card">
                        <div className="features-image-wrapper">
                            <img src={Post3} alt="Post3" className="features-image" />
                        </div>
                        <div className="features-content">
                            <div className="tags">
                               <p>Google</p>
                               <p>Trending</p>
                               <p>New</p> 
                            </div>
                            <h4 className="features-title">Loudest à la Madison #1 (L'integral)</h4>
                            <p className="features-description">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                            <div className="time-stamp">
                                <div className="time">
                                    <img src={Clock} alt="clock-icon" />
                                    <p>22 April 2021</p>
                                </div>
                                <div className="comment">
                                    <img src={Comments} alt="comment-icon" />
                                    <p>10 comments</p>
                                </div>
                            </div>
                            <div className="learn-more">
                                <h3>Learn More</h3>
                                <img src={Arrow} alt="arrow-icon" />
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}

export default Posts;