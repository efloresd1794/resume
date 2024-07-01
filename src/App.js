import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Edson Flores</h1>
        <p>Data Scientist | Machine Learning | AWS Cloud Engineer</p>
      </header>
      <main>
        <section className="section">
          <h2>About Me</h2>
          <p>Experimental physicist, who works as data scientist. I have experience in data science, 
              machine learning engineering and cloud engineer. Experience in Sagemaker and all features
              in AWS, serverless design, chatbots, classification, outliers, forecasting and processing 
              image projects. I have been designing and implementing solutions with AI services, ML models and GenAI.</p>
        </section>
        <section className="section">
          <h2>Experience</h2>
          <ul className="education-list">
            <li>
              <div className="education-header">
                <h3>Price Lab</h3>
                <span className="s-date">2024 - 2024</span>
              </div>
              <p className='job-style'>Machine Learning Engineer</p>
              <p>I brought ML processes to a consumer environment through Sagemaker and serverless services such as Lambda and API Gateway.</p>
            </li>
            <li>
              <div className="education-header">
                <h3>Morris & Opazo</h3>
                <span className="s-date">2020 - 2024</span>
              </div>
              
              <p className='job-style'>Data Scientist</p>
              <p>As a data scientist, I play a multifaceted role. This includes crafting machine learning models for 
                detecting anomalies, making forecasts, and processing images. Additionally, I develop serverless solutions
                using AWS services for analyzing images, documents, audio, and chatbots. Drawing from my background in physics, 
                I refine these solutions until achieving optimal architecture. Apart from my technical
                skills, I excel in managing projects, guiding machine learning initiatives from start to finish, ensuring
                seamless planning, execution, and closure. Collaborating closely with the sales team, I contribute by
                implementing machine learning and artificial intelligence projects, leveraging AWS services effectively.
                Finally, I am committed to fostering team growth and development through immersive training experiences 
                like immersion days, training sessions, and webinars.</p>
            </li>
          </ul>
        </section>
        <section className="section">
          <h2>Education</h2>
          <ul className="education-list">
            <li>
              <div className="education-header">
                <h3>National University of Engineering</h3>
                <span className="s-date">2013 - 2019</span>
              </div>
              <p>Bachelor of Science in Physics</p>
              <p>Lima, Peru</p>
            </li>
            <li>
              <div className="education-header">
                <h3>CTIC - National University of Engineering</h3>
                <span className="s-date">2020</span>
              </div>
              <p>Specialization in Machine Learning with Python</p>
              <p>Lima, Peru</p>
            </li>
          </ul>
        </section>
        <section className="section">
          <h2>Certificates</h2>
          <ul className="education-list">
            <li>
              <div className="education-header">
                <p>AWS Certified Machine Learning - Specialty</p>
                <span className="s-date">2021 - 2024</span>
              </div>
            </li>
            <li>
            <div className="education-header">
              <p>AWS Certified Solutions Architect - Associate</p>
              <span className="s-date">2022 - 2025</span>
              </div>
            </li>
          </ul>
        </section>
        <section className="section">
          <h2>Skills</h2>
          <ul>
            <li>Data Science: Python, Machine Learning, Deep Learning, GenAI.</li>
            <li>AWS Services: SageMaker, Bedrock, S3, Athena, Lambda, ECR, Lex, Rekognition, Textract, Transcribe, Comprehend, Quicksight, Amazon Q, API Gateway.</li>
            <li>Software & Tools: Google Suite, MS Office, Anaconda, Jupyter, VSC, ReactJS.</li>
            <li>Languages: Spanish (Native), English (Advanced).</li>
            <li>Soft: Empathy, Active Listening, Collaboration, Optimism, Persistence, Responsibility, Adaptability, Creativity, Communication.</li>
          </ul>
        </section>
        <section className="section">
          <h2>Projects</h2>
          <ul className="education-list">
            <li>
              <div className="education-header">
                <h3>FreeLance: Chatbot con GenAI</h3>
                <span className="s-date">1 week</span>
              </div>
              <p>We used AWS to develop a chatbot with Bedrock. 
                The backend was built in Lambda and Bedrock and Anthropic 
                Claude v3.5 Sonnet were used to orchestrate processes that allow
                 managing the conversational flow. At the frontend level, 
                 Reactjs was used in a static S3 bucket.</p>
            </li>
            <li>
              <div className="education-header">
                <h3>Freelance: Deteccion de bostezo</h3>
                <span className="s-date">1 week</span>
              </div>
              <p>Worked with YoloV5 to train a drowsiness detection model. 
                First, the images were labeled and then we trained a pre-trained model. 
                Finally, we use the model with a webcam to generate the detection 
                close to real time.</p>
            </li>
          </ul>
        </section>
      </main>
      <footer className="App-footer">
        <p>Contact me: efloresd@uni.pe</p>
        <p>
          {/* <a href="https://github.com/yourusername">GitHub</a> | */}
          <a href="https://www.linkedin.com/in/efloresd">LinkedIn</a>
        </p>
      </footer>
    </div>
  );
}

export default App;