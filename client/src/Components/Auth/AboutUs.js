import React from 'react';
import { Link } from 'react-router-dom';
import MetaTags from 'react-meta-tags';
import '../Base.css';

const meta ={
    title: 'About Food Truck Finder',
    description: 'I am a description, and I can create multiple tags',
    canonical: 'https://www.foodtruckfinder.life/AboutUs',
    meta: {
        charset: 'utf-8',
        name: {
            keywords: 'react,meta,document,html,tags'
        }
    }
}

const aboutUS ={
    marginBottom:60,
}

    

class AboutUs extends Component {
    render() {
      return (
        <div id="aboutUs" className="about-us">
        <DocumentMeta {...meta} />
          <h2>About Food Truck Finder</h2>
          <p>Cras facilisis urna ornare ex volutpat, et
          convallis erat elementum. Ut aliquam, ipsum vitae
          gravida suscipit, metus dui bibendum est, eget rhoncus nibh
          metus nec massa. Maecenas hendrerit laoreet augue
          nec molestie. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.</p>
   
          <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
        </div>
      );
    }
  }



export default AboutUs;