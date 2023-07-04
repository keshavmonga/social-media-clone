import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers, getFollowingPosts } from '../../Actions/User'
import Post from '../../components/Post'
import './hp.css'
import React, { useEffect } from 'react'
import Loader from '../../components/Loader'
import Menu from '../../components/Menu'

const HomePage = () => {
  const dispatch = useDispatch();

  const { loading, posts, error } = useSelector(
    (state) => state.postOfFollowing
  );

  const { users, loading: usersLoading } = useSelector(
    (state) => state.allUsers
  );

  const { error: likeError, message } = useSelector((state) => state.like);

  useEffect(() => {
    dispatch(getFollowingPosts());
    dispatch(getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      dispatch({ type: "clearErrors" });
    }

    if (likeError) {
      dispatch({ type: "clearErrors" });
    }
    if (message) {
      dispatch({ type: "clearMessage" });
    }
  }, [error, message, likeError, dispatch]);

  return loading === true || usersLoading === true ? (
    <Loader />
  ) : (
    <>
      <Menu />
      <div className="main">
        <div className="posts-container">
          {posts?.map(post => (
            <Post
              key={post._id}
              postId={post._id}
              caption={post.caption}
              postImage={post.image.url}
              likes={post.likes}
              comments={post.comments}
              ownerImage={post.owner.name.charAt(0)}
              ownerName={post.owner.name}
              ownerId={post.owner._id}
            />
          ))}
          {posts?.length===0 && <h1>Nothing to Show</h1>}
        </div>
      </div>
    </>
  )
}

export default HomePage
