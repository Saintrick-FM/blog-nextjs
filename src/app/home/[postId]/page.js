import PostDetailsPage from "../../components/PostDetailsPage";

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  //console.log("search params = ", searchParams, " Parent = ", parent);
  const postId = params.postId;
  // let userData = getUserInfos(postId);
  // let user = await userData;
  return {
    title: `Demo | ${postId}`,
    description: `Page relative aux post : ${postId}`,
  };
}
function PostId({ params: { postId } }) {
  return <PostDetailsPage postId={postId}></PostDetailsPage>;
}

export default PostId;
