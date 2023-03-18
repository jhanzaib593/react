import React from 'react'
import about from '../src/about.jpg'
import PropTypes from 'prop-types';


function About(props) {
    return (
      <>
      <section id="about" className="about_wrapper">
        <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="col-lg-5 mb-4 mb-lg-0">
                    <img src={about} className="img-fluid rounded-3" alt="About Us"/>
                </div>
                <div className="col-lg-7 ps-lg-5 text-center text-lg-start" >
                    <div className="my-3 my-lg-0" style={{color:props.mode==='light'?'black':'#c6c9d8bf !important'}}>
                        <h2 >About Me</h2>
                        <p>Faizan is a data scientist,
                            statistician, and entrepreneur
                            who cherishes composing classNameical
                            music and verse. </p>
                        <p>He is a data scientist,
                            statistician and machine learning engineer
                            with over 6 years of industry experience in
                            the field of advanced analytics. He helps
                            businesses grow with data-driven,
                            cutting-edge machine learning solutions.
                            Build machine learning models in Python and R
                            for supervised and unsupervised learning,
                            predictive and prescriptive modeling, and natural language.</p>

                             {/* <!-- Button trigger modal --> */}

                    <a className="modal-btn" href="/#"data-bs-toggle="modal"
                    data-bs-target="#AboutModal">Read more</a>

                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="AboutModal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content bg-dark">
                            <div className="modal-header text-light">
                              <h5 className="modal-title" id="exampleModalToggleLabel">HIGHLIGHT OF SKILLS</h5>
                              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                               <p>● Over 6 years of consulting experience in advanced analytics, biostatistics and cutting-edge machine learning solutions for businesses and institutions for building production Apps using R and Shiny.</p>
                               <p>● Leadership and organizational skills cultivated through a wide range of projects, competitions, and collaborative work.</p>
                               <p>● Proficient in Python and R for supervised and unsupervised learning, predictive and prescriptive modeling, deep learning, times-series analysis, survival analysis, and longitudinal analysis, as well as building dashboards using Shiny.</p>
                               <p>● Great communication skills and extensive teaching experience in machine learning and statistics using R and Python.</p>
                            </div>
                            <div className="modal-footer">
                              <button className="modal-btn" data-bs-dismiss="modal" aria-label="Close">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                   

                   
                    <div className="pt-4">
                        <ul className="nav nav-pills justify-content-center justify-content-lg-between mb-3" id="pills-tab"
                            role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="pills-skill-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-skill" type="button" role="tab" aria-controls="pills-skill"
                                    aria-selected="true">Main Skills</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-Award-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-Award" type="button" role="tab" aria-controls="pills-Award"
                                    aria-selected="false">Awards</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-experiance-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-experiance" type="button" role="tab"
                                    aria-controls="pills-experiance" aria-selected="false">Experiance</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-education-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-education" type="button" role="tab"
                                    aria-controls="pills-education" aria-selected="false">Education</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-skill" role="tabpanel"
                                aria-labelledby="pills-skill-tab">
                                <div className="single-progress">
                                    <h6>Statistical Consulting</h6>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: `95%`}}
                                            aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                    </div>
                                    <span className="label">95%</span>
                                </div>
                                <div className="single-progress">
                                    <h6>Machine Learning</h6>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: `95%`}}
                                            aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                    </div>
                                    <span className="label">95%</span>
                                </div>
                                <div className="single-progress">
                                    <h6>Dashboarding</h6>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: `90%`}}
                                            aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                    </div>
                                    <span className="label">90%</span>
                                </div>
                                <div className="single-progress">
                                    <h6>Project Management</h6>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: `85%`}}
                                            aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                    </div>
                                    <span className="label">85%</span>
                                </div>
                                <div className="single-progress pb-3">
                                    <h6>Communication, Teaching, & Coaching</h6>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" style={{width: `100%`}}
                                            aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                    </div>
                                    <span className="label">100%</span>
                                </div>
                                <a className="modal-btn" href="/#"data-bs-toggle="modal"
                                data-bs-target="#exampleModal1">Veiw All</a>

                                {/* <!-- Modal --> */}

                                <div className="modal fade" id="exampleModal1" tabindex="-1"
                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog1 modal-dialog modal-dialog-scrollable">
                                        <div className="modal-content bg-dark">
                                            <div className="modal-header text-light">
                                                <h5 className="modal-title" id="exampleModalLabel">TECHNICAL SKILLS</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <p>● Python</p>
                                                        <p>● SAS</p>
                                                        <p>● R</p>
                                                        <p>● R Shiny</p>
                                                        <p>● Flexdashboard</p>
                                                        <p>● Splunk</p>
                                                        <p>● Power BI</p>
                                                        <p>● Tableau</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <p>● Tidyverse</p>
                                                        <p>● DevOps</p>
                                                        <p>● Microsoft Azure Cloud</p>
                                                        <p>● Microsoft SQL Server</p>
                                                        <p>● Docker</p>
                                                        <p>● Git & GitHub</p>
                                                        <p>● SQLite</p>
                                                        <p>● SQL & T-SQL</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <p>● Deep Learning</p>
                                                        <p>● SciPy</p>
                                                        <p>● Scikit-learn</p>
                                                        <p>● Keras</p>
                                                        <p>● TensorFlow</p>
                                                        <p>● TensorBoard</p>
                                                        <p>● Pandas</p>
                                                        <p>● Sentiment Analysis</p>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <p>● MLflow</p>
                                                        <p>● Jira</p>
                                                        <p>●  Experimental design (A/B testing)</p>
                                                        <p>● Biostatistics</p>
                                                        <p>● Survival Analysis</p>
                                                        <p>● Clinical Trials</p>
                                                        <p>● PheWAS</p>
                                                        <p>● Mediation Analysis</p>
                                                        <p>● Survey Design</p>
                                                    </div>

                                                  </div>
                                               
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- End Modal --> */}

                            </div>
                            <div className="tab-pane fade" id="pills-Award" role="tabpanel"
                                aria-labelledby="pills-Award-tab">
                                <ul className="text-start ps-0">
                                    <li><a href="/#">
                                            <span>Best Undergraduate Research Presentation Award.</span></a> 
                                            Annual Statistical Society of Canada Student Conference, “Research: Comparing Dif erent Missing Data Methods.” (May 2016)
                                    </li>
                                    <li><a href="/#">
                                        <span>University College Special In-Course Scholarship, University of Toronto</span></a>
                                        Received for high academic performance for the 2013-2014 academic year.(April 2014)
                                    </li>
                                   
                                    {/* <!--
                                <li><a href="/#">Awards.com
                                        <span>- Winner</span></a> 2019 - 2020
                                </li>
                                --> */}
                                </ul>

                                {/* <!-- Button trigger modal -->
                                <!--
                                <a className="modal-btn" href="/#"data-bs-toggle="modal"
                                    data-bs-target="#exampleModal1">Veiw All</a>
                                    -->
                                <!-- Modal --> */}
                                    {/* <!--
                                <div className="modal fade" id="exampleModal1" tabindex="-1"
                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog modal-dialog-scrollable">
                                        <div className="modal-content bg-dark">
                                            <div className="modal-header text-light">
                                                <h5 className="modal-title" id="exampleModalLabel">Awards</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <ul className="text-start ps-0">
                                                    <li>
                                                        <a href="/#">
                                                            <span>Team Leader, Won 1st Prize for the Case Study Competition: “What Predicts Sustainability of Canadian Charities?”
                                                            </span>
                                                        </a> 
                                                        Issued by Statistical Society of Canada -June 2016                                                        
                                                    </li>
                                                    <li>
                                                        <a href="/#">
                                                            <span>Best Undergraduate Research Presentation Award at the SSC 2016 Conference
                                                            </span>
                                                        </a>
                                                        Issued by Statistical Society of Canada -May 2016
                                                    </li>
                                                    <li>
                                                        <a href="/#">
                                                            <span> 
                                                                University College Special In-Course Scholarship
                                                            </span>
                                                        </a> 
                                                        Issued by University of Toronto - Apr 2014                                                         
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                 --> */}
                            </div>
                            <div className="tab-pane fade" id="pills-experiance" role="tabpanel"
                                aria-labelledby="pills-experiance-tab">
                                <ul className="text-start ps-0">
                                    <li><a href="/#">CEO, Founder, and Principal Data Scientist<span> -
                                                Cube Statistica</span></a> 2018 - Current
                                    </li>
                                    <li><a href="/#">Digital Management Consultant<span> - 180 Degrees Consulting
                                            </span></a> May 2020 - May 2021
                                    </li>
                                    <li><a href="/#">Lead Statistician, Province-Wide Prostate Cancer Research
                                            Study<span> -
                                                University of Toronto
                                            </span></a> Feb 2018 - Feb 2020
                                    </li>                                    
                                </ul>
                                {/* <!-- Button trigger modal --> */}

                                <a className="modal-btn" href="/#"data-bs-toggle="modal"
                                    data-bs-target="#Experiance">Veiw All</a>

                                {/* <!-- Modal --> */}
                                <div className="modal fade" id="Experiance" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                                    <div className="modal-dialog modal-dialog-centered">
                                      <div className="modal-content bg-dark">
                                        <div className="modal-header text-light">
                                          <h5 className="modal-title" id="exampleModalToggleLabel">SELECT WORK EXPERIENCE</h5>
                                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <ul className="text-start ps-0">
                                                <li>
                                                    <a href="/#">
                                                        <span>Data Scientist, Cybersecurity & Cyber Fraud </span>
                                                    </a> 
                                                    TD Bank, Toronto (Sept 2022 - present)                                            
                                                </li>
                                                <li>
                                                    <a href="/#">
                                                        <span>Data Scientist & Market Development Analyst</span>
                                                    </a>
                                                    Advantage Group International, Toronto (May 2018 – August 2019)
                                                </li>
                                                <li>
                                                    <a href="/#">
                                                        <span> 
                                                            Machine Learning, Data Science, and Statistics 
                                                        </span>
                                                    </a> 
                                                    Private Instructor, Toronto (Sept 2014 – Aug 2018)                                                        
                                                </li>
                                                <li>
                                                    <a href="/#">
                                                        <span>Coursera Teaching Assistant </span>
                                                    </a>
                                                    Coursera | Statistics: Making Sense of Data, University of Toronto (Sept 2017 – Dec 2017)
                                                </li>
                                                <li>
                                                    <a href="/#">
                                                        <span> Teaching Assistant </span>
                                                    </a>
                                                    University of Toronto, Statistical Sciences Department (Sept 2016 – May 2017)
                                                </li>
                                            </ul>                                        
                                        </div>
                                        <div className="modal-footer">
                                          <button className="modal-btn" data-bs-target="#experianceToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Open second modal</button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="modal fade " id="experianceToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                                    <div className="modal-dialog modal-dialog-centered">
                                      <div className="modal-content bg-dark text-light">
                                        <div className="modal-header">
                                          <h5 className="modal-title" id="exampleModalToggleLabel2">SELECT RESEARCH EXPERIENCE</h5>
                                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <ul className="text-start ps-0">
                                                <li>
                                                    <a href="/#">
                                                        <span>The Hospital for Sick Children (SickKids), Toronto </span>
                                                    </a> 
                                                    Big Data Genetics Researcher, Practicum Student (Feb 2018 – May 2019)                                            
                                                </li>
                                                <li>
                                                    <a href="/#">
                                                        <span>Princess Margaret Cancer Hospital, Toronto</span>
                                                    </a>
                                                    Statistician (Nov 2016 – April 2017)
                                                </li>
                                                <li>
                                                    <a href="/#">
                                                        <span> 
                                                            Toronto General Hospital, Toronto </span>
                                                    </a> 
                                                    Lead Statistical Researcher, WE-Can program at ELLICSR (Cancer Survivorship Centre) (June 2015 – Feb 2017)                                                        
                                                </li>
                                            </ul>            
                                        </div>
                                        <div className="modal-footer">
                                          <button className="modal-btn" data-bs-target="#Experiance" data-bs-toggle="modal" data-bs-dismiss="modal">Back to first</button>
                                          <button className="modal-btn" data-bs-target="#experianceToggle3" data-bs-toggle="modal" data-bs-dismiss="modal">Next to Third</button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="modal fade " id="experianceToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                                    <div className="modal-dialog modal-dialog-centered">
                                      <div className="modal-content bg-dark text-light">
                                        <div className="modal-header">
                                          <h5 className="modal-title" id="exampleModalToggleLabel2">LEADERSHIP EXPERIENCE</h5>
                                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <ul className="text-start ps-0">
                                                <li>
                                                    <a href="/#">
                                                        <span>Member of the Sciences Curriculum Committee (Elected Position) </span>
                                                    </a> 
                                                    Faculty of Arts & Science, University of Toronto (Sept 2015 – May 2016)                                            
                                                </li>
                                                <li>
                                                    <a href="/#">
                                                        <span>Income Tax Supervisor</span>
                                                    </a>
                                                    University of Toronto Income Tax Clinic (April 2015 – May 2016)
                                                </li>
                                                <li>
                                                    <a href="/#">
                                                        <span> Vice President </span>
                                                    </a> 
                                                    Statistical Sciences Association of Students (formerly UT-Stats Club) 2013 – 2014                                                        
                                                </li>
                                            </ul>            
                                        </div>
                                        <div className="modal-footer">
                                          <button className="modal-btn" data-bs-target="#experianceToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Back to Second</button>
                                          <button className="modal-btn" data-bs-target="#Experiance" data-bs-toggle="modal" data-bs-dismiss="modal">Back to first</button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                            </div>
                            <div className="tab-pane fade" id="pills-education" role="tabpanel"
                                aria-labelledby="pills-education-tab">
                                <ul className="text-start ps-0">
                                    <li>
                                        <a href="/#">
                                            <span>
                                                Master of Science - MS, Biostatistics with Concentration in Machine Learning in Healthcare                                               
                                            </span></a> Dalla Lana School of Public Health, University of Toronto<br/>
                                            2016-2021
                                    </li>
                                    <li>
                                        <a href="/#">
                                            <span>
                                                Honor's Bachelors of Science, Mathematics and Statistics
                                                Institute
                                            </span>
                                        </a> 
                                        University of Toronto Department of Statistical Sciences<br/>
                                        2008-2016
                                    </li>                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    
      </>
      
    );
  }
  
  export default About;
  
  