import {Component} from 'react'
import Faqs from './components/Faqs'
import TabItem from './components/TabItem'
import ProjectItem from './components/ProjectItem'
import Header from './components/Header'

import './App.css'

const faqsList = [
  {
    id: 0,
    questionText:
      'Q: What do you enjoy the most about being a frontend developer?',
    answerText:
      'A: I love turning creative ideas into interactive and visually appealing websites that users enjoy navigating.',
  },
  {
    id: 1,
    questionText: 'Q: Which frontend technologies do you use frequently?',
    answerText:
      'A: My toolkit includes HTML, CSS, and JavaScript, with a focus on frameworks like React for building dynamic user interfaces.',
  },
  {
    id: 2,
    questionText:
      'Q: How do you ensure your websites work well on all devices?',
    answerText:
      'A: I prioritize responsive design, testing across various devices, to ensure a seamless and consistent experience for users.',
  },
  {
    id: 3,
    questionText: "Q: Can you share a project that you're proud of and why?",
    answerText:
      "A: One project I'm proud of is a personal portfolio site where I experimented with modern design trends and showcased my skills in an engaging way.",
  },
]

const tabsList = [
  {tabId: 'STATIC', displayText: 'Static'},
  {tabId: 'RESPONSIVE', displayText: 'Responsive'},
  {tabId: 'DYNAMIC', displayText: 'Dynamic'},
  {tabId: 'REACTJS', displayText: 'Reactjs'},
]

const projectsList = [
  {
    projectId: 0,
    category: 'STATIC',
    imageURL:
      'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/nemo-c1-img.png',
    title: 'Movie Page',
    description:
      'The Movie Page is crafted with static elements and enhanced by a Bootstrap carousel to showcase multiple images. Below, explore movie details, including title, description, and related recommendations for an immersive viewing experience.',
  },
  {
    projectId: 1,
    category: 'STATIC',
    imageURL:
      'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Book Store Page',
    description:
      'Explore our Bookstore Page for an enriching journey into knowledge and captivating narratives. Immerse yourself in fascinating mythology stories and novels that promise both intrigue and wisdom, creating a haven for book lovers seeking a compelling and enlightening read.',
  },
  {
    projectId: 2,
    category: 'STATIC',
    imageURL:
      'https://img.freepik.com/free-vector/gradient-podcast-cover-template_23-2149449551.jpg',
    title: 'Podcast Page',
    description:
      "Dive into our Podcast Page, a treasure trove of valuable knowledge and life insights shared by remarkable personalities. Immerse yourself in meaningful conversations that offer profound wisdom and engage with extraordinary individuals, enriching your understanding of life's essential values",
  },
  {
    projectId: 4,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r4-img.png',
    title: 'VR Website',
    description:
      'VR Website enables users to explore AR and VR Products and Industry happenings.',
  },
  {
    projectId: 5,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r2-img.png',
    title: 'Food Munch',
    description: 'Food Much Website is a user-centric food tech website.',
  },
  {
    projectId: 6,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r3-img.png',
    title: 'Portfolio',
    description:
      'A portfolio is the best alternative for a resume to showcase your skills to the digital world.',
  },

  {
    projectId: 8,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d3-img.png',
    title: 'Speed Typing Test',
    description:
      'Speed Typing Test Application is capable of calculating the time to type the randomly generated quote.',
  },
  {
    projectId: 9,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d1-img.png',
    title: 'Random Joke Page',
    description:
      'Random Joke Page is an API-based dynamic Web Application that generates a new joke.',
  },
  {
    projectId: 10,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d2-img.png',
    title: 'Sizing An Image',
    description:
      'This is a dynamic web application capable of adjusting the size of an element using DOM manipulations.',
  },
  {
    projectId: 11,
    category: 'REACTJS',
    imageURL:
      'https://assets.ccbp.in/frontend/content/react-js/appointments-app-output.gif',
    title: 'Appointments App',
    description:
      'The Appointments App is designed to help you create the perfect schedule, enabling efficient planning, time-saving for future events, and preserving memorable moments for easy recollection.',
  },
  {
    projectId: 12,
    category: 'REACTJS',
    imageURL:
      'https://assets.ccbp.in/frontend/content/react-js/comments-app-output-v0.gif',
    title: 'Comments Application',
    description:
      'The Comments Application serves as a platform for sharing public opinions, offering compliments, providing suggestions for improvement, and expressing appreciation for the content or work through comments.',
  },
  {
    projectId: 13,
    category: 'REACTJS',
    imageURL:
      'https://assets.ccbp.in/frontend/content/react-js/browser-history-output.gif',
    title: 'Google History Search',
    description:
      'Access Google search results to review your browsing history, effortlessly delete specific entries, and easily search for past activities by application or website names.',
  },
  {
    projectId: 14,
    category: 'REACTJS',
    imageURL:
      'https://assets.ccbp.in/frontend/content/react-js/money-manager-output.gif',
    title: 'Money Manager',
    description:
      'Money Manager is a powerful application that facilitates investment tracking, monitors financial gains and losses, and efficiently records expenditures. It simplifies the process of managing finances, making it easier to maintain a balanced budget for smoother household operations.',
  },
  {
    projectId: 15,
    category: 'REACTJS',
    imageURL:
      'https://assets.ccbp.in/frontend/content/react-js/emoji-game-output-v2.gif',
    title: 'Emoji Game',
    description:
      "Emoji Game: A delightful and easy-to-grasp experience. Click emojis to score points; win or lose based on unique choices. Beat records, reset the game with 'Play Again' while maintaining the top score.",
  },
  {
    projectId: 16,
    category: 'REACTJS',
    imageURL:
      'https://assets.ccbp.in/frontend/content/react-js/passowrd-manager-output-v0.gif',
    title: 'Password Manager',
    description:
      'The Password Manager application ensures seamless password management, allowing you to securely store and retrieve passwords when needed. It features encryption for added security, enabling the one-click concealment of your passwords.',
  },
]

class App extends Component {
  state = {
    activeTabId: tabsList[0].tabId,
  }

  updateActiveTabId = tabId => {
    this.setState({activeTabId: tabId})
  }

  getFilteredProjects = () => {
    const {activeTabId} = this.state

    const filterdProjects = projectsList.filter(
      eachProjectDetails => eachProjectDetails.category === activeTabId,
    )

    return filterdProjects
  }

  render() {
    const filterdProjects = this.getFilteredProjects()
    const {activeTabId} = this.state

    return (
      <div className="app-container">
        <Header />
        <h1 className="title">Projects</h1>
        <p className="description">
          Your skills and achievements showcase your strengths and abilities.
          Speak about any new skills or software you learnt to perform the
          project responsibilities.
        </p>

        <ul className="tabs-container">
          {tabsList.map(tabDetails => (
            <TabItem
              key={tabDetails.tabId}
              tabDetails={tabDetails}
              updateActiveTabId={this.updateActiveTabId}
              isActive={tabDetails.tabId === activeTabId}
            />
          ))}
        </ul>

        <ul className="project-list-container">
          {filterdProjects.map(projectDetails => (
            <ProjectItem
              key={projectDetails.projectId}
              projectDetails={projectDetails}
            />
          ))}
        </ul>
        <hr className="horizontalline" />
        <div className="QandAcontainer">
          <Faqs faqsList={faqsList} />
        </div>
      </div>
    )
  }
}

export default App
