import React from "react";
import Modal from "react-modal";
import Fade from 'react-reveal/Fade'; 

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

import styles from "./projects.module.css";

library.add(faWindowClose);

Modal.setAppElement("#___gatsby");
const PROJECTS = [
  {
    name: "Fincoda",
    stacks: ["HTML", "CSS", "Bootstrap"],
    description: "A web app that utilizes survey services to check group/company member's performance",
    images: ['fincoda_1.png', 'fincoda_2.png', 'fincoda_3.png'],
    github: "",
    website: "http://fincoda.dc.turkuamk.fi",
    fadeDuration: 1500
  },
  {
    name: "Kushiro food order mobile app",
    stacks: ["React Native", "React", "Redux"],
    description: "A mobile app that support ordering food from some popular stores in Central Kushiro, Hokkaido, Japan",
    images: ['Kushiro_1.jpg', 'Kushiro_2.jpg', 'Kushiro_3.jpg'],
    github: "https://github.com/duyn55/Food-delivery-Kushiro",
    website: "",
    fadeDuration: 2000
  },
  {
    name: "Capstone Project with Bayer Oy",
    stacks: ["NodeJS", "MongoDB", "Handlebars.js", "Agile", "Scrum"],
    description: "Capstone Project: Create a full stack website to have an overview of injuries case at work from Bayer Oy's data.",
    images: ['Bayer_1.png', 'Bayer_2.png'],
    github: "",
    website: "",
    fadeDuration: 2500
  },
  {
    name: "Emaily",
    stacks: ["React", "Redux", "NodeJS", "MongoDB"],
    description: "A personal project that send emails to ask for users' review for a service/product.",
    images: ['Emaily_1.png', 'Emaily_2.png'],
    github: "https://github.com/duyn55/Emaily",
    website: "https://duyn55-emaily.herokuapp.com",
    fadeDuration: 3000
  }
];

class Project extends React.PureComponent {
  state = {
    modalIsOpen: false
  };

  openModal = props => {
    this.setState({ modalIsOpen: true });
  };

  afterOpenModal = () => {};

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    const { name, stacks, description, images, github, website, fadeDuration } = this.props.project;

    return (
      <Fade duration={fadeDuration}>
      <div className={styles.project} style={{ backgroundImage: `url(/img/${images[0]})`}}>
        <div className={styles.hvrbox}>
          <div className={styles["hvrbox-layer_bottom"]}>
          </div>

          <div className={styles["hvrbox-layer_top"]}>
            <div className={styles["hvrbox-text"]}>
            <h4>{name}</h4>
            <h4>{stacks.join(" - ")}</h4>
              <a href="#" className={styles['see-more-button']} onClick={this.openModal}>See more</a>
            </div>
          </div>
        </div>
        <Modal isOpen={this.state.modalIsOpen} contentLabel="Project Detail">
          <div className={styles['modal-container']}>
            <div className={styles["close-icon"]} onClick={this.closeModal}>
              <FontAwesomeIcon icon="window-close" className="fa-2x" />
            </div>
            <h2>{name}</h2>
            <h5>
              {description}
            </h5>
            { website ? <a href={website} target="_blank" className={styles['see-more-button']} style={{ padding: '5px 45px', margin: '5px' }}>Website</a> : false }
            { github ? <a href={github} target="_blank" className={styles['see-more-button']} style={{ padding: '5px 45px', margin: '5px' }}>Github</a> : false}

            <div className="images-container">
              <h2>Sample images</h2>
              {images.map(image => <img src={require(`./img/${image}`)} key={image} /> )}
            </div>
          </div>
        </Modal>
      </div>
      </Fade>
    );
  }
}

class Projects extends React.PureComponent {
  renderProjects = () => {
    return PROJECTS.map(project => {
      return <Project key={project.name} project={project} />;
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.heading}>
          <span>PROJECTS</span>
        </div>
        <div className={styles.projects}>{this.renderProjects()}</div>
        {/* <div className="button-container" style={{textAlign: 'center'}}>
          <a href="#" className={styles.button}>Get in touch</a>
        </div> */}
      </div>
    );
  }
}

export default Projects;
