import React from "react";
import { Item } from "./Item";
import "./style.css";
import saathi from "../../assets/saathi.png";
import cricfantasy from "../../assets/cricfantasy.png";
import extracker from "../../assets/extracker.png";
import vrikshandolan from "../../assets/vrikshandolan.png";
import shakesjeer from "../../assets/shakesjeer.png";
import junnon from "../../assets/junnon.png";

export const Proj = () => {
  return (
    <div className="project">
      <div className="upper">
        <h1>PROJECTS</h1>
        <div className="line"></div>
      </div>
      <div className="p-items">

        <Item
          head="ShakesJeer"
          img={shakesjeer}
          link="https://shakesjeer.com/"
          para="ShakesJeer is open-mic society in NSUT Delhi. It provide a platform for the talent that is concealed within the students in abundance! The open mic covers Stand Ups, Raps and Poetry with a special limelight on the art of comedy and wit. It envision a stage full of opportunities not only for the students of NSUT but for any person, student or not, across the country with the right passion and the will to participate. its weboste is for showcasing their open-mic events in past and the news for th upcoming projects."
        />
        <Item
          head="JunoonNSUT"
          img={junnon}
          link="https://junoonnsut.com/"
          para="Junoon is a platform for photography and videography enthusiasts of NSUT where they can showcase and nurture their talents . Our members excel not just in different genres of photography but also in film making, photo editing and storytelling through pictures. This website is for showcasing all the events covered by Junoon and photographers. Our society provides the platform to the photography enthusiasts as they exhibit talent through their pictures that we feature on our social media handles. We conduct photowalks around Delhi, hence providing a captivating experience for everyone who wants to learn and grow in this field."
        />
        <Item
          head="SAATHI"
          img={saathi}
          link="/"
          para="A social media platform for people who are talented in co-curricular activities. It connects seekers to finders/recruiters according to the specific activity. It works on geo-location factor i.e.; it can give the location and distance between you and the talent you are looking for. Example – if someone wants to open a music band then he can easily connect to talented drummers, guitarists, etc. through this app. It is a team project and is under development."
        />
        <Item
          head="Cric-Fantasy"
          img={cricfantasy}
          link="https://github.com/unnatmittal/cric-fantasy"
          para="Cric-Fantasy is a cricket-fantasy-stock game app. It is for people who are cricket lovers and have a decent interest in stocks. In this each cricket player is like company stock in share market and w.r.t player’s performance his prices vary. Basically the user can be like cricket expert who can predicts the score of certain players and can make profit by investing in them. It is a 2-member project, main contribution from me is the idea of the game, it is also under development."
        />
        <Item
          head="Expense Tracker"
          img={extracker}
          link="https://github.com/unnatmittal/expense-tracker"
          para="Expense Tracker can manage the person’s finance day-wise, week-wise, month-wise with incoming and outgoing incomes. It can easy the finanace management for the users who spend money loosely. User can connect to it from anywhere as it is sync with google firebase. It is beneficial for people who wants to control their expenses for a better living. It is a solo-project"
        />
        {/* <Item
          head="Corona Map"
          img={corona}
          link="https://github.com/unnatmittal/corona-map"
          para="Corona Map, gives you the world map with different zones of colors. It is an API project, gives world's COVID-19 data. It will darken the spots on the world map where no. of cases are more.New version of the project is on progress - User can search any city and redirected to city map with district COVID-19 data."
        /> */}
        {/* <Item
          head="Tesla Clone"
          img={tesla}
          link="https://github.com/unnatmittal/tesla"
          para="Tesla Clone is a React Native Project. It has new models of cars each with its own specification and prices. It has some decent UI properties."
        /> */}
        <Item
          head="Vrikshandolan"
          img={vrikshandolan}
          link="https://vrikshandolan.com/"
          para="Vrikshandolan – NGO, which is committed to planting trees near Delhi NCR. Vrikshandolan’s aim is to take corrective measures to increase the green cover, restore soil health and manage natural resources appropriately. Vrikshandolan plants saplings and supports them to become trees. At Vrikshandolan we have been creating urban and rural forests. Vrikshandolan does all this with support from individuals and corporates who wish to bring change to society under their CSR (Corporate Social Responsibility) initiatives."
        />
      </div>
    </div>
  );
};
