import blogImage from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'

function Article() {
    return (
        <article>
            <time datetime="11-12-20">11/12/20</time>
            <h2>On the Street in Brooklyn</h2>
            <img src={blogImage} alt="A woman standing on brooklyn street"></img>
            <p>Cray ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus officiis aut mollitia,
                laboriosam optio neque cum quos, quia ea consectetur quibusdam voluptate ex molestias rem fugit
                dolorem soluta aspernatur dicta nulla odio eum eius quam quasi obcaecati! Eaque voluptatem tenetur
                voluptates atque voluptate corrupti cumque blanditiis minus similique, dolor deleniti fuga natus
                quasi ipsum, minima autem error? Veniam sapiente debitis deserunt ex aliquam reiciendis dolorum
                autem quos labore omnis enim accusamus quia consectetur vel, repudiandae eum atque sint? Quae velit
                nobis hic necessitatibus ipsa ea delectus laboriosam quibusdam corporis provident dignissimos natus
                totam magnam voluptates, ab repudiandae? Maxime, ipsum odit!</p>
            <a href="#read-more-1" class="continues">Continues...</a>
        </article>
    )
}

export default Article;