import React from 'react';
import { Link } from 'react-router-dom';
import PostAuthor from '../components/PostAuthor';
import Thumbnail from '../images/blog22.jpg';

const PostDetails = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <div>
            <PostAuthor />
          </div>

          <div className="post-detail__header-btn">
            <Link
              to={`/posts/werwer/edit`}
              className="btn post-detail__buttons"
            >
              Edit
            </Link>
            <Link
              to={`/posts/werwer/delete`}
              className="btn danger post-detail__buttons"
            >
              Delete
            </Link>
          </div>
        </div>

        <h1>This is the post title!</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          architecto, sit placeat sed laboriosam praesentium corporis excepturi
          nulla, explicabo eaque animi officiis. Aspernatur voluptas corporis
          magni mollitia soluta, unde, praesentium possimus dolorum
          exercitationem, ex nisi! Veniam in animi vero consequatur.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
          ipsam beatae laborum labore voluptatibus eius tenetur debitis natus
          nostrum dolor. Veritatis et ipsum ex commodi voluptate, corrupti dicta
          ut cum quas ullam repudiandae assumenda explicabo. Repellat, tempore
          atque quasi tenetur saepe voluptatibus culpa dignissimos, possimus
          sint accusamus, ullam quidem pariatur enim dolorum delectus vel a?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          magnam in unde sit. Similique repellat, neque odio quisquam sapiente
          repudiandae asperiores nisi, exercitationem eveniet deserunt doloribus
          expedita ipsum nostrum illum ipsa ducimus adipisci quibusdam
          cupiditate sint ad voluptatibus voluptates! Minus quibusdam blanditiis
          dolorem laboriosam eius praesentium exercitationem consectetur error
          natus magnam ipsa quidem similique quisquam perferendis consequuntur
          quia animi sint voluptatum, ut a totam minima? Aliquid ratione quam
          consequatur ut molestias obcaecati esse porro quasi dolores sed
          voluptas assumenda deleniti doloribus rem tempora modi praesentium
          voluptate in dolorem, doloremque perspiciatis ipsum, numquam animi.
          Officia mollitia in suscipit laborum nesciunt perferendis eum non unde
          nisi, saepe dolores odio repellendus atque libero quisquam harum.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic suscipit
          sequi corporis laboriosam. Ipsa, provident a beatae sapiente ad
          facilis!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          sint nostrum dolores nobis aspernatur id labore laboriosam rerum sed
          ipsum possimus, ducimus reprehenderit aliquam error. Ullam amet et
          reprehenderit ex, neque minima sapiente doloremque totam, eius
          adipisci aperiam vero iure. Nisi molestiae eligendi quos quis!
          Molestias soluta maxime, cum ullam voluptates velit, ipsum iusto eos
          natus quod in commodi ducimus labore doloribus ipsa tenetur nisi
          dolores minima cumque voluptate aut? Esse harum architecto ad tempora
          excepturi tempore? Corrupti magnam quaerat iure saepe suscipit, sit
          exercitationem eaque autem aliquid totam, nihil, iste dolores. Dolore,
          id! Illum quisquam fugiat ipsum distinctio architecto odit. Molestiae
          expedita impedit at neque delectus ad nesciunt eveniet, dolorem
          doloremque dolor alias minus esse earum id officia voluptatibus
          numquam eius nemo natus tempore iste error dolorum. Ab debitis
          accusantium sequi labore suscipit reprehenderit nisi numquam totam eos
          pariatur placeat facere eveniet possimus obcaecati cum vitae, natus
          dolorum facilis! Corporis iusto repellat rem molestias pariatur quasi
          consequatur aliquid, possimus in architecto totam non, autem
          doloribus! Possimus nostrum est eos ea alias laborum maxime aliquid
          cupiditate numquam laboriosam aliquam, voluptatem nobis similique
          soluta dolorem nihil consequatur. Consectetur optio at sit blanditiis
          dolorum repellendus nesciunt inventore vitae magni, cupiditate
          aspernatur quisquam.
        </p>
      </div>
    </section>
  );
};

export default PostDetails;
