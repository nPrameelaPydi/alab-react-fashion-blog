//import PropTypes from 'prop-types';


function Article(props) {
    return (
        <article>
            <time>{props.time}</time>
            <h2>{props.blogHeading}</h2>
            <img src={props.imgSrc} alt={props.blogHeading}></img>
            <p>{props.content}</p>
            <a href={props.link} className="continues">Continues...</a>
        </article>
    )
}

export default Article;