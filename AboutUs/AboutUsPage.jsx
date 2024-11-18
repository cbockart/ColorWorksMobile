//About Us
import React from 'react';
import './AboutUsPage.css';
import TopHeader from '../../components/Navigation/HeaderNavigation/topHeader';
import BottomHeader from '../../components/Navigation/HeaderNavigation/bottomHeader';
import ColorWorksText from '../../components/ColorWorksText/ColorWorksText';

import RebeccaImage from '../../Images/History_AboutUs/Rebecca.jpg'
import KaitlynImage from '../../Images/History_AboutUs/Kaitlyn.jpg'
import ShannonImage from '../../Images/History_AboutUs/Shannon.jpg'
import statesImage from '../../Images/History_AboutUs/background_remove_states.png'
import europeImage from '../../Images/History_AboutUs/background_remove_europe.png'
import HomePageTopSection from '../../components/HomePageTopSection/HomePageTopSection';

import { useFocusEffect } from '@react-navigation/native';

  const AboutUs = () => {
    const resetState = () => {
      window.scrollTo(0, 0);
    };

    useFocusEffect(
      React.useCallback(() => {
          resetState();
          return () => {};
      }, [])
    );

    return (
      <>
      <div className='about-us-whole-container'>
        <TopHeader />
        {/* Screen Header */}
        <HomePageTopSection headerText={"About Us"} hasDropdown={false}/>

        {/* Rebecca pic and description */} 
        <img src={RebeccaImage} alt="Rebbeca" className='about-us-images-container'/>
          <div className="colorworks-subheader-text"> 
          Rebecca Bockart <br />
          VP of Organizational Learning <br />
          Master Trainer <br />
          Executive Coach <br />
          </div>
          <div className="colorworks-information-text">
          Rebecca Bockart has worked directly with families and children for over 25 years as an early childhood educator. 
          She has played several roles within the education field acting as a lead teacher, preschool director, and private school owner. 
          During her career Rebecca has acquired multiple certifications focused on learning differences and neurodiversity and effective 
          classroom management. For the past 15 years Rebecca has worked as a ColorWorks certified Family Life Coach, 
          content developer, and the business’s lead corporate trainer. <br /><br />

          Rebecca conducts leadership seminars for fortune 5oo companies, small businesses, and military organizations nationwide. 
          Additionally, Rebecca helps families build stronger communication skills globally as a large group presenter, her 
          sessions focus on the ColorWorks parenting skills and how better communication can restore family dynamics. She speaks 
          with passion and humor, drawing from her own leadership experiences and from 25 years of observing the controlled chaos 
          that is early childhood education. Rebecca is an Extrovert Orange/Green mother of two grown daughters and has been happily 
          married to her husband Clay for 28 years. For fun Rebecca adopts retired greyhounds and is a hiking and cheese enthusiast. <br /><br />
          </div>
        

        {/*Kaitlyn pic and description */}
        <img src={KaitlynImage} alt="Part 4" className='about-us-images-container'/>
        <div className="colorworks-subheader-text"> 
        Caitlyn Kruse  <br />
        VP of Business Development  <br />
        Marketing Specialist  <br />
        </div>
        <div className="colorworks-information-text">
        Cait Kruse is the newest member of the ColorWorks Group team. After earning her bachelor's degree in 
        Communication Studies from the University of Nebraska Lincoln in 2014, she worked for the College 
        of Business Administration at UNL as the Outreach Support Associate for two years where she designed 
        web pages and promotional materials and developed department magazines. She joined ColorWorks in the 
        Spring of 2016. She also has experience as a reading paraprofessional in the public school system and 
        has gained great insight in the roles and responsibilities of teachers, and how to help children learn.<br /><br />

        Caitlyn has been exposed to the ColorWorks program for over 20 years. She is excited to be a part of 
        the ColorWorks group and focuses on marketing for the company, including managing the website, 
        social media, and promotional campaigns. Caitlyn is currently in the process of becoming a certified 
        ColorWorks instructor and coach and is very excited to start helping build stronger families. Caitlyn, 
        an Orange/Green, is happily married with three lovely children.<br /><br />
        </div>
          

        {/*Shannon pic and description */}
        <img src={ShannonImage} alt="Part 4" className='about-us-images-container'/>
        <div className="colorworks-subheader-text"> 
        Shannon Ward, M.A. <br />
        Owner and President of ColorWorks<br />
        Master Trainer, Executive Coach, Author <br />
        </div>
        <div className="colorworks-information-text">
        Shannon Ward has been helping people build stronger relationships at work and at home since 1998. 
        She earned a master’s degree in Family and Organizational Communication in 2002. She has over 25 
        years of expertise as a master trainer and executive coach including five years of experience as a 
        Corporate Training / Organizational Development Manager with more than 100 hours certification training 
        in personality types and temperament theory.<br /><br />

        Shannon worked for five years to research, create, design, test, and teach a set of research-based 
        communication courses that are now taught to parents, couples, educators, leaders and military families. 
        Shannon also created three unique, original, proprietary communication-based models for improving relationships. 
        She wrote a book, revised in 2018, called Parenting by Personality. She is currently working on a second book 
        focused on teaching her proprietary stress management tool called C.A.L.M. to parents.<br /><br />

        In 2005, Shannon established Family ColorWorks, LLC, now known as ColorWorks Group, LLC, a family-focused, 
        service-oriented business that helps ColorWorks clients build stronger, healthier relationships based on 
        communication and mutual understanding. <br /><br />

        Shannon is an Extrovert Blue/Orange who has been happily married to Steve for over 40 years. She has two 
        adult children and enjoys spending time with her 5 grandchildren and snuggling her 90 lb bernedoodle named Berni.<br /><br />
        </div>
          

        {/*Mission Statement */}
        <ColorWorksText type={'header'} inputText={"Mission Statement"}></ColorWorksText>
        <div className="colorworks-information-text">
          Our business is People. Busy parents, leaders, educators, and military service members and 
          their families who need better tools to restore and build deeper, more meaningful relationships 
          at home, work, and school. We have created the tools you need and delight in helping people 
          find success in using them.
        </div>
    
        {/* states pic */}
        <div className='states-image-container'>
          <img src={statesImage} alt="Part 4" className="states-image" />
        </div>
         {/* europe pic */}
         <div className="europe-image-container">
          <img src={europeImage} alt="Part 4" className="europe-image" />
        </div>
        
        {/*History of the Company */}
        <ColorWorksText type={'header'} inputText={"Why Choose ColorWorks"}></ColorWorksText>
        <div className="colorworks-information-text" style={{marginBottom: '20%'}}>
        Because it works. Simple as that. At a time when new “experts” pop up on social media 
        everyday you need something that is based on science, 25 years of experience, and works 
        fast when your family or work relationships need repair and restoration. ColorWorks has answers 
        for all your relationship communication concerns. <br /><br />

        We teach efficient, reliable skills and stress management processes. We share profound but 
        accurate perspectives about each of the 16 personality type combinations. We offer practical 
        communication tools that have the power to change a relationship in seconds. That may sound impossible,
        but with ColorWorks you will learn to establish healthy boundaries, restore your relationships, 
        and become the most resilient version of your unique personality type. <br /><br />
        </div>
        
        <BottomHeader />
      </div> 
      </>

    );
  };
  export default AboutUs;
