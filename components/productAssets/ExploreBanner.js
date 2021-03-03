import React from 'react';
import Link from 'next/link';

export default class ExploreBanner extends React.Component {
  constructor(props) {
    super(props);

    this.exploreContainer = React.createRef();
    this.image = React.createRef();

    this.handleScroll = this.handleScroll.bind(this);
    this.animate = this.animate.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    window.requestAnimationFrame(this.animate);
  }

  animate() {
    if (!this.exploreContainer.current) {
      return;
    }
    const dimensions = this.exploreContainer.current.getBoundingClientRect();
    const x = window.matchMedia('(min-width: 768px)');
  }

  render() {
    return (
      <div className="py-5 mb-5 explore-banner">
        <div className="bg-brand300 position-relative py-md-5">
          {/* Image Absolute */}
          <div className="position-md-absolute left-0 bottom-0 right-0">
            <div className="custom-container px-0">
              <div className="row">
                <div className="col-md-5 offset-md-7">
                  <div className="position-relative">
                    <div className="position-md-absolute right-0 left-0 bottom-0">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
