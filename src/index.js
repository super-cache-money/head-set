const React = require('react');
const {Helmet} = require('react-helmet');

module.exports = React.createClass({
  render: function(){
    const {title, description, image, canonicalUrl} = this.props;
    const computedTags = [];

    if (title) {
      computedTags.push(<title>{title}</title>);
      computedTags.push(<meta property="og:title" content={title}/>);
    }

    if (description) {
      computedTags.push(<meta name="description" content={description}/>);
      computedTags.push(<meta property="og:description" content={description}/>);
    }

    if (image) {
      computedTags.push(<meta property="og:image" content={image}/>);
    }

    if (canonicalUrl) {
      let fullCanonicalUrl = canonicalUrl;
      if (canonicalUrl[0] === '/') {
        fullCanonicalUrl = 'https://kandua.com' + canonicalUrl
      }
      computedTags.push(<link rel="canonical" href={fullCanonicalUrl}/>);
      computedTags.push(<meta property="og:url" content={fullCanonicalUrl}/>);
    }

    return (
      <Helmet>
        {computedTags}
        {this.props.children}
      </Helmet>
    )
  }
});