import { Avatar, Button } from '@mui/material'
import ProfilePost from '../../components/ProfilePost'
import './pp.css'
import Loader from '../../components/Loader';
import { useEffect, useState } from 'react';
import { deleteMyProfile, followAndUnfollowUser, getMyPosts, getUserPosts, getUserProfile, logoutUser } from '../../Actions/User';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Menu from '../../components/Menu';

const ProfilePage = ({ mine }) => {

  const params = useParams();

  const dispatch = useDispatch();
  const [following, setFollowing] = useState();

  const getPosts = mine === false
    ? () => {
      dispatch(getUserPosts(params?.id));
      dispatch(getUserProfile(params?.id));
    }
    : () => { dispatch(getMyPosts()) }

  const { user, loading: userLoading } = useSelector((state) => mine === false ? state.userProfile : state.user);
  const { user: me } = useSelector((state) => state.user);
  const { loading, error, posts } = useSelector((state) => mine === false ? state.userPosts : state.myPosts);
  const {
    error: likeError,
    message,
    loading: deleteLoading,
  } = useSelector((state) => state.like);


  const handleFollow = async () => {
    setFollowing(!following);
    await dispatch(followAndUnfollowUser(user._id));
    dispatch(getUserProfile(params.id));
  };

  useEffect(() => {
    getPosts()
  }, [dispatch, params?.id]);

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

  useEffect(() => {
    if (user) {
      user.followers.forEach((item) => {
        if (item._id === me._id) {
          setFollowing(true);
        } else {
          setFollowing(false);
        }
      });
    }
  }, [user, me._id, params.id]);

  return loading === true || userLoading === true ? (
    <Loader />
  ) : (
    <>
      <Menu />
      <input accept=".png , .jpg" type="file" name="file" id="file" hidden />
      <div className="pp_container">
        <div className="bio">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', justifySelf: 'center' }}>
            <Avatar>{user?.name?.charAt(0)}</Avatar>
            <p className="name">{user?.name}</p>
          </div>
          <div className="follow-count">
            <span>{posts?.length} posts</span>
            <span>{user?.followers?.length} Followers</span>
            <span>{user?.following?.length} Following</span>
          </div>
        </div>
        {!mine && <Button onClick={handleFollow} variant={following ? 'outlined' : 'contained'} sx={{ margin: '1rem' }}>{following ? 'Unfollow' : 'Follow'}</Button>}
        <div className="posts">
          <h3>Posts:</h3>
          <div className="post-grid">
            {
              posts?.map((post) => (
                <ProfilePost
                  key={post._id}
                  postId={post._id}
                  caption={post.caption}
                  postImage={post.image.url}
                  likes={post.likes}
                  comments={post.comments}
                  ownerImage={post.owner.name.charAt(0)}
                  ownerName={post.owner.name}
                  ownerId={post.owner._id}
                  isAccount={true}
                  isDelete={true}
                />
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfilePage
