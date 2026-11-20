
import { useState } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="website">

      {/* Navigation */}
      <header className="navbar">
        <div className="logo">
          <div className="logo-icon">BBA</div>
          <div>
            <h2>Blessed StarAcademy</h2>
            <span>ACADEMY</span>
          </div>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
          <a href="#academics" onClick={() => setMenuOpen(false)}>Academics</a>
          <a href="#activities" onClick={() => setMenuOpen(false)}>Activities</a>
          <a href="#admissions" onClick={() => setMenuOpen(false)}>Admissions</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>

        <a href="#contact" className="nav-button">Contact Us</a>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="welcome">WELCOME TO BLESSED STAR ACADEMY</p>

          <h1>
            Inspiring Young Minds,
            <span> Building Bright Futures.</span>
          </h1>

          <p className="hero-description">
            We nurture talent, build character and provide quality education
            that prepares learners for a brighter tomorrow.
          </p>

          <div className="hero-buttons">
            <a href="#about" className="primary-button">Discover Our School</a>
            <a href="#contact" className="secondary-button">Get In Touch</a>
          </div>

          <div className="motto">
            <strong>OUR MOTTO</strong>
            <p>STRIVE FOR EXCELLENCE</p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="intro section" id="about">
        <div className="section-heading">
          <p className="small-heading">ABOUT OUR SCHOOL</p>
          <h2>Growing Together, Achieving Excellence</h2>
          <p>
            Welcome to BLESSED STAR ACADEMY, where every learner gets
            an opportunity to discover their potential.
          </p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900"
              alt="Learners in a school environment"
            />
          </div>

          <div className="about-text">
            <h3>A Foundation for a Brighter Future</h3>

            <p>
              At BLESSED STAR ACADEMY, we are committed to creating
              a supportive learning environment where learners develop
              academically, socially and morally.
            </p>

            <p>
              Our approach encourages curiosity, creativity, discipline
              and confidence while preparing every learner for future
              opportunities.
            </p>

            <div className="school-motto">
              STRIVE FOR EXCELLENCE
            </div>
          </div>
        </div>

        <div className="values-grid">
          <div className="value-card">
            <h3>Our Vision</h3>
            <p>
              To nurture responsible, confident and innovative learners
              who contribute positively to society.
            </p>
          </div>

          <div className="value-card">
            <h3>Our Mission</h3>
            <p>
              To provide quality education in a supportive environment
              that promotes knowledge, character and talent development.
            </p>
          </div>

          <div className="value-card">
            <h3>Our Core Values</h3>
            <p>
              Excellence, discipline, integrity, teamwork, creativity
              and respect.
            </p>
          </div>
        </div>
      </section>

      {/* Academics */}
      <section className="academics section" id="academics">
        <div className="section-heading">
          <p className="small-heading">LEARNING AT BLESSED STAR ACADEMY</p>
          <h2>Our Academic Programme</h2>
          <p>
            From the first steps in learning to the development of
            advanced knowledge and skills, we support every stage
            of your child's educational journey.
          </p>
        </div>

        <div className="academic-box">

          <div>
            <h3>Early Years Education</h3>
            <p>
              A welcoming beginning where young learners explore,
              discover and develop essential foundational skills.
            </p>
            <strong>Playgroup | PP1 | PP2</strong>
          </div>

          <div>
            <h3>Primary School</h3>
            <p>
              Building knowledge, confidence, creativity and
              essential competencies through engaging learning.
            </p>
            <strong>Grade 1 – Grade 6</strong>
          </div>

          <div>
            <h3>Junior School</h3>
            <p>
              Developing independence, practical skills, critical
              thinking and readiness for future learning.
            </p>
            <strong>Grade 7 – Grade 9</strong>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us section" id="why-us">
        <div className="section-heading">
          <p className="small-heading">WHY  BLESSED STAR ACADEMY?</p>
          <h2>Education Beyond the Classroom</h2>
          <p>
            We focus on developing the whole learner through
            knowledge, skills and character.
          </p>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <span>01</span>
            <h3>Quality Learning</h3>
            <p>
              A supportive environment that encourages academic
              growth and curiosity.
            </p>
          </div>

          <div className="why-card">
            <span>02</span>
            <h3>Discipline and Values</h3>
            <p>
              Promoting respect, responsibility, integrity
              and good character.
            </p>
          </div>

          <div className="why-card">
            <span>03</span>
            <h3>Talent Development</h3>
            <p>
              Encouraging learners to explore sports, creativity
              and their individual abilities.
            </p>
          </div>

          <div className="why-card">
            <span>04</span>
            <h3>Technology and Innovation</h3>
            <p>
              Encouraging digital skills, creativity and
              preparation for the future.
            </p>
          </div>
        </div>
      </section>

      {/* Admissions */}
      <section className="admissions section" id="admissions">
        <div className="admissions-content">
          <div className="admissions-text">
            <p className="small-heading">JOIN OUR SCHOOL</p>
            <h2>Give Your Child a Strong Foundation for the Future</h2>

            <p>
              At BLESSED STAR ACADEMY, we believe every learner
              deserves an opportunity to grow, discover their abilities
              and achieve their full potential.
            </p>

            <p>
              We welcome enquiries from parents and guardians interested
              in Playgroup, PP1, PP2 and Grades 1–9.
            </p>

            <a href="#contact" className="admissions-btn">
              Enquire About Admissions →
            </a>
          </div>

          <div className="admissions-image">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80"
              alt="Learners in a classroom"
            />
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="activities section" id="activities">
        <div className="section-heading">
          <p className="small-heading">BEYOND THE CLASSROOM</p>
          <h2>Learning Through Activities</h2>
          <p>
            We believe education also happens through
            participation and experience.
          </p>
        </div>

        <div className="activity-grid">
          <div className="activity-card">
            ⚽ <h3>Sports</h3>
          </div>

          <div className="activity-card">
            🎨 <h3>Creative Arts</h3>
          </div>

          <div className="activity-card">
            💻 <h3>Technology</h3>
          </div>

          <div className="activity-card">
            🌿 <h3>Environmental Activities</h3>
          </div>
        </div>
      </section>

      {/* School Gallery */}
      <section className="gallery section" id="gallery">
        <div className="section-heading">
          <p className="small-heading">LIFE AT BLESSED STAR ACADEMY</p>
          <h2>Our School Gallery</h2>
          <p>
            Discover an environment where learning,
            creativity and talent grow.
          </p>
        </div>

        <div className="gallery-grid">
          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800"
              alt="Students learning in a classroom"
            />
            <h3>Learning Environment</h3>
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800"
              alt="Students studying together"
            />
            <h3>Academic Excellence</h3>
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800"
              alt="Students participating in sports"
            />
            <h3>Sports and Talent</h3>
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=800"
              alt="School classroom"
            />
            <h3>Our Classrooms</h3>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact section" id="contact">
        <p className="small-heading">WE WOULD LOVE TO HEAR FROM YOU</p>
        <h2>Give Your Child a Brighter Future</h2>
        <p>
          Get in touch with BLESSED STAR ACADEMY for
          enquiries and admissions information.
        </p>

        <a
          href="mailto:info@blessedstaracademy.com"
          className="primary-button"
        >
          Contact the School
        </a>
      </section>

      {/* Footer */}
      <footer>
        <h2>BLESSED STAR ACADEMY</h2>
        <p>STRIVE FOR EXCELLENCE</p>
        <p>Shikhambi, Kakamega County, Kenya</p>

        <div className="footer-line"></div>

        <small>
          © {new Date().getFullYear()} BLESSED STAR ACADEMY.
          All rights reserved.
        </small>
      </footer>

    </div>
  );
}

export default App;