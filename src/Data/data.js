const websiteData = [
  {
    about: {
      h1: "About Me",
      h3: "Full Stack Developer",
      p:
        "I am experienced Software Engineer with a demonstrated history of working in the information technology and services industry. Skilled in MERN Stack, Android Development, Bootstrap, Artificial Neural Networks, HTML5, and Python (Programming Language). Strong engineering professional with a Master of Computer Applications - MCA focused in Artificial Intelligence from The Australian National University."
    }
  },
  {
    education: {
      h1: "Education",
      data: [
        {
          ANU: {
            heading: "Australian National University",
            info:
              "Masters of Computing with Specialisation in Artificial Intelligence",
            date: "November 2019",
            details:
              "Completed my Masters with major focus in Artificial Intelligence and gained knowledge in the field of software development."
          }
        },
        {
          IBSAR: {
            heading: "Institute of Business Studies & Research",
            info: "Bachelors of Computing with Majors in Software Development",
            date: "Feb 2014 - Apr 2017",
            details:
              "Completed my Bachelors with major focus in Software Development and designing software architecture. Further, gained understanding about clean architecture and complex design problems."
          }
        }
      ]
    }
  },
  {
    work: {
      h1: "Work",
      data: [
        {
          Adapt: {
            heading: "Adapt Ideations Pvt. Ltd.",
            location: "Sydney, Australia.",
            info: "Software Developer",
            date: "November 2018 - Present",
            details1:
              "Worked on various complex API for CHEP backend system. The API included geofence, billing cycle, as well as registering existing and new organisations and customers. Further, I developed the login and logout API with building sessions and storing cookies with JSON web tokens. We used the MERN stack to build this Web App, and this helped the company to bring their backend, and frontend systems under one umbrella of Javascript, moreover solved the scalability issue which they were facing in the previous system which was made on PHP and various other platforms.",
            details2:
              "Worked on improving the battery performance and percentage mapping for Kelvin device using Highcharts for visualisation, this helped the team in calculating the right value for percentage with respect to voltage.",
            details3:
              "Developed Adapt Sniffer an Android application for DHL employees, the application scans all the Wi-Fi devices, cell towers, marks the user’s current location and sends the data to the database every 5 seconds. The goal is to help find Kelvin device whenever it is unable to send its location to the database."
          }
        },
        {
          Aeon: {
            heading: "Aeon Pvt. Ltd.",
            location: "Mumbai, India.",
            info: "Intern",
            date: "September 2017 - October 2017",
            details1:
              "During the four weeks of my internship period, was working with a team of six people and in the first three weeks we developed the website and in the final week leading the team to deploy the website to the headquarters of Aditya Birla Financials. It helped the financial firm to merge all their different websites under one hood, improve UI and various different aspects of website."
          }
        },
        {
          MDS: {
            heading: "MDS Digital Pvt. Ltd.",
            location: "Navi Mumbai, India.",
            info: "Intern",
            date: "September 2017 - October 2017",
            details1:
              "Improved the response time of the website by reducing the image size and using queries to only load when it is needed. Which led to improve in whole performance of the website by 10%."
          }
        },
        {
          MCGM: {
            heading: "Municipal Corporation of greater Mumbai.",
            location: "Mumbai, India.",
            info: "Intern",
            date: "September 2017 - October 2017",
            details1:
              "Key learning was understanding customized version of Telvent software by L&T and how information flows between central site and host site."
          }
        }
      ]
    }
  },
  {
    skills: {
      h1 : "Skills",
      html: "HTML CSS 75%",
      js: "Javascript 85%",
      mern: "MERN Stack 85%",
      python: "Python 75%",
      android: "Android (Java) 65%"
    }
  },
  {
    contact: {
      email: "ankurvazirani05@gmail.com",
      mobile: "+61 0474296023",
      location: "24, Hawdon Street, Ainslie, Canberra, ACT-2602"
    }
  },
  {
    projects: {
      h1: "projects",
      data: [
        {
          NeuralNetwork: {
            title: "Sensitivity to neural network",
            details:
              "Created a Deep neural network (DNN), and applied sensitivity a pruning technique which reduced the size of the net by 5% with improving training time by 10 to 20 seconds in every 50 epochs."
          }
        },
        {
          laneSegmentation: {
            title: "Lane Segmentation",
            details:
              "Created a Convolutional neural network (CNN), for a computer vision project and used CULane dataset. With this as a team project we created a report as well as submitted our findings to the university."
          }
        },
        {
          venom: {
            title: "Venom",
            details:
              "A fun and light android game created to show the knowledge and expertise in the field of android development."
          }
        },
        {
          mernStack: {
            title: "MERN STACK Projects",
            details:
              "I have created multiple mern stack projects. This was made in focus to get a good grip on MERN stack few of the projects are To Do List, my personal cv website. "
          }
        },
        {
          toDoList: {
            title: "To Do List",
            details:
              "Created a simple Android app while learning Java for android development."
          }
        },
        {
          wifiCellScan: {
            title: "Wifi & Cell Scanner",
            details:
              "The android app helps us to scan all the wifi and cell points within the radius. Further, it keeps track of location and sends all the data to the database in every 5 seconds."
          }
        }
      ]
    }
  }
];

module.exports = websiteData;
